// Norskveien – enkel tekstsjekk for bokmål.
// Finner vanlige feil hos innlærere og sjekker om teksten nevner det oppgaven ber om.
// Dette er regler, ikke kunstig intelligens: den finner mange, men ikke alle feil.
const ET_ORD="hus|eple|barn|bord|vindu|kjøkken|bad|rom|år|land|språk|tog|fly|brev|bilde|egg|glass|møte|kart|teppe|vær|problem|spørsmål|svar|brød|fjell|tre|øre|øye|skjerf|batteri|sykehus|valg|navn|ord|lys|kontor|hjem|museum|universitet|sted|liv|arbeid|tilbud|forslag".split("|");
const EN_ORD="bil|gutt|katt|hund|stol|sofa|dag|uke|venn|lærer|jobb|by|butikk|buss|kopp|kaffe|tid|mann|ost|fisk|potet|banan|sko|sokk|fot|lege|kokk|sykkel|billett|koffert|regnbue|skatt|avis|familie|kollega|leilighet".split("|");
const NYNORSK={eg:"jeg",ikkje:"ikke",kva:"hva",korleis:"hvordan",kvifor:"hvorfor",kven:"hvem",frå:"fra",eit:"et",ein:"en",dei:"de",vere:"være",berre:"bare",mykje:"mye",noko:"noe",nokon:"noen",gjere:"gjøre",sjølv:"selv",kvar:"hver / hvor",me:"vi",korkje:"verken"};
const ENGELSK=["the","and","with","very","because","this","that's","but","are","have","from","you","what","where","when"];
const TIDSORD="i dag|i går|i morgen|nå|om morgenen|om kvelden|om ettermiddagen|i helgen|på lørdag|på søndag|på mandag|etterpå|derfor|likevel|dessuten|noen ganger|ofte|først|deretter|til slutt|i fjor|i sommer|i vinter|forrige uke|neste uke|heldigvis|dessverre";
const PRON="jeg|du|han|hun|vi|de|dere|det|man";
const VANLIGE_VERB="er|har|kan|vil|skal|må|liker|bor|jobber|spiser|går|snakker|vet|forstår|kommer|drikker|var|hadde|gikk|spiste|likte|bodde";

