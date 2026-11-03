// Norskveien – appen
const LEVELS=["A1","A2","B1","B2"]; // A1 er bare startpunkt; leksjoner finnes for A2–B2
const COURSE_LEVELS=["A2","B1","B2"];
const KEY="norskveien.v1";
const $app=document.getElementById("app");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const today=()=>new Date().toISOString().slice(0,10);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const norm=s=>String(s).toLowerCase().replace(/[.,!?;:«»"“”()]/g,"").replace(/\s+/g," ").trim();
const AUTO=["mc","tf","fill","order","listen","dict","pic"]; // automatisk rettet

function fresh(){return {current:null,target:null,lessons:{},tests:{},daily:{},days:[],answered:0,correct:0,skillLast:{},rate:.9,lastVisit:null,updatedAt:0}}
function load(){try{const r=localStorage.getItem(KEY);return r?Object.assign(fresh(),JSON.parse(r)):null}catch(e){return null}}
function save(){S.updatedAt=Date.now();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}cloudPush()}
var C={status:"checking",name:"",uid:null,busy:false,again:false,timer:null};
let S=load()||fresh();
const prevVisit=S.lastVisit; S.lastVisit=today(); try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
let V={view:S.target?"home":"welcome"};

/* ---------- kontoer (Supabase) ---------- */
const CFG=window.NORSK_CONFIG||{};
const HASCFG=!!(CFG.supabaseUrl&&CFG.supabaseAnonKey&&!/YOUR/i.test(CFG.supabaseUrl));
const SB=(HASCFG&&window.supabase)?window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseAnonKey):null;
function mergeState(a,b){
  const n=(b.updatedAt||0)>(a.updatedAt||0)?b:a, o=n===a?b:a, m=Object.assign(fresh(),o,n);
  m.lessons={};new Set([...Object.keys(a.lessons||{}),...Object.keys(b.lessons||{})]).forEach(k=>{const x=a.lessons?.[k],y=b.lessons?.[k];m.lessons[k]=!x?y:!y?x:{done:x.done||y.done,best:Math.max(x.best||0,y.best||0),last:(n.lessons?.[k]||x).last,at:(x.at||"")>(y.at||"")?x.at:y.at}});
  m.tests={};new Set([...Object.keys(a.tests||{}),...Object.keys(b.tests||{})]).forEach(k=>{const x=a.tests?.[k]||{best:0},y=b.tests?.[k]||{best:0};m.tests[k]={best:Math.max(x.best,y.best),passed:!!(x.passed||y.passed)}});
  m.days=[...new Set([...(a.days||[]),...(b.days||[])])].sort();
  m.skillLast={};new Set([...Object.keys(a.skillLast||{}),...Object.keys(b.skillLast||{})]).forEach(k=>{m.skillLast[k]=[a.skillLast?.[k]||"",b.skillLast?.[k]||""].sort()[1]});
  m.daily=Object.assign({},o.daily,n.daily);m.answered=Math.max(a.answered||0,b.answered||0);m.correct=Math.max(a.correct||0,b.correct||0);
  return m;
}
function cloudPush(){if(!C||!C.uid)return;clearTimeout(C.timer);C.timer=setTimeout(cloudWrite,1200)}
async function cloudWrite(){
  if(!C.uid)return;if(C.busy){C.again=true;return}
  C.busy=true;
  const {error}=await SB.from("progress").upsert({user_id:C.uid,state:S,updated_at:new Date().toISOString()});
  setCloud(error?"error":"synced");
  C.busy=false;if(C.again){C.again=false;cloudWrite()}
}
function setCloud(s){C.status=s;const el=document.getElementById("acct");if(el)el.outerHTML=acctChip();if(V.view==="settings")render()}
async function onSignedIn(u){
  if(C.uid===u.id)return;C.uid=u.id;C.name=(u.user_metadata&&u.user_metadata.name)||u.email||"";setCloud("checking");
  const {data,error}=await SB.from("progress").select("state").eq("user_id",u.id).maybeSingle();
  if(error){setCloud("error");return}
  if(data&&data.state){const remote=Object.assign(fresh(),data.state);S=S.target?mergeState(remote,S):remote;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
  if(S.target)await cloudWrite();else setCloud("synced");
  if(V.view==="auth"||((V.view==="welcome"||V.view==="target")&&S.target&&!V.manual))V={view:S.target?"home":"welcome"};
  if(V.view!=="run"&&V.view!=="place")render();
}
async function cloudInit(){
  if(!SB)return setCloud("local");
  SB.auth.onAuthStateChange((ev,s)=>{if(ev==="PASSWORD_RECOVERY"){V={view:"reset"};setTimeout(render,0)}if(s&&s.user)setTimeout(()=>onSignedIn(s.user),0)});
  const {data}=await SB.auth.getSession();
  if(data&&data.session)onSignedIn(data.session.user);else setCloud("signedout");
}
function acctChip(){
  const s=C.status;
  if(s==="local")return HASCFG?`<button id="acct" class="btn ghost sm" data-a="noLogin">Logg inn</button>`:`<span id="acct"></span>`;
  if(s==="signedout")return `<button id="acct" class="btn ghost sm" data-a="auth">Logg inn</button>`;
  const label={checking:"Laster …",synced:C.name,error:"Ikke lagret"}[s]||"";
  return `<button id="acct" class="acct" data-a="settings" title="${esc(s==="synced"?"Framgangen lagres på kontoen din":"Fikk ikke kontakt med serveren. Framgangen lagres i nettleseren.")}"><span class="sdot ${s==="synced"?"ok":s}"></span><span class="acct-t">${esc(label)}</span></button>`;
}

/* ---------- framgang ---------- */
const lid=(L,sk,n)=>`${L}-${sk}-${n}`;
const lessonsOf=(L,sk)=>(COURSE[L]&&COURSE[L][sk])||[];
function skillPct(L,sk){const ls=lessonsOf(L,sk);if(!ls.length)return 0;return Math.round(ls.reduce((t,_,n)=>t+(S.lessons[lid(L,sk,n)]?.best||0),0)/ls.length)}
function levelPct(L){let t=0,c=0;SKILLS.forEach(s=>lessonsOf(L,s.id).forEach((_,n)=>{c++;t+=S.lessons[lid(L,s.id,n)]?.best||0}));c++;t+=S.tests[L]?.passed?100:0;return Math.round(t/c)}
function levelDone(L){let d=0,c=0;SKILLS.forEach(s=>lessonsOf(L,s.id).forEach((_,n)=>{c++;if(S.lessons[lid(L,s.id,n)]?.done)d++}));return [d,c]}
function path(){const a=LEVELS.indexOf(S.current),b=LEVELS.indexOf(S.target);return LEVELS.slice(a+1,b+1)}
function working(){return path().find(L=>!S.tests[L]?.passed)||null}
function markDay(){const d=today();if(!S.days.includes(d))S.days.push(d)}
function streak(){let n=0,d=new Date();const has=x=>S.days.includes(x.toISOString().slice(0,10));if(!has(d))d.setDate(d.getDate()-1);while(has(d)){n++;d.setDate(d.getDate()-1)}return n}
function daysAgo(iso){if(!iso)return null;return Math.round((new Date(today())-new Date(iso))/864e5)}
const skillName=id=>SKILLS.find(s=>s.id===id);
const nb=n=>n===1?"én dag":`${n} dager`;

/* ---------- dagens fokus ---------- */
function todayPlan(){
  const L=working(); if(!L) return null;
  const sk=SKILLS.map(s=>({s,pct:skillPct(L,s.id),last:S.skillLast[L+s.id]||""}));
  const allDone=sk.every(x=>lessonsOf(L,x.s.id).every((_,n)=>S.lessons[lid(L,x.s.id,n)]?.done));
  const tasks=[];
  if(allDone){
    tasks.push({kind:"test",L,title:`Ta nivåtesten for ${L}`,why:"Du har fullført alle leksjonene på dette nivået. Klarer du 70 %, går du videre."});
  }else{
    sk.sort((a,b)=>a.pct-b.pct||(a.last<b.last?-1:a.last>b.last?1:0));
    const weak=sk[0];const ls=lessonsOf(L,weak.s.id);
    let n=ls.findIndex((_,i)=>!S.lessons[lid(L,weak.s.id,i)]?.done);
    if(n<0)n=ls.reduce((m,_,i)=>(S.lessons[lid(L,weak.s.id,i)].best<S.lessons[lid(L,weak.s.id,m)].best?i:m),0);
    const why=weak.pct===0?`${weak.s.nb} er området du ikke har startet på ennå.`:`${weak.s.nb} er ditt svakeste område på ${L} (${weak.pct} %).`;
    tasks.push({kind:"lesson",L,sk:weak.s.id,n,title:ls[n].title,sub:weak.s.nb,why});
    const other=sk.slice(1).sort((a,b)=>(a.last<b.last?-1:a.last>b.last?1:0)||a.pct-b.pct).find(x=>lessonsOf(L,x.s.id).some((_,i)=>!S.lessons[lid(L,x.s.id,i)]?.done||S.lessons[lid(L,x.s.id,i)].best<80));
    if(other){const ol=lessonsOf(L,other.s.id);let m=ol.findIndex((_,i)=>!S.lessons[lid(L,other.s.id,i)]?.done);if(m<0)m=0;
      const d=daysAgo(other.last);
      tasks.push({kind:"lesson",L,sk:other.s.id,n:m,title:ol[m].title,sub:other.s.nb,why:d==null?"Hold alle områdene i gang.":d===0?"Fortsett der du slapp i dag.":`Du har ikke øvd på dette på ${nb(d)}.`});}
  }
  const done=Object.entries(S.lessons).filter(([k,v])=>v.done&&v.best<80&&COURSE[k.split("-")[0]]).sort((a,b)=>a[1].best-b[1].best);
  const rev=done.find(([k])=>!tasks.some(t=>t.kind==="lesson"&&lid(t.L,t.sk,t.n)===k));
  if(rev){const [L2,sk2,n2]=rev[0].split("-");const les=lessonsOf(L2,sk2)[+n2];if(les)tasks.push({kind:"lesson",L:L2,sk:sk2,n:+n2,title:les.title,sub:`Repetisjon · ${skillName(sk2).nb} ${L2}`,why:`Beste resultat var ${rev[1].best} %. En runde til gjør at du husker det.`});}
  if(tasks.length<3)tasks.push({kind:"quick",L,title:"Rask repetisjon",sub:"8 blandede oppgaver · ca. 4 min",why:"Kort, blandet øving fra det du har lært."});
  return tasks.slice(0,3);
}

/* ---------- lyd: opplesning og tale ---------- */
let VOICE=null;const HASTTS="speechSynthesis" in window;
function pickVoice(){if(!HASTTS)return;const vs=speechSynthesis.getVoices();VOICE=vs.find(v=>/^(nb|no)([-_]|$)/i.test(v.lang))||vs.find(v=>/norw|norsk/i.test(v.name))||null}
if(HASTTS){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function speak(text,slow){if(!HASTTS)return toast("Opplesning virker ikke i denne nettleseren.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="nb-NO";if(VOICE)u.voice=VOICE;u.rate=slow?.65:S.rate;speechSynthesis.speak(u)}
function voiceNote(){if(!HASTTS)return `<p class="notice">Opplesning virker ikke i denne nettleseren. Prøv Chrome, Edge eller Safari.</p>`;if(VOICE)return "";return `<p class="notice">Fant ingen norsk stemme på enheten, så lyden kan høres feil ut. Android: Innstillinger → Tekst til tale → installer norsk. Windows: Innstillinger → Tid og språk → Tale → legg til Norsk bokmål. iPhone: Innstillinger → Tilgjengelighet → Opplest innhold → Stemmer.</p>`}
const playBtns=t=>`<div class="row"><button class="btn ghost sm" data-a="say" data-t="${esc(t)}">▶ Spill av</button><button class="btn link sm" data-a="say" data-t="${esc(t)}" data-slow="1">Sakte</button></div>`;
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
let REC=null;
function listen(target){
  if(!SR)return;
  if(REC){try{REC.abort()}catch(e){}REC=null}
  const r=new SR();r.lang="nb-NO";r.interimResults=false;r.maxAlternatives=3;REC=r;
  V.mic="listening";V.heard="";render();
  r.onresult=e=>{const alts=[...e.results[0]].map(a=>a.transcript);const best=alts.map(a=>({a,s:matchScore(target,a)})).sort((x,y)=>y.s-x.s)[0];V.heard=best.a;V.micScore=best.s;V.mic="done";render()};
  r.onerror=e=>{V.mic=e.error==="not-allowed"||e.error==="service-not-allowed"?"denied":e.error==="no-speech"?"nospeech":"error";render()};
  r.onend=()=>{if(V.mic==="listening"){V.mic="nospeech";render()}REC=null};
  try{r.start()}catch(e){V.mic="error";render()}
}
function matchScore(target,heard){const t=norm(target).split(" "),h=new Set(norm(heard).split(" "));return Math.round(t.filter(w=>h.has(w)).length/t.length*100)}
function toast(m){const d=document.createElement("div");d.className="toast";d.textContent=m;document.body.appendChild(d);setTimeout(()=>d.remove(),2600)}

/* ---------- bilder ---------- */
const BG={inne:["var(--scene-wall)","var(--scene-floor)"],ute:["var(--scene-sky)","var(--scene-grass)"],by:["var(--scene-sky)","var(--scene-road)"]};
function sceneSVG(sc){const [a,b]=BG[sc.bg]||BG.inne;return `<svg class="scene" viewBox="0 0 100 62" role="img" aria-label="Bilde"><rect width="100" height="62" fill="${a}"/><rect y="40" width="100" height="22" fill="${b}"/>${sc.items.map(i=>`<text x="${i.x}" y="${i.y}" font-size="${i.s}" text-anchor="middle" dominant-baseline="central">${i.e}</text>`).join("")}</svg>`}
const picHTML=p=>typeof p==="string"?`<div class="bigpic" aria-hidden="true">${p}</div>`:sceneSVG(p);

/* ---------- visninger ---------- */
function topbar(){return `<div class="top"><button class="brand" data-a="home"><span class="flag" aria-hidden="true"></span>Norskveien</button><div class="row" style="gap:4px">${acctChip()}${S.target||C.uid?`<button class="btn link" data-a="settings">Innstillinger</button>`:""}</div></div>`}

function vWelcome(){
  return topbar()+`<div class="stack" style="gap:28px">
  <div class="stack" style="gap:10px"><p class="eyebrow">Steg 1 av 2</p><h1>Hvor er du nå?</h1><p class="muted">Velg nivået du allerede har. Er du usikker, kan du ta en kort plasseringstest.</p>${SB&&!C.uid?`<p class="small">Har du allerede en konto? <button class="btn link sm inl" data-a="auth">Logg inn</button></p>`:""}</div>
  <div class="choices">
    ${[["A1","Nybegynner","Du kan lite eller ingen norsk, eller bare enkle fraser."],["A2",LEVEL_INFO.A2.nb,LEVEL_INFO.A2.can],["B1",LEVEL_INFO.B1.nb,LEVEL_INFO.B1.can]].map(([c,n,d])=>`<button class="choice" data-a="pickCur" data-v="${c}"><span class="code">${c==="A1"?"A1 eller lavere":c}</span><span class="small muted">${n}</span><span class="small">${d}</span></button>`).join("")}
    <button class="choice alt" data-a="placement"><span class="code">Usikker?</span><span class="small muted">Plasseringstest</span><span class="small">12 korte spørsmål viser hvor du bør begynne.</span></button>
  </div></div>`}

function vTarget(){
  const from=LEVELS.indexOf(S.current);
  const opts=COURSE_LEVELS.filter(L=>LEVELS.indexOf(L)>from);
  return topbar()+`<div class="stack" style="gap:28px">
  <div class="stack" style="gap:10px"><p class="eyebrow">Steg 2 av 2</p><h1>Hvor vil du?</h1><p class="muted">Du starter fra <b>${S.current}</b>. Velg nivået du vil nå. Norskveien tar deg ett nivå om gangen.</p></div>
  <div class="choices">${opts.map(L=>`<button class="choice" data-a="pickTarget" data-v="${L}"><span class="code">${L}</span><span class="small muted">${LEVEL_INFO[L].nb}</span><span class="small">${LEVEL_INFO[L].can}</span></button>`).join("")}</div>
  <div><button class="btn link" data-a="welcome">← Endre startnivå</button></div></div>`}

function vPlacement(){
  const P=V.p;
  if(P.i>=PLACEMENT.length){
    const by={};PLACEMENT.forEach((q,i)=>{by[q.l]=(by[q.l]||0)+(P.res[i]?1:0)});
    let lvl="A0";for(const L of LEVELS){if((by[L]||0)>=2)lvl=L;else break}
    const cur=lvl==="A0"?"A1":lvl;
    const msg=lvl==="A0"?"Du er helt i starten. Du begynner med A2, som går gjennom det grunnleggende igjen.":lvl==="B2"?"Du ser ut til å være på B2 allerede. Du kan bruke B2-leksjonene til repetisjon.":`Du ser ut til å ha et godt <b>${lvl}</b>-nivå. Neste steg er <b>${LEVELS[LEVELS.indexOf(lvl)+1]}</b>.`;
    return topbar()+`<div class="stack" style="gap:24px"><p class="eyebrow">Resultat</p><h1>Ditt nivå: ${lvl==="A0"?"Nybegynner":lvl}</h1><p class="muted" style="max-width:60ch">${msg}</p>
    <div class="card"><div class="stack" style="gap:10px">${LEVELS.map(L=>`<div class="row" style="justify-content:space-between"><span>${L} · ${LEVEL_INFO[L].nb}</span><span class="pct">${by[L]||0} av 3</span></div>`).join("")}</div></div>
    <div class="row">${lvl==="B2"?`<button class="btn" data-a="pickCur" data-v="B1">Repeter B2</button>`:`<button class="btn" data-a="pickCur" data-v="${cur}">Fortsett fra ${cur}</button>`}<button class="btn ghost" data-a="welcome">Velg selv</button></div></div>`;
  }
  const q=P.items[P.i];
  return topbar()+`<div class="lessonhd"><button class="btn link" data-a="welcome" aria-label="Avbryt">✕</button><div class="progress"><i style="width:${P.i/PLACEMENT.length*100}%"></i></div><span class="small muted pct">${P.i+1}/${PLACEMENT.length}</span></div>
  <div class="stack" style="gap:20px"><p class="q">${esc(q.q)}</p><div class="opts">${q.opts.map((o,k)=>`<button class="opt" data-a="pAns" data-v="${k}">${esc(o.t)}</button>`).join("")}<button class="opt muted" data-a="pAns" data-v="-1">Jeg vet ikke</button></div></div>`}

function vHome(){
  const W=working(),p=path();
  if(!V.level||!COURSE[V.level])V.level=W||p[p.length-1];
  const L=V.level;
  const hour=new Date().getHours();
  const greet=hour<10?"God morgen":hour<17?"God dag":"God kveld";
  const plan=todayPlan(),st=streak();
  const ago=prevVisit?daysAgo(prevVisit):null;
  const back=ago&&ago>0?(ago===1?"Velkommen tilbake! Du øvde i går.":`Velkommen tilbake! Det er ${nb(ago)} siden sist.`):(S.days.length?"Her er det du bør øve på nå.":"Begynn med den første oppgaven under.");
  const filled=LEVELS.indexOf(W||S.target)/(LEVELS.length-1)*75;
  const acc=S.answered?Math.round(S.correct/S.answered*100):0;
  const status=x=>LEVELS.indexOf(x)<=LEVELS.indexOf(S.current)?"have":S.tests[x]?.passed?"done":x===W?"now":p.includes(x)?"next":"off";
  const [dn,tot]=levelDone(L);
  return topbar()+`<div class="stack" style="gap:28px">
  <div class="stack" style="gap:6px"><h1>${greet}${C.uid&&C.name?", "+esc(C.name.split(/[ @]/)[0]):""}!</h1><p class="muted">${back}</p></div>
  ${plan?`<section class="today" aria-label="Fokus i dag">
    <div class="row" style="justify-content:space-between"><div><p class="eyebrow">Fokus i dag</p><h2 style="margin-top:4px">Planen din for i dag</h2></div>${st?`<span class="pill">${st} ${st===1?"dag":"dager"} på rad</span>`:""}</div>
    <div class="stack" style="gap:10px">${plan.map((t,i)=>`<button class="task ${i===0?"main":""}" data-a="task" data-v="${i}"><span class="ix">${i+1}</span><span class="tx"><b>${esc(t.title)}</b>${t.sub?` <span class="small muted">· ${esc(t.sub)}</span>`:""}<br><span class="small muted">${esc(t.why)}</span></span><span class="go" aria-hidden="true">→</span></button>`).join("")}</div>
  </section>`:`<section class="today"><p class="eyebrow">Målet er nådd</p><h2>Gratulerer! Du har nådd ${S.target}.</h2><p class="muted">Du har bestått alle nivåtestene på veien din.${S.target!=="B2"?" Sett et nytt mål for å fortsette.":""}</p><div class="row">${S.target!=="B2"?`<button class="btn" data-a="newGoal">Sett nytt mål</button>`:""}<button class="btn ghost" data-a="quickAny">Rask repetisjon</button></div></section>`}
  <section class="stack" style="gap:14px">
    <div class="row" style="justify-content:space-between"><h3>Din vei: ${S.current} → ${S.target}</h3><button class="btn link sm" data-a="newGoal">Endre mål</button></div>
    <div class="route" role="list"><span class="fill" style="width:${filled}%"></span>
      ${LEVELS.map(x=>`<button role="listitem" class="stn ${status(x)} ${x===L?"sel":""}" ${COURSE[x]?`data-a="level" data-v="${x}"`:"disabled"} aria-label="${x}"><span class="dot">${status(x)==="have"||status(x)==="done"?"✓":x}</span><span class="lbl">${x}<br>${LEVEL_INFO[x].nb}</span></button>`).join("")}
    </div>
  </section>
  <section class="stack" style="gap:16px">
    <div class="row" style="justify-content:space-between;align-items:flex-end">
      <div class="stack" style="gap:4px"><div class="row" style="gap:10px"><h2>${L} · ${LEVEL_INFO[L].nb}</h2>${{have:'<span class="pill ok">Kan allerede</span>',done:'<span class="pill ok">Bestått</span>',now:'<span class="pill now">Jobber med</span>',next:'<span class="pill">Kommer</span>',off:'<span class="pill">Utenfor målet</span>'}[status(L)]}</div><p class="muted small" style="max-width:60ch">${LEVEL_INFO[L].can}</p></div>
      <span class="small muted pct">${dn} av ${tot} leksjoner · ${levelPct(L)} %</span>
    </div>
    <div class="skills">${SKILLS.map(s=>{const pc=skillPct(L,s.id);return `<div class="skill"><div class="hd"><h3>${s.nb}</h3><span class="pct">${pc} %</span></div><div class="bar"><i style="width:${pc}%"></i></div>
      ${lessonsOf(L,s.id).map((les,n)=>{const r=S.lessons[lid(L,s.id,n)];return `<button class="lessonbtn" data-a="lesson" data-v="${L}|${s.id}|${n}"><span class="lt">${esc(les.title)}</span><span class="st ${r?.best>=80?"ok":""}">${r?.done?r.best+" %":"Start"}</span></button>`}).join("")}</div>`}).join("")}</div>
    <div class="card row" style="justify-content:space-between"><div class="stack" style="gap:2px"><h3>Nivåtest ${L}</h3><span class="small muted">${S.tests[L]?.passed?`Bestått · beste resultat ${S.tests[L].best} %`:S.tests[L]?`Beste så langt ${S.tests[L].best} % · 70 % for å bestå`:"15 oppgaver fra alle områder · 70 % for å bestå"}</span></div><button class="btn ${S.tests[L]?.passed?"ghost":""} sm" data-a="test" data-v="${L}">${S.tests[L]?"Ta testen igjen":"Ta testen"}</button></div>
  </section>
  <section class="card row daily" style="justify-content:space-between"><div class="stack" style="gap:2px"><p class="eyebrow">Dagens tekst</p><h3>En ny tekst om Norge hver dag</h3><span class="small muted">${S.daily&&S.daily[today()]!=null?`Fullført i dag · ${S.daily[today()]} %. Vil du lese én til?`:"Fra norsk Wikipedia, med øvelser laget automatisk."}</span></div><div class="row"><button class="btn sm ${S.daily&&S.daily[today()]!=null?"ghost":""}" data-a="daily" data-v="${S.daily&&S.daily[today()]!=null?1:0}">${S.daily&&S.daily[today()]!=null?"Ny tekst":"Les dagens tekst"}</button></div></section>
  <section class="stats">
    <div class="stat"><b>${S.days.length}</b><span>dager med øving</span></div>
    <div class="stat"><b>${S.answered}</b><span>svar</span></div>
    <div class="stat"><b>${S.answered?acc+" %":"–"}</b><span>riktige</span></div>
  </section>
  <div><button class="btn link sm" data-a="resources">Flere gratis ressurser for å lære norsk →</button></div></div>`}
function vResources(){return topbar()+`<div class="stack" style="gap:24px"><div class="stack" style="gap:8px"><h1>Ressurser</h1><p class="muted" style="max-width:60ch">Gratis steder der du kan øve mer på norsk. Lenkene åpnes i en ny fane.</p></div>
  <div class="skills">${RESOURCES.map(r=>`<a class="skill res" href="${r.u}" target="_blank" rel="noopener"><h3>${esc(r.n)} ↗</h3><span class="small muted">${esc(r.d)}</span></a>`).join("")}</div>
  <div><button class="btn ghost sm" data-a="home">← Tilbake</button></div></div>`}
function vLoading(){return topbar()+`<div class="stack" style="gap:12px"><p class="eyebrow">Dagens tekst</p><h1>Henter dagens tekst …</h1><p class="muted">Dette tar bare et øyeblikk.</p></div>`}

/* ---------- leksjoner og tester ---------- */
function prep(ex){const it=Object.assign({},ex);if(ex.t==="mc"||ex.t==="listen")it.opts=shuffle(ex.o.map((t,k)=>({t,ok:k===0})));if(ex.t==="tf")it.opts=[{t:"Sant",ok:ex.a===true},{t:"Usant",ok:ex.a===false}];if(ex.t==="order")it.bank=shuffle(ex.w.map((_,k)=>k)),it.picked=[];return it}
function startRun(kind,opts){
  let items,meta=opts;
  if(kind==="lesson"){const les=lessonsOf(opts.L,opts.sk)[opts.n];items=les.ex.map(prep);meta=Object.assign({les},opts)}
  else{
    const pool=[];opts.levels.forEach(L=>SKILLS.forEach(s=>{if(s.id==="lese")return;lessonsOf(L,s.id).forEach((les,n)=>{if(kind==="quick"&&opts.onlyDone&&!S.lessons[lid(L,s.id,n)]?.done)return;les.ex.forEach(e=>{if(AUTO.includes(e.t)&&!(e.t==="mc"&&e.pic&&typeof e.pic!=="string"&&kind==="quick"))pool.push(e)})})}));
    if(!pool.length&&opts.onlyDone)return startRun(kind,Object.assign({},opts,{onlyDone:false}));
    items=shuffle(pool).slice(0,kind==="test"?15:8).map(prep);
  }
  V={view:"run",kind,meta,items,i:0,phase:kind==="lesson"?"intro":"ex",res:[],answered:false,level:V.level};
  render();window.scrollTo(0,0);
}
function micBlock(it){
  if(!SR)return "";
  const st=V.mic;
  let out=`<button class="btn mic ${st==="listening"?"on":""}" data-a="mic" ${V.answered?"disabled":""}>${st==="listening"?"● Lytter … snakk nå":"🎤 Snakk inn"}</button>`;
  if(st==="done"){const ok=V.micScore>=70;out+=`<div class="fb ${ok?"ok":"no"}"><b>${ok?"Bra uttalt!":"Nesten"}</b><span>Jeg hørte: «${esc(V.heard)}»</span><span class="small">${V.micScore} % av ordene ble gjenkjent.${ok?"":" Lytt igjen og prøv en gang til."}</span></div>`}
  if(st==="denied")out+=`<p class="notice">Nettleseren fikk ikke bruke mikrofonen. Tillat mikrofon for denne siden, eller vurder deg selv under.</p>`;
  if(st==="nospeech")out+=`<p class="notice">Jeg hørte ingenting. Prøv igjen, og snakk litt høyere.</p>`;
  if(st==="error")out+=`<p class="notice">Talegjenkjenning virker ikke akkurat nå. Vurder deg selv under.</p>`;
  return `<div class="stack" style="gap:10px">${out}</div>`;
}
function writeFeedback(it){
  const c=V.check;if(!c)return "";
  const issues=c.issues.length?`<ul class="issues">${c.issues.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>`:`<p class="small">Jeg fant ingen vanlige feil.</p>`;
  return `<div class="fb ${V.res[V.i]?"ok":"no"}"><b>${V.res[V.i]?"Godt skrevet!":"Levert – se tilbakemeldingen"}</b>
  <span class="small">${c.words} ord · ${c.sentences} setninger${c.words<it.min?` · målet var ${it.min} ord`:""}</span>
  ${it.need&&it.need.length?`<span class="small">Du skrev om: ${c.found.length?esc(c.found.join(", ")):"–"}${c.missing.length?`<br>Du kan også skrive om: ${esc(c.missing.join(", "))}`:""}</span>`:""}</div>
  <div class="stack" style="gap:6px"><p class="eyebrow">Ting å se på</p>${issues}<p class="small muted">Sjekken finner vanlige feil, men ikke alle. Sammenlign også med eksempelteksten.</p></div>`;
}
function exHTML(it){
  const done=V.answered,r=V.res[V.i];
  let body="";
  const pic=it.pic?picHTML(it.pic):"";
  if(it.t==="mc"||it.t==="tf"||it.t==="listen"){
    body=(it.t==="listen"?`<p class="q">Hva hører du?</p>${voiceNote()}${playBtns(it.say)}`:`${pic}<p class="q">${esc(it.q)}</p>${it.t==="tf"?'<p class="small muted">Er påstanden sann eller usann?</p>':""}`)+
    `<div class="opts ${it.t==="tf"?"two":""}">${it.opts.map((o,k)=>`<button class="opt ${done&&o.ok?"right":""} ${done&&V.pick===k&&!o.ok?"wrong":""}" data-a="pick" data-v="${k}" ${done?"disabled":""}>${esc(o.t)}</button>`).join("")}</div>`;
  }else if(it.t==="fill"||it.t==="pic"||it.t==="dict"){
    const lead=it.t==="pic"?`${pic}<p class="q">Hva er dette?</p><p class="small muted">Skriv ordet med artikkel: en, ei eller et.</p>`:it.t==="dict"?`<p class="q">Diktat: lytt og skriv det du hører.</p>${voiceNote()}${playBtns(it.say)}`:`<p class="q">${esc(it.q).replace("___",'<span class="blank">_____</span>')}</p>`;
    body=`${lead}<div class="stack" style="gap:8px">${it.t==="dict"?`<textarea class="inp" id="fillIn" rows="2" autocomplete="off" spellcheck="false" placeholder="Skriv setningen" ${done?"disabled":""}>${esc(V.typed||"")}</textarea>`:`<input class="inp" id="fillIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Skriv svaret" ${done?"disabled":""} value="${esc(V.typed||"")}">`}
    ${done?"":`<div class="row" style="justify-content:space-between"><div class="keys">${["æ","ø","å"].map(c=>`<button class="key" data-a="key" data-v="${c}">${c}</button>`).join("")}</div><button class="btn" data-a="checkFill">Sjekk</button></div>`}</div>`;
  }else if(it.t==="order"){
    body=`<p class="q">${esc(it.q)}</p>
    <div class="tiles ans" aria-label="Setningen din">${it.picked.map((k,j)=>`<button class="tile" data-a="unpick" data-v="${j}" ${done?"disabled":""}>${esc(it.w[k])}</button>`).join("")||'<span class="small muted" style="padding:8px">Trykk på ordene i riktig rekkefølge</span>'}</div>
    <div class="tiles">${it.bank.map((k,j)=>`<button class="tile" data-a="tile" data-v="${j}" ${done?"disabled":""}>${esc(it.w[k])}</button>`).join("")}</div>
    ${done?"":`<div class="row" style="justify-content:flex-end"><button class="btn link" data-a="resetOrder">Begynn på nytt</button><button class="btn" data-a="checkOrder" ${it.bank.length?"disabled":""}>Sjekk</button></div>`}`;
  }else if(it.t==="speak"){
    body=`<p class="eyebrow">Si det høyt</p><p class="say">${esc(it.say)}</p>${voiceNote()}${playBtns(it.say)}
    ${it.tip?`<p class="notice">${esc(it.tip)}</p>`:""}${micBlock(it)}
    ${done?"":`<p class="small muted">${SR?"Eller vurder deg selv:":"Lytt, og si setningen høyt tre ganger. Hvordan gikk det?"}</p><div class="row"><button class="btn ${SR?"ghost":""}" data-a="self" data-v="1">Jeg fikk det til</button><button class="btn ghost" data-a="self" data-v="0">Må øve mer</button></div>`}`;
  }else if(it.t==="write"){
    body=`<p class="eyebrow">${it.scene?"Bildeoppgave":"Skriv"}</p>${it.scene?sceneSVG(it.scene):""}<p class="q">${esc(it.q)}</p>
    ${it.need?`<div class="row" style="gap:6px">${it.need.map(([l,s])=>`<span class="chip" data-stems="${esc(s)}">${esc(l)}</span>`).join("")}</div>`:""}
    <textarea class="inp" id="writeIn" placeholder="Skriv her …" ${done?"disabled":""}>${esc(V.typed||"")}</textarea>
    <div class="row" style="justify-content:space-between"><span class="small muted" id="wc">0 / ${it.min} ord</span>${done?"":`<button class="btn" data-a="checkWrite" id="wsub" disabled>Sjekk teksten</button>`}</div>
    ${done?writeFeedback(it)+`<div class="stack" style="gap:8px"><p class="eyebrow">Eksempeltekst</p><div class="model">${esc(it.model)}</div>${playBtns(it.model)}</div>`:""}`;
  }
  let fb="";
  if(done&&!["speak","write"].includes(it.t)){
    const right=it.t==="mc"||it.t==="tf"||it.t==="listen"?it.opts.find(o=>o.ok).t:it.t==="dict"?it.say:it.t==="order"?it.w.join(" "):it.a[0];
    fb=`<div class="fb ${r?"ok":"no"}"><b>${r?"Riktig!":"Ikke helt"}</b>${r&&it.t!=="dict"?"":`<span>${r?"":"Riktig svar: "}<b class="ans">${esc(right)}</b></span>`}${V.note?`<span class="small">${esc(V.note)}</span>`:""}${it.x?`<span class="small">${esc(it.x)}</span>`:""}</div>`;
  }
  return body+fb+(done?`<div class="row" style="justify-content:flex-end"><button class="btn" data-a="next" id="nextBtn">${V.i+1<V.items.length?"Neste":"Se resultatet"}</button></div>`:"");
}
function vRun(){
  const m=V.meta,kind=V.kind;
  const label=kind==="daily"?"Dagens tekst":kind==="lesson"?`${m.L} · ${skillName(m.sk).nb}`:kind==="test"?`Nivåtest ${m.levels[0]}`:"Rask repetisjon";
  const hd=`<div class="lessonhd"><button class="btn link" data-a="home" aria-label="Lukk">✕</button><div class="progress"><i style="width:${V.phase==="done"?100:V.i/V.items.length*100}%"></i></div><span class="small muted">${label}</span></div>`;
  if(V.phase==="intro"){const les=m.les;
    return topbar()+hd+`<div class="stack" style="gap:20px"><div class="stack" style="gap:6px"><p class="eyebrow">${label}</p><h1>${esc(les.title)}</h1></div>
    <div class="prose tablewrap">${les.intro}</div>
    ${les.text?`<div class="passage">${linkWords(les.text)}</div><p class="small muted">Trykk på et ord for å slå det opp i Ordbøkene.</p>${playBtns(les.text)}`:""}
    <div><button class="btn" data-a="begin">Start øvelsene (${les.ex.length})</button></div></div>`}
  if(V.phase==="done"){
    const g=V.res.length,ok=V.res.filter(Boolean).length,pc=g?Math.round(ok/g*100):0;
    const pass=kind==="test"?pc>=70:null;
    let next="";
    if(kind==="lesson"){const plan=todayPlan();const nx=plan&&plan.find(t=>!(t.kind==="lesson"&&t.L===m.L&&t.sk===m.sk&&t.n===m.n));if(nx)next=`<button class="btn" data-a="taskObj" data-v='${esc(JSON.stringify(nx))}'>Neste: ${esc(nx.title)}</button>`}
    return topbar()+hd+`<div class="stack" style="gap:20px;align-items:flex-start"><p class="eyebrow">${kind==="test"?(pass?"Bestått":"Ikke bestått ennå"):"Ferdig"}</p><p class="score">${pc} %</p>
    <p class="muted" style="max-width:56ch">${ok} av ${g} riktige. ${kind==="test"?(pass?`Du har bestått ${m.levels[0]}! ${working()?`Neste nivå: ${working()}.`:"Du har nådd målet ditt."}`:"Du trenger 70 %. Planen på forsiden viser hva du bør repetere."):pc>=80?"Veldig bra. Leksjonen er merket som sterk.":"Lagret. Leksjonen kommer tilbake i planen din for repetisjon."}</p>
    <div class="row">${next}<button class="btn ${next?"ghost":""}" data-a="home">Til oversikten</button>${kind==="lesson"?`<button class="btn link" data-a="lesson" data-v="${m.L}|${m.sk}|${m.n}">Ta leksjonen igjen</button>`:""}</div></div>`}
  const it=V.items[V.i],les=m.les;
  return topbar()+hd+`<div class="stack" style="gap:20px">${les&&les.text?`<details class="passage" ${V.i<2?"open":""}><summary>Tekst</summary>${linkWords(les.text)}</details>`:""}${exHTML(it)}</div>`;
}

function vSettings(){
  return topbar()+`<div class="stack" style="gap:24px"><h1>Innstillinger</h1>
  ${SB?`<div class="card stack"><h3>Konto</h3>${C.uid?`<p class="small">Logget inn som <b>${esc(C.name)}</b>. Framgangen din lagres på kontoen${C.status==="error"?", men siste lagring feilet. Den prøver igjen automatisk.":"."}</p><div class="row"><button class="btn ghost sm" data-a="syncNow">Lagre nå</button><button class="btn ghost sm" data-a="signOut">Logg ut</button></div>`:`<p class="small">Logg inn for å lagre framgangen på kontoen din og bruke den på alle enheter. Til da lagres den bare i denne nettleseren.</p><div class="row"><button class="btn sm" data-a="auth">Logg inn</button><button class="btn ghost sm" data-a="signup">Lag konto</button></div>`}</div>`:""}
  ${S.target?`<div class="card stack"><h3>Nivå</h3><p class="muted small">Startnivå <b>${S.current}</b>, mål <b>${S.target}</b>. Framgangen din beholdes når du endrer dette.</p><div class="row"><button class="btn ghost sm" data-a="welcome">Endre startnivå</button><button class="btn ghost sm" data-a="newGoal">Endre mål</button></div></div>`:""}
  <div class="card stack"><h3>Lydhastighet</h3><div class="row">${[[.75,"Sakte"],[.9,"Normal"],[1.05,"Naturlig"]].map(([r,l])=>`<button class="btn ${S.rate===r?"":"ghost"} sm" data-a="rate" data-v="${r}">${l}</button>`).join("")}<button class="btn link sm" data-a="say" data-t="Hei! Hvordan har du det i dag?">▶ Test</button></div>${voiceNote()}<p class="small muted">${SR?"Mikrofonøving er tilgjengelig i denne nettleseren.":"Mikrofonøving virker ikke i denne nettleseren. Bruk Chrome eller Edge for å få uttalen sjekket."}</p></div>
  <div class="card stack"><h3>Sikkerhetskopi</h3><p class="muted small">Kopier koden for å flytte framgangen til en annen nettleser uten konto.</p>
    <textarea class="inp" id="bk" style="min-height:90px;font-size:12px" readonly>${esc(btoa(unescape(encodeURIComponent(JSON.stringify(S)))))}</textarea>
    <div class="row"><button class="btn ghost sm" data-a="copy">Kopier koden</button></div>
    <textarea class="inp" id="imp" style="min-height:70px;font-size:12px" placeholder="Lim inn en kode her"></textarea><div><button class="btn ghost sm" data-a="import">Gjenopprett fra kode</button></div></div>
  <div class="card stack"><h3>Start på nytt</h3><p class="muted small">Sletter all framgang${C.uid?" på kontoen din og":""} i denne nettleseren.</p>${V.confirm?`<div class="row"><button class="btn sm danger" data-a="reset">Ja, slett alt</button><button class="btn link sm" data-a="settings">Avbryt</button></div>`:`<div><button class="btn ghost sm" data-a="askReset">Nullstill framgang</button></div>`}</div>
  </div>`}

function vAuth(){
  const up=V.mode==="signup";
  return topbar()+`<div class="stack" style="gap:24px;max-width:420px">
  <div class="stack" style="gap:8px"><h1>${up?"Lag konto":"Logg inn"}</h1><p class="muted">${up?"Lag en gratis konto, så lagres framgangen din og følger deg på alle enheter.":"Logg inn for å fortsette der du slapp."}</p></div>
  ${V.msg?`<p class="notice strong">${esc(V.msg)}</p>`:""}
  <form id="authForm" class="stack" style="gap:12px" novalidate>
    ${up?`<label class="stack" style="gap:6px"><span class="small">Navn</span><input class="inp" id="au-name" autocomplete="name"></label>`:""}
    <label class="stack" style="gap:6px"><span class="small">E-post</span><input class="inp" id="au-email" type="email" autocomplete="email"></label>
    <label class="stack" style="gap:6px"><span class="small">Passord</span><input class="inp" id="au-pass" type="password" autocomplete="${up?"new-password":"current-password"}"></label>
    ${V.err?`<p class="small err">${esc(V.err)}</p>`:""}
    <button class="btn" type="submit" ${V.busy?"disabled":""}>${V.busy?"Vent litt …":up?"Lag konto":"Logg inn"}</button>
  </form>
  <div class="row" style="justify-content:space-between"><button class="btn link sm" data-a="authMode">${up?"Har du konto? Logg inn":"Ny her? Lag en konto"}</button>${up?"":`<button class="btn link sm" data-a="forgot">Glemt passordet?</button>`}</div>
  <button class="btn link sm" data-a="home" style="align-self:flex-start">Fortsett uten konto</button></div>`;
}
function vReset(){return topbar()+`<div class="stack" style="gap:20px;max-width:420px"><h1>Nytt passord</h1><form id="resetForm" class="stack" style="gap:12px"><label class="stack" style="gap:6px"><span class="small">Nytt passord</span><input class="inp" id="np" type="password" autocomplete="new-password"></label>${V.err?`<p class="small err">${esc(V.err)}</p>`:""}<button class="btn" type="submit">Lagre passordet</button></form></div>`}
async function authSubmit(){
  const email=document.getElementById("au-email").value.trim(),pass=document.getElementById("au-pass").value,nm=document.getElementById("au-name");
  V.err="";V.msg="";
  if(!/^\S+@\S+\.\S+$/.test(email)){V.err="Skriv en gyldig e-postadresse.";return render()}
  if(pass.length<6){V.err="Passordet må ha minst 6 tegn.";return render()}
  V.busy=true;render();
  const r=V.mode==="signup"?await SB.auth.signUp({email,password:pass,options:{data:{name:nm?nm.value.trim():""},emailRedirectTo:location.origin+location.pathname}}):await SB.auth.signInWithPassword({email,password:pass});
  V.busy=false;
  if(r.error){V.err=/invalid login/i.test(r.error.message)?"Feil e-post eller passord.":/not confirmed/i.test(r.error.message)?"Bekreft e-posten din først. Sjekk innboksen for lenken.":/already registered/i.test(r.error.message)?"Det finnes allerede en konto med denne e-posten. Logg inn i stedet.":r.error.message;return render()}
  if(V.mode==="signup"&&!r.data.session){V.mode="signin";V.msg="Kontoen er laget. Sjekk e-posten din og klikk på bekreftelseslenken. Logg så inn her.";return render()}
}
async function resetSubmit(){const p=document.getElementById("np").value;if(p.length<6){V.err="Minst 6 tegn.";return render()}const {error}=await SB.auth.updateUser({password:p});if(error){V.err=error.message;return render()}toast("Passordet er endret");V={view:S.target?"home":"welcome"};render()}

function render(){
  const v=V.view;
  $app.innerHTML=v==="welcome"?vWelcome():v==="target"?vTarget():v==="place"?vPlacement():v==="run"?vRun():v==="settings"?vSettings():v==="auth"?vAuth():v==="reset"?vReset():v==="resources"?vResources():v==="loading"?vLoading():vHome();
  const f=document.getElementById("fillIn");if(f&&!f.disabled)f.focus({preventScroll:true});
  if(document.getElementById("writeIn"))updWrite();
  const n=document.getElementById("nextBtn");if(n)n.focus({preventScroll:true});
}

/* ---------- svar ---------- */
function record(ok,graded=true){V.res[V.i]=ok;V.answered=true;if(REC){try{REC.abort()}catch(e){}}if(graded){S.answered++;if(ok)S.correct++}markDay();save();render()}
function finish(){
  const g=V.res.length,ok=V.res.filter(Boolean).length,pc=g?Math.round(ok/g*100):0,m=V.meta;
  if(V.kind==="lesson"){const k=lid(m.L,m.sk,m.n),p=S.lessons[k]||{best:0};S.lessons[k]={done:true,best:Math.max(p.best,pc),last:pc,at:today()};S.skillLast[m.L+m.sk]=today()}
  if(V.kind==="daily"){S.daily=S.daily||{};S.daily[today()]=Math.max(S.daily[today()]||0,pc);S.skillLast[(m.L||"")+"lese"]=today()}
  if(V.kind==="test"){const L=m.levels[0],p=S.tests[L]||{best:0,passed:false};S.tests[L]={best:Math.max(p.best,pc),passed:p.passed||pc>=70}}
  markDay();save();V.phase="done";render();window.scrollTo(0,0);
}
function updWrite(){
  const w=document.getElementById("writeIn");if(!w)return;const it=V.items[V.i];
  const n=(w.value.trim().match(/\S+/g)||[]).length;const wc=document.getElementById("wc");if(wc)wc.textContent=`${n} / ${it.min} ord`;
  const low=w.value.toLowerCase();document.querySelectorAll("[data-stems]").forEach(c=>c.classList.toggle("on",new RegExp(`(^|[^a-zæøå])(${c.dataset.stems})`,"i").test(low)));
  const b=document.getElementById("wsub");if(b)b.disabled=n<Math.ceil(it.min/3);
}
function checkPic(it,val){
  const v=norm(val);if(it.a.some(a=>norm(a)===v))return {ok:true};
  const noun=s=>norm(s).replace(/^(en|ei|et) /,"");
  if(it.a.some(a=>noun(a)===noun(v)))return {ok:false,note:/^(en|ei|et) /.test(v)?"Riktig ord, men feil artikkel.":"Riktig ord! Husk artikkelen (en, ei eller et)."};
  return {ok:false};
}
function checkDict(it,val){
  const t=norm(it.say).split(" "),h=norm(val).split(" ");
  const wrong=t.filter((w,i)=>h[i]!==w).length;
  if(!wrong)return {ok:true};
  return {ok:false,note:`${t.length-wrong} av ${t.length} ord var riktige.`};
}
function runTask(t){
  if(t.kind==="lesson")startRun("lesson",{L:t.L,sk:t.sk,n:t.n});
  else if(t.kind==="test")startRun("test",{levels:[t.L]});
  else startRun("quick",{levels:path().filter(L=>COURSE[L]&&LEVELS.indexOf(L)<=LEVELS.indexOf(t.L)),onlyDone:Object.keys(S.lessons).length>0});
}
function anyDone(L){return SKILLS.some(s=>lessonsOf(L,s.id).some((_,n)=>S.lessons[lid(L,s.id,n)]?.done))}

const A={
  home(){V={view:S.target?"home":"welcome",level:V.level};if(HASTTS)speechSynthesis.cancel();render();window.scrollTo(0,0)},
  welcome(){V={view:"welcome",manual:true};render()},
  settings(){V={view:"settings",level:V.level};render()},
  pickCur(v){S.current=v;save();V={view:"target",manual:true};render()},
  newGoal(){V={view:"target",manual:true};render()},
  pickTarget(v){S.target=v;save();V={view:"home"};render();window.scrollTo(0,0)},
  placement(){V={view:"place",p:{i:0,res:[],items:PLACEMENT.map(prep)}};render()},
  pAns(v){const P=V.p,q=P.items[P.i];P.res[P.i]=+v>=0&&q.opts[+v].ok;P.i++;render()},
  level(v){V.level=v;render()},
  lesson(v){const [L,sk,n]=v.split("|");startRun("lesson",{L,sk,n:+n})},
  test(v){startRun("test",{levels:[v]})},
  quickAny(){startRun("quick",{levels:COURSE_LEVELS.filter(anyDone),onlyDone:true})},
  task(v){runTask(todayPlan()[+v])},
  taskObj(v){runTask(JSON.parse(v))},
  daily(v){V={view:"loading"};render();getDaily(v==="1"?1+Math.floor(Math.random()*40):0).then(src=>{const les=buildDailyLesson(src);V={view:"run",kind:"daily",meta:{les,L:working()||S.target||"B1"},items:les.ex.map(prep),i:0,phase:"intro",res:[],answered:false};render();window.scrollTo(0,0)}).catch(()=>{V={view:S.target?"home":"welcome"};render();toast("Fikk ikke hentet dagens tekst. Sjekk internettforbindelsen og prøv igjen.")})},
  resources(){V={view:"resources"};render();window.scrollTo(0,0)},
  begin(){V.phase="ex";render();window.scrollTo(0,0)},
  say(_,b){speak(b.dataset.t,!!b.dataset.slow)},
  mic(){listen(V.items[V.i].say)},
  pick(v){const it=V.items[V.i];V.pick=+v;record(it.opts[+v].ok)},
  key(v){const f=document.getElementById("fillIn");if(!f)return;const s=f.selectionStart??f.value.length;f.value=f.value.slice(0,s)+v+f.value.slice(f.selectionEnd??s);f.focus();f.setSelectionRange(s+1,s+1)},
  checkFill(){const f=document.getElementById("fillIn");const val=f.value;if(!val.trim())return f.focus();V.typed=val;const it=V.items[V.i];
    if(it.t==="pic"){const r=checkPic(it,val);V.note=r.note||"";return record(r.ok)}
    if(it.t==="dict"){const r=checkDict(it,val);V.note=r.note||"";return record(r.ok)}
    record(it.a.some(a=>norm(a)===norm(val)))},
  tile(v){const it=V.items[V.i];it.picked.push(it.bank.splice(+v,1)[0]);render()},
  unpick(v){const it=V.items[V.i];it.bank.push(it.picked.splice(+v,1)[0]);render()},
  resetOrder(){const it=V.items[V.i];it.bank=shuffle(it.w.map((_,k)=>k));it.picked=[];render()},
  checkOrder(){const it=V.items[V.i];const s=norm(it.picked.map(k=>it.w[k]).join(" "));record([it.w.join(" "),...it.alt].some(a=>norm(a)===s))},
  self(v){const ok=v==="1"||(V.mic==="done"&&V.micScore>=70&&v!=="0");record(ok,false)},
  checkWrite(){const w=document.getElementById("writeIn");const it=V.items[V.i];V.typed=w.value;const lvl=V.meta.L||(V.meta.levels&&V.meta.levels[0])||"A2";
    const c=checkText(w.value,lvl,it.need);V.check=c;const cover=it.need&&it.need.length?c.found.length/it.need.length:1;
    record(c.words>=it.min&&cover>=.5&&c.issues.length<=2,false);window.scrollTo({top:document.querySelector(".fb")?.offsetTop-80||0,behavior:"smooth"})},
  next(){V.typed="";V.pick=null;V.note="";V.mic=null;V.heard="";V.check=null;if(V.i+1<V.items.length){V.i++;V.answered=false;render();window.scrollTo(0,0)}else finish()},
  rate(v){S.rate=+v;save();render()},
  copy(){const t=document.getElementById("bk");const sel=()=>{t.select();toast("Merket. Trykk Ctrl+C for å kopiere.")};try{navigator.clipboard.writeText(t.value).then(()=>toast("Kopiert"),sel)}catch(e){sel()}},
  import(){const t=document.getElementById("imp").value.trim();if(!t)return toast("Lim inn en kode først.");try{const d=JSON.parse(decodeURIComponent(escape(atob(t))));if(!d||typeof d!=="object"||!("lessons" in d))throw 0;S=Object.assign(fresh(),d);save();toast("Framgangen er gjenopprettet");A.home()}catch(e){toast("Koden ser ikke riktig ut. Kopier hele koden og prøv igjen.")}},
  askReset(){V.confirm=true;render()},
  reset(){S=fresh();save();V={view:"welcome"};render();toast("Framgangen er slettet")},
  syncNow(){cloudWrite().then(()=>toast(C.status==="synced"?"Lagret":"Kunne ikke lagre. Prøv igjen senere."))},
  noLogin(){toast("Innloggingen kunne ikke lastes. Sjekk nettet eller slå av annonseblokkering, og last inn siden på nytt.")},
  auth(){V={view:"auth",mode:"signin"};render()},
  signup(){V={view:"auth",mode:"signup"};render()},
  authMode(){V={view:"auth",mode:V.mode==="signup"?"signin":"signup"};render()},
  async forgot(){const e=document.getElementById("au-email").value.trim();if(!/^\S+@\S+\.\S+$/.test(e)){V.err="Skriv e-posten din over, og trykk så på «Glemt passordet?».";return render()}const {error}=await SB.auth.resetPasswordForEmail(e,{redirectTo:location.origin+location.pathname});V.err=error?error.message:"";V.msg=error?"":"Hvis e-posten har en konto, får du snart en lenke for å lage nytt passord.";render()},
  async signOut(){await SB.auth.signOut();C.uid=null;C.name="";S=fresh();try{localStorage.removeItem(KEY)}catch(e){}V={view:"welcome"};setCloud("signedout");render();toast("Du er logget ut")}
};

$app.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(!b||b.disabled)return;const f=A[b.dataset.a];if(f)f(b.dataset.v,b)});
$app.addEventListener("submit",e=>{e.preventDefault();if(e.target.id==="authForm")authSubmit();if(e.target.id==="resetForm")resetSubmit()});
$app.addEventListener("input",e=>{if(e.target.id==="writeIn")updWrite()});
$app.addEventListener("keydown",e=>{if(e.target.id==="fillIn"&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();A.checkFill()}});
render();
cloudInit();
