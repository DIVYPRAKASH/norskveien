// Norskveien – dynamisk innhold: «Dagens tekst» fra norsk Wikipedia (bokmål/riksmål, CC BY-SA 4.0).
// Øvelsene lages automatisk fra teksten.
const DAILY_TOPICS=["Brunost","Fjord","Grunnlovsdagen","Henrik Ibsen","Nordlys","Hurtigruten","Lofoten","Allemannsretten","Dugnad","Friluftsliv","Edvard Munch","Sognefjorden","Vikingtiden","Trondheim","Tromsø","Holmenkollbakken","Fårikål","Lutefisk","Bunad","Stavkirke","Nidarosdomen","Bergen","Stavanger","Preikestolen","Geirangerfjorden","Svalbard","Samer","Midnattssol","Langrenn","Kvikk Lunsj","Russefeiring","Julebord","Påske i Norge","Sankthansaften","Norsk krone","Stortinget","Oslo","Vigelandsparken","Roald Amundsen","Fridtjof Nansen","Kong Harald V","Jostedalsbreen","Elg","Laks","Reinsdyr","Norsk vær","Hytte","Kaffe","Vaffel","Lefse"];
const WIKI="https://no.wikipedia.org/api/rest_v1/page/summary/";

function dayIndex(){const d=new Date();return Math.floor((d-new Date(d.getFullYear(),0,0))/864e5)}
async function fetchSummary(title){
  const r=await fetch(WIKI+encodeURIComponent(title.replace(/ /g,"_")),{headers:{accept:"application/json"}});
  if(!r.ok)throw new Error("http "+r.status);
  const j=await r.json();
  if(!j.extract||j.type==="disambiguation"||j.extract.length<200)throw new Error("short");
  return {title:j.title,text:j.extract.replace(/\s*\([^)]*\)/g,"").replace(/\s+/g," ").trim(),url:(j.content_urls&&j.content_urls.desktop&&j.content_urls.desktop.page)||("https://no.wikipedia.org/wiki/"+encodeURIComponent(title))};
}
async function getDaily(offset){
  const start=(dayIndex()+(offset||0))%DAILY_TOPICS.length;
  for(let k=0;k<4;k++){
    const t=DAILY_TOPICS[(start+k)%DAILY_TOPICS.length];
    try{return await fetchSummary(t)}catch(e){}
  }
  throw new Error("unavailable");
}
function splitSentences(text){
  return text.replace(/\b(f\.eks|bl\.a|ca|nr|osv|mill|mrd|km|kr)\./gi,m=>m.replace(".","§")).split(/(?<=[.!?])\s+(?=[A-ZÆØÅ0-9])/).map(s=>s.replace(/§/g,".").trim()).filter(s=>s.length>8);
}
const STOP=new Set("som også eller etter under mellom over dette disse denne men for med fra til ved det den de har hadde blir ble være vært kan skal ikke andre første mange flere største noen hvor hvilke".split(" "));
function buildDailyLesson(src){
  const sents=splitSentences(src.text).slice(0,8);
  const text=sents.join(" ");
  const ex=[];
  // 1. Hvilket ord mangler? (3 stk.)
  const cands=[];sents.forEach((s,si)=>(s.match(/[a-zæøå]{6,}/g)||[]).forEach(w=>{if(!STOP.has(w))cands.push({w,si,s})}));
  const uniq=[...new Map(cands.map(c=>[c.w,c])).values()];
  const usedS=new Set();
  shuffle(uniq).forEach(c=>{if(ex.length>=3||usedS.has(c.si))return;const others=shuffle(uniq.filter(o=>o.w!==c.w)).slice(0,2).map(o=>o.w);if(others.length<2)return;usedS.add(c.si);
    ex.push({t:"mc",q:c.s.replace(new RegExp(`(?<![A-Za-zæøåÆØÅ])${c.w}(?![a-zæøå])`),"___"),o:[c.w,...others],x:"Ordet står i teksten."})});
  // 2. Sant eller usant – bytt ut et årstall
  const ys=sents.find(s=>/\b(1[0-9]{3}|20[0-2][0-9])\b/.test(s));
  if(ys){const y=+ys.match(/\b(1[0-9]{3}|20[0-2][0-9])\b/)[0];const fake=y+(y%2?13:-21);const truth=Math.random()<.5;
    ex.push({t:"tf",q:truth?ys:ys.replace(String(y),String(fake)),a:truth,x:`I teksten står det ${y}.`})}
  // 3. Ordstilling
  const os=sents.map(s=>s.replace(/[.!?]$/,"")).find(s=>{const n=s.split(" ").length;return n>=5&&n<=9&&!/[,;:–()]/.test(s)});
  if(os)ex.push({t:"order",q:"Sett ordene i riktig rekkefølge. Setningen står i teksten.",w:os.split(" "),x:"",alt:[]});
  // 4. Diktat
  const ds=sents.filter(s=>{const n=s.split(" ").length;return n>=5&&n<=12}).sort((a,b)=>a.length-b.length)[0];
  if(ds)ex.push({t:"dict",say:ds,x:"Setningen er fra teksten."});
  // 5. Skriv med egne ord
  ex.push({t:"write",q:`Fortell med egne ord hva du har lært om «${src.title}». Skriv 3–5 setninger.`,min:30,need:[],model:sents.slice(0,3).join(" ")});
  return {title:`Dagens tekst: ${src.title}`,text,source:src.url,daily:true,
    intro:`<p>Hver dag får du en ny tekst om Norge fra norsk Wikipedia. Teksten er skrevet for vanlige lesere, ikke for elever, så den kan være vanskelig. Trykk på et ord for å slå det opp i Ordbøkene.</p><p class="small muted">Kilde: <a href="${esc(src.url)}" target="_blank" rel="noopener">Wikipedia</a>, lisens CC BY-SA 4.0. Øvelsene er laget automatisk.</p>`,
    ex};
}
const RESOURCES=[
  {n:"Norwegian on the Web (NTNU)",u:"https://www.ntnu.edu/now",d:"Gratis nettkurs fra NTNU med tekster, lyd og grammatikk for nybegynnere."},
  {n:"Klar Tale",u:"https://www.klartale.no",d:"Nyheter på lettlest norsk. Perfekt for å lese litt hver dag."},
  {n:"Ordbøkene",u:"https://ordbokene.no",d:"Den offisielle ordboka for bokmål og nynorsk fra Språkrådet og Universitetet i Bergen."},
  {n:"NRK TV",u:"https://tv.nrk.no",d:"Se norske serier og nyheter med norsk teksting."},
  {n:"NRK Radio",u:"https://radio.nrk.no",d:"Podkaster og radio. Godt for lytting."},
  {n:"Språkrådet",u:"https://www.sprakradet.no",d:"Svar på spørsmål om rettskriving og språkbruk."},
  {n:"Tatoeba",u:"https://tatoeba.org",d:"Tusenvis av eksempelsetninger på norsk bokmål, mange med lyd."},
  {n:"Wikipedia på bokmål",u:"https://no.wikipedia.org",d:"Les om temaer du er interessert i, på norsk."}
];
function linkWords(text){
  return text.split(/(\s+)/).map(tok=>{const m=tok.match(/^([«"(]*)([A-Za-zÆØÅæøåé-]{2,})(.*)$/);if(!m)return esc(tok);
    return `${esc(m[1])}<a class="w" href="https://ordbokene.no/bm/search?q=${encodeURIComponent(m[2].toLowerCase())}" target="_blank" rel="noopener">${esc(m[2])}</a>${esc(m[3])}`}).join("");
}