function checkText(text,level,need){
  const issues=[];const seen=new Set();
  const add=(key,msg)=>{if(!seen.has(key)){seen.add(key);issues.push(msg)}};
  const t=text.replace(/\s+/g," ").trim();
  const low=t.toLowerCase();
  const words=(t.match(/[A-Za-zÆØÅæøåÉéÜü-]+/g)||[]);
  const sentences=t.split(/(?<=[.!?])\s+/).filter(s=>s.trim().length>1);
  const lv=["A1","A2","B1","B2"].indexOf(level);

  // 1. Nynorsk eller dialekt
  words.forEach(w=>{const k=w.toLowerCase();if(NYNORSK[k])add("nn"+k,`«${w}» er nynorsk eller dialekt. På bokmål skriver du «${NYNORSK[k]}».`)});
  // 2. Engelske ord
  words.forEach(w=>{const k=w.toLowerCase();if(ENGELSK.includes(k))add("en"+k,`«${w}» ser ut som et engelsk ord. Prøv å skrive det på norsk.`)});
  // 3. Kjønn
  let m;const reEt=new RegExp(`\\b(en|ei) (${ET_ORD.join("|")})\\b`,"gi");
  while((m=reEt.exec(t)))add("g"+m[2].toLowerCase(),`«${m[1]} ${m[2]}»: ${m[2].toLowerCase()} er et et-ord. Skriv «et ${m[2].toLowerCase()}».`);
  const reEn=new RegExp(`\\bet (${EN_ORD.join("|")})\\b`,"gi");
  while((m=reEn.exec(t)))add("g"+m[1].toLowerCase(),`«et ${m[1]}»: ${m[1].toLowerCase()} er et en-ord. Skriv «en ${m[1].toLowerCase()}».`);
  // 4. To verb etter hverandre (jeg er bor)
  const reDbl=/\b(er|var) (bor|jobber|liker|har|spiser|går|kommer|heter|snakker|bodde|jobbet|likte|spiste|gikk|kom)\b/gi;
  while((m=reDbl.exec(t)))add("dbl"+m[2],`«${m[1]} ${m[2]}»: her er det to verb. Skriv bare «${m[2]}», for eksempel «jeg ${m[2]}».`);
  // 5. V2 etter tidsord eller adverb først i setningen
  sentences.forEach(s=>{const r=new RegExp(`^(${TIDSORD})\\s*,?\\s+(${PRON})\\s+(?!(ikke|også|alltid|aldri|ofte)\\b)([a-zæøå]+)`,"i").exec(s.trim());
    if(r&&!/^(som|at|fordi|når|hvis)$/i.test(r[4]))add("v2"+r[1].toLowerCase(),`Verbet skal stå på plass 2: «${cap(r[1])} ${r[4]} ${r[2].toLowerCase()} …», ikke «${cap(r[1])} ${r[2].toLowerCase()} ${r[4]} …».`)});
  // 6. «ikke» foran verbet i en helsetning
  sentences.forEach(s=>{const r=new RegExp(`^(${PRON}) ikke (${VANLIGE_VERB})\\b`,"i").exec(s.trim());
    if(r)add("ikke"+r[2],`I en helsetning står «ikke» etter verbet: «${cap(r[1])} ${r[2]} ikke …».`)});
  // 7. «liker» uten «å»
  const reLik=/\b(liker|likte|elsker|pleier|prøver|begynner|slutter|håper) (lese|spise|gå|lage|spille|danse|svømme|reise|trene|jobbe|se|høre|synge|sykle|lære|snakke|bo|kjøre|handle|lage|male|skrive|være|ha|bruke)\b/gi;
  while((m=reLik.exec(t)))add("å"+m[2],`Etter «${m[1]}» kommer «å»: «${m[1]} å ${m[2]}».`);
  // 8. Modalverb + å
  const reMod=/\b(kan|vil|skal|må|bør|kunne|ville|skulle|måtte) å ([a-zæøå]+)/gi;
  while((m=reMod.exec(t)))add("mod"+m[1],`Etter «${m[1]}» skal det ikke stå «å»: «${m[1]} ${m[2]}».`);
  // 9. Stor forbokstav
  sentences.forEach((s,i)=>{const c=s.trim()[0];if(c&&/[a-zæøå]/.test(c))add("cap",`Begynn hver setning med stor bokstav: «${cap(s.trim().split(" ")[0])} …».`)});
  // 10. Punktum
  if(t.length>15&&!/[.!?]["»)]?$/.test(t))add("punkt","Husk punktum på slutten av teksten.");
  // 11. Land / språk / dager / måneder
  if(/\bnorge\b/.test(t))add("Norge","Landet skrives med stor bokstav: «Norge».");
  const reSpr=/[a-zæøå,] (Norsk|Engelsk|Spansk|Arabisk|Polsk|Fransk|Tysk|Svensk)\b/g;
  while((m=reSpr.exec(t)))add("spr"+m[1],`Språk skrives med liten bokstav: «${m[1].toLowerCase()}».`);
  const reDag=/[a-zæøå,] (Mandag|Tirsdag|Onsdag|Torsdag|Fredag|Lørdag|Søndag|Januar|Februar|Mars|April|Juni|Juli|August|September|Oktober|November|Desember)\b/g;
  while((m=reDag.exec(t)))add("dag"+m[1],`Ukedager og måneder skrives med liten bokstav: «${m[1].toLowerCase()}».`);
  // 12. Dobbel bestemmelse (B1+)
  if(lv>=2){const reDb=/\b(den|det|de) (store|lille|nye|gamle|fine|røde|hvite|beste|små|unge|lange) (bil|hus|bok|jente|gutt|by|leilighet|mann|kvinne|dag|film|jobb|barn)\b/gi;
    while((m=reDb.exec(t)))add("db"+m[3],`Husk dobbel bestemmelse: «${m[1].toLowerCase()} ${m[2]} ${m[3]}${/hus|barn/.test(m[3])?"et":/bok|jente/.test(m[3])?"a":"en"}».`)}
  // 13. «ikke» etter verbet i leddsetning (B1+)
  if(lv>=2){const reLs=new RegExp(`\\b(fordi|at|når|hvis|selv om|som|om|mens) (${PRON}) (${VANLIGE_VERB}) (ikke|aldri|alltid|ofte)\\b`,"gi");
    while((m=reLs.exec(t)))add("ls"+m[3],`I en leddsetning står «${m[4]}» foran verbet: «${m[1]} ${m[2]} ${m[4]} ${m[3]}».`)}
  // 14. «på grunn av» + setning
  const rePga=new RegExp(`på grunn av (${PRON}) `,"i");if(rePga.test(t))add("pga","Etter «på grunn av» kommer et substantiv. Foran en hel setning bruker du «fordi».");
  // 15. Samme ord to ganger
  const reRep=/\b([a-zæøå]{2,}) \1\b/gi;while((m=reRep.exec(t)))add("rep"+m[1],`Ordet «${m[1]}» står to ganger etter hverandre.`);

  const found=[],missing=[];
  (need||[]).forEach(([label,stems])=>{const re=new RegExp(`(^|[^a-zæøå])(${stems})`,"i");(re.test(low)?found:missing).push(label)});
  return {words:words.length,sentences:sentences.length,issues,found,missing};
}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}
