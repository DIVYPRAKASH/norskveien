// B1 – Mellomnivå
COURSE.B1={
gram:[
{title:"Adjektiv i bestemt form",
intro:`<p>I bestemt form bruker vi <b>den / det / de</b> + adjektiv med <b>-e</b> + substantiv i bestemt form. Dette heter <b>dobbel bestemmelse</b>:</p>
<p class="no">den store bilen · det store huset · de store bilene</p>
<p>Etter eiendomsord og genitiv har adjektivet også -e, men substantivet har ubestemt form: <span class="no">min nye bil, Karis gamle hus</span>.</p>
<p><b>liten</b> blir <b>lille</b> i bestemt entall: <span class="no">den lille jenta</span>, og <b>små</b> i flertall: <span class="no">de små barna</span>.</p>`,
ex:[
fl("den ___ bilen (rød)","røde","Bestemt form: adjektiv + -e."),
mc("Hva er riktig?",["det nye huset","det nytt hus","nye huset"],"Dobbel bestemmelse: det + nye + huset."),
fl("den ___ jenta (liten)","lille","liten – lille i bestemt entall."),
fl("de ___ barna (liten)","små","liten – små i flertall."),
mc("Hva er riktig?",["min nye jobb","min nye jobben","mitt nye jobb"],"Etter eiendomsord foran: ubestemt substantiv."),
od("Sett ordene i riktig rekkefølge.",["Den","gamle","bilen","er","rød"],"den + gamle + bilen."),
mc("Hun bor i ___ huset ved kirka.",["det hvite","den hvite","det hvitt"],"Hus er et et-ord: det hvite huset.")
]},
{title:"Gradbøying",
intro:`<table class="t"><tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
<tr><td>stor</td><td>større</td><td>størst</td></tr>
<tr><td>billig</td><td>billigere</td><td>billigst</td></tr>
<tr><td>god / bra</td><td>bedre</td><td>best</td></tr>
<tr><td>gammel</td><td>eldre</td><td>eldst</td></tr>
<tr><td>liten</td><td>mindre</td><td>minst</td></tr>
<tr><td>mange</td><td>flere</td><td>flest</td></tr>
<tr><td>interessant</td><td>mer interessant</td><td>mest interessant</td></tr></table>
<p><span class="no">Oslo er større <b>enn</b> Bergen.</span> · <span class="no">Hun er like høy <b>som</b> broren.</span> · <span class="no">Det er den beste boka.</span></p>`,
ex:[
fl("Oslo er ___ enn Bergen. (stor)","større","stor – større – størst."),
mc("Hvem av de tre søsknene er ___?",["eldst","gamlest","mest gammel"],"gammel – eldre – eldst."),
fl("Denne filmen er ___ enn den forrige. (god)","bedre","god – bedre – best."),
mc("Hun er like høy ___ broren sin.",["som","enn","så"],"like … som."),
mc("Det er den ___ boka jeg har lest.",["beste","bedre","best"],"Bestemt form superlativ: den beste."),
fl("Matematikk er ___ interessant enn historie.","mer","Lange adjektiv: mer / mest."),
fl("I dag er det ___ folk her enn i går. (mange)","flere","mange – flere – flest.")
]},
{title:"Leddsetninger og ordstilling",
intro:`<p>En <b>leddsetning</b> kan ikke stå alene. Den begynner med et bindeord som <i>at, fordi, når, hvis, om, selv om</i>.</p>
<p>I leddsetninger står <b>ikke</b> og andre setningsadverb (<i>alltid, ofte, aldri</i>) <b>foran</b> verbet:</p>
<p class="no">Jeg vet at han <b>ikke kommer</b>. · Hun er sliten fordi hun <b>alltid jobber</b> sent.</p>
<p>Begynner setningen med leddsetningen, kommer verbet i helsetningen rett etter: <span class="no">Hvis det regner, <b>blir</b> vi hjemme.</span></p>
<p><b>om</b> = usikkert ja/nei: <span class="no">Jeg vet ikke om hun kommer.</span></p>`,
ex:[
mc("Hvilken setning er riktig?",["Jeg sier at jeg ikke har tid.","Jeg sier at jeg har ikke tid.","Jeg sier at ikke jeg har tid."],"Leddsetning: «ikke» foran verbet."),
mc("Han blir hjemme fordi …",["han ikke føler seg bra","han føler seg ikke bra","ikke han føler seg bra"],"Etter «fordi»: ikke + verb."),
mc("Jeg vet ikke ___ han kommer i morgen.",["om","hvis","at"],"«om» = usikkert ja eller nei."),
mc("Hvis det regner, …",["blir vi hjemme","vi blir hjemme","vi hjemme blir"],"Verbet i helsetningen kommer rett etter leddsetningen."),
od("Sett ordene i riktig rekkefølge.",["Jeg","vet","at","hun","ofte","reiser"],"«ofte» foran verbet i at-setningen."),
fl("Vi går på tur ___ det regner. (selv om / fordi)","selv om","Vi går likevel: selv om."),
mc("Hun sa at hun ___",["aldri drikker kaffe","drikker aldri kaffe","drikker kaffe aldri"],"«aldri» foran verbet i leddsetningen.")
]},
{title:"Refleksive verb og sin/si/sitt/sine",
intro:`<p><b>Refleksive verb</b> har <i>seg</i>: <span class="no">å glede seg, å vaske seg, å sette seg, å føle seg, å skynde seg</span>.</p>
<table class="t"><tr><td>jeg gleder meg</td><td>vi gleder oss</td></tr><tr><td>du gleder deg</td><td>dere gleder dere</td></tr><tr><td>han/hun gleder seg</td><td>de gleder seg</td></tr></table>
<p><b>sin / si / sitt / sine</b> viser tilbake til subjektet i samme setning. <b>hans / hennes</b> viser til en annen person:</p>
<p class="no">Per tar bilen <b>sin</b>. (Pers egen bil) · Per tar bilen <b>hans</b>. (en annen manns bil)</p>`,
ex:[
fl("Jeg gleder ___ til ferien.","meg","jeg – meg."),
fl("De må skynde ___.","seg","de – seg."),
fl("Vi satte ___ ved bordet.","oss","vi – oss."),
mc("Kari besøker moren ___ (Karis egen mor).",["sin","hennes","seg"],"Subjektet er Kari: sin."),
mc("Ola liker Kari, men han liker ikke broren ___ (Karis bror).",["hennes","sin","sitt"],"Ikke subjektets egen bror: hennes."),
fl("Barna leker med lekene ___ (sine egne).","sine","Flertall: sine."),
mc("Hun føler ___ ikke bra i dag.",["seg","henne","sin"],"å føle seg.")
]},
{title:"Pluskvamperfektum og tidsuttrykk",
intro:`<p><b>Pluskvamperfektum</b> = <i>hadde</i> + perfektum partisipp. Noe skjedde <b>før</b> noe annet i fortiden: <span class="no">Da vi kom, hadde toget gått.</span></p>
<ul><li><b>da</b>: én gang i fortiden: <span class="no">Da jeg var liten, bodde jeg i Chile.</span></li>
<li><b>når</b>: noe som gjentar seg, eller framtid: <span class="no">Når jeg kommer hjem, lager jeg middag.</span></li>
<li><b>mens</b>: samtidig: <span class="no">Mens vi ventet, begynte det å regne.</span></li>
<li><b>etter at / før</b>: <span class="no">Etter at hun hadde spist, gikk hun en tur.</span></li></ul>`,
ex:[
mc("___ jeg var liten, bodde jeg i Chile.",["Da","Når","Hvis"],"Én gang i fortiden: da."),
mc("___ jeg kommer hjem, lager jeg alltid middag.",["Når","Da","Om"],"Noe som gjentar seg: når."),
fl("Toget hadde ___ da vi kom. (gå)","gått","hadde + gått."),
mc("Etter at hun ___ spist, gikk hun en tur.",["hadde","har","var"],"Pluskvamperfektum: hadde spist."),
od("Sett ordene i riktig rekkefølge.",["Mens","vi","ventet,","begynte","det","å","regne"],"Leddsetning først, så verbet i helsetningen."),
fl("Jeg hadde aldri ___ snø før jeg kom til Norge. (se)","sett","se – så – har sett."),
mc("Vi spiste ___ vi gikk på kino.",["før","da","mens at"],"før = tidligere enn.")
]},
{title:"Relativsetninger: som, der og hvor",
intro:`<p><b>som</b> knytter en leddsetning til et substantiv: <span class="no">Mannen <b>som</b> bor her, er lege.</span></p>
<p>Når <i>som</i> er <b>objekt</b>, kan det sløyfes: <span class="no">Boka (som) jeg leser, er spennende.</span> Når <i>som</i> er <b>subjekt</b>, må det stå.</p>
<p>Om sted bruker vi ofte <b>der</b> eller <b>hvor</b>: <span class="no">Byen der jeg bor, er liten.</span></p>`,
ex:[
mc("Mannen ___ bor ved siden av, er lege.",["som","hvem","hva"],"Relativsetning: som."),
mc("Det er byen ___ jeg ble født.",["der","hva","hvem"],"Sted: der eller hvor."),
fl("Boka ___ du ga meg, er spennende.","som","«som» kan også sløyfes her."),
mc("I hvilken setning kan «som» sløyfes?",["Filmen som vi så, var lang.","Kvinnen som jobber her, er snill.","Bussen som går klokka åtte, er full."],"Her er «som» objekt (vi så filmen)."),
mc("Hva er riktig?",["Det er læreren som hjalp meg.","Det er læreren hjalp meg.","Det er læreren hvem hjalp meg."],"Subjekt: «som» må stå."),
od("Sett ordene i riktig rekkefølge.",["Huset","som","de","kjøpte,","er","gammelt"],"som + leddsetning, så verbet «er».")
]},
{title:"Verb med preposisjon og partikkel",
intro:`<p>Mange verb har en fast preposisjon. Lær dem sammen:</p>
<ul><li><span class="no">vente på, tenke på, høre på, passe på</span></li><li><span class="no">glede seg til, være glad i, være redd for, være interessert i</span></li>
<li><span class="no">stå opp, legge seg, finne ut, gi opp, ta på seg</span></li></ul>`,
ex:[
fl("Jeg venter ___ bussen.","på",""),
mc("Jeg er veldig glad ___ deg.",["i","på","for"],"«glad i» = være veldig glad i noen, elske."),
fl("Hun er redd ___ hunder.","for",""),
mc("Hva betyr «å finne ut»?",["Å få vite noe","Å gå ut","Å miste noe"],""),
fl("Jeg står ___ klokka sju hver dag.","opp",""),
mc("Han tenker ___ å flytte til Bergen.",["på","om","til"],"tenke på + å + verb."),
fl("Jeg er interessert ___ historie.","i","")
]}
],
ord:[
{title:"Jobb og yrker",
intro:`<ul class="vocab"><li>👩‍🏫 en lærer</li><li>👨‍🍳 en kokk</li><li>👩‍⚕️ en lege</li><li>🧑‍🔧 en mekaniker</li><li>👨‍🌾 en bonde</li><li>👩‍🚒 en brannkonstabel</li></ul>
<p>Ord fra arbeidslivet: <span class="no">en søknad, en arbeidsgiver, en kollega, ei/en lønn, deltid, heltid, en oppsigelse, en arbeidskontrakt</span>.</p>`,
ex:[
pn("👩‍🏫",["en lærer"],"en lærer – læreren – lærere."),
pn("👨‍🍳",["en kokk"],"en kokk – kokken."),
pn("👨‍🌾",["en bonde"],"en bonde – bonden – bønder."),
mc("Den som betaler lønna di, er …",["arbeidsgiveren","kollegaen","kunden"],""),
mc("Hva betyr «deltid»?",["At du jobber mindre enn full tid","At du jobber om natta","At du er syk"],""),
fl("Jeg sendte en ___ på jobben i går. (Du skriver den for å få jobben.)","søknad","en søknad = en jobbsøknad."),
mc("Hva skal stå i en arbeidskontrakt?",["Lønn, arbeidstid og oppsigelsestid","Navnet på kollegaene dine","Hobbyene dine"],"")
]},
{title:"Natur og vær",
intro:`<ul class="vocab"><li>⛰️ et fjell</li><li>🌲 et tre (trær)</li><li>🌊 ei/en bølge, havet</li><li>🌈 en regnbue</li><li>🌧️ regn: Det regner.</li><li>❄️ snø: Det snør.</li><li>🌬️ vind: Det blåser.</li><li>⛈️ torden: Det tordner.</li></ul>
<p>Årstider: <span class="no">vår, sommer, høst, vinter</span>. Temperatur: <span class="no">pluss / minus fem grader</span>.</p>`,
ex:[
pn("⛰️",["et fjell"],"et fjell – fjellet – fjell – fjellene."),
pn("🌈",["en regnbue"],"en regnbue – regnbuen."),
mcp("🌧️","Hvordan er været?",["Det regner.","Det snør.","Sola skinner."],""),
mcp("❄️","Hvordan er været?",["Det snør.","Det regner.","Det tordner."],""),
mcp("🌬️","Hvordan er været?",["Det blåser.","Det er tåke.","Det er varmt."],""),
mc("Det er minus fem grader. Det er …",["kaldt","varmt","lunkent"],""),
fl("Om høsten faller ___ av trærne.",["løvet","bladene","løv"],"")
]},
{title:"Transport og reise",
intro:`<ul class="vocab"><li>🚆 et tog</li><li>🚌 en buss</li><li>✈️ et fly</li><li>⛴️ ei/en ferje</li><li>🚲 en sykkel</li><li>🎫 en billett</li><li>🧳 en koffert</li></ul>
<p><span class="no">forsinket</span> = kommer for sent · <span class="no">innstilt</span> = går ikke · <span class="no">en holdeplass</span> = der bussen stopper · <span class="no">bytte</span> = gå over til en annen buss eller et annet tog.</p>`,
ex:[
pn("🚆",["et tog"],"et tog – toget – tog – togene."),
pn("🚲",["en sykkel"],"en sykkel – sykkelen – sykler."),
pn("🧳",["en koffert"],"en koffert – kofferten."),
mc("Toget kommer 20 minutter for sent. Det er …",["forsinket","innstilt","fullt"],""),
mc("«Bussen er innstilt» betyr …",["Bussen kjører ikke","Bussen er full","Bussen er ny"],""),
fl("Jeg må kjøpe en ___ før jeg går på toget.","billett",""),
mc("Hvor venter du på bussen?",["På holdeplassen","På perrongen","På flyplassen"],"Toget går fra en perrong.")
]}
],
uttale:[
{title:"Tonelag og trykk",
intro:`<p>Norsk har to <b>tonelag</b> (melodier). Noen ord skilles bare av melodien:</p>
<table class="t"><tr><th>Tonelag 1 (enkel)</th><th>Tonelag 2 (dobbel, syngende)</th></tr>
<tr><td>bønder (fra bonde)</td><td>bønner (fra bønne)</td></tr><tr><td>tanken (bensintanken)</td><td>tanken (tanken i hodet)</td></tr></table>
<p>De fleste norske ord har <b>trykk på første stavelse</b>: <span class="no">JEN-te, GA-te</span>. Mange lånord har trykk på siste: <span class="no">universiTET, buTIKK, restauRANG</span>.</p>`,
ex:[
mc("Hvor er trykket i «jente»?",["På første stavelse: JEN-te","På andre stavelse: jen-TE","Likt på begge"],""),
mc("Hvor er trykket i «universitet»?",["På siste stavelse: -TET","På første: U-","I midten: -VER-"],"Lånord har ofte trykk på slutten."),
mc("Hva skiller «bønder» og «bønner» i uttalen?",["Melodien (tonelaget)","Lang og kort vokal","En stum bokstav"],""),
mc("Ord med to stavelser som «gate» og «jente» har vanligvis …",["tonelag 2","tonelag 1","ingen tone"],""),
sp("Jenta går i gata med kaka.","Øv på den syngende melodien i hvert ord."),
sp("Vi møtes ved butikken i morgen.","butikk: trykk på -tikk.")
]},
{title:"Svake former i talespråket",
intro:`<p>I vanlig tale blir små ord svake og bindes sammen. Det er nøkkelen til å forstå norsk slik folk snakker.</p>
<ul><li><span class="no">jeg</span> → «je», <span class="no">det</span> → «de»</li><li><span class="no">ikke</span> → «'kke»: <i>har ikke</i> → «ha'kke»</li>
<li><span class="no">skal vi</span> → «ska'vi»</li><li><span class="no">Hva er det?</span> → «va'e de?»</li></ul>
<p>Når du skriver bokmål, skriver du alltid de fulle formene.</p>`,
ex:[
mc("«Je ha'kke tid.» betyr …",["Jeg har ikke tid.","Jeg hadde tid.","Jeg har tid."],"ikke blir 'kke."),
mc("«Ska'vi gå?» betyr …",["Skal vi gå?","Vil du gå?","Kan vi gå?"],""),
mc("«Va'e de?» betyr …",["Hva er det?","Hvor er det?","Hvem er det?"],""),
ls("Jeg har ikke tid i dag.",["Jeg har ikke tid i dag.","Jeg hadde tid i dag.","Jeg har tid i dag."],"Lytt etter det korte «'kke»."),
dk("Skal vi ta en kaffe etterpå?","Skriv de fulle formene, selv om de uttales svakt."),
sp("Jeg vet ikke hva det er.","Bind ordene sammen: «je veit'ke va de e».")
]},
{title:"Diftonger",
intro:`<p>En <b>diftong</b> er to vokaler i samme stavelse:</p>
<ul><li><b>ei</b>: <span class="no">hei, vei, stein</span></li><li><b>øy</b>: <span class="no">øy, høy, høyre</span></li><li><b>au</b>: <span class="no">sau, haug, august</span></li><li><b>ai</b> (lånord): <span class="no">hai, mai</span></li></ul>`,
ex:[
ls("hei",["hei","høy","hai"],""),
ls("øy",["øy","ei","au"],""),
ls("sau",["sau","sy","si"],""),
mc("Hvilket ord har diftongen «øy»?",["høyre","hjem","hus"],""),
dk("Det er en høy stein ved veien.","Hør etter ei og øy."),
sp("Hei! Har du sett sauene på øya?","Tre diftonger: ei, au, øy.")
]}
],
lese:[
{title:"Dugnad i borettslaget",
text:`Kjære beboere!
Lørdag 26. april kl. 10–14 blir det vårdugnad i borettslaget. Vi skal rake løv, vaske fellesarealene og male benkene ved lekeplassen. Styret sørger for kaffe, vafler og pølser til alle som deltar.
Hvis du ikke har mulighet til å delta, gi beskjed til styret innen 20. april. Husk at det er bra for fellesskapet når så mange som mulig deltar.
Hilsen styret`,
intro:`<p><b>Dugnad</b> er frivillig arbeid som naboer, foreldre eller medlemmer i en klubb gjør sammen.</p><p>Nyttige ord: <span class="no">beboere</span> (de som bor der), <span class="no">styret</span> (de som leder borettslaget), <span class="no">fellesarealene</span> (områder alle deler).</p>`,
ex:[
mc("Hva handler meldingen om?",["Felles arbeid for alle som bor der","Et styremøte","En fest for barna"],""),
mc("Hva gir styret til dem som deltar?",["Kaffe, vafler og pølser","Penger","Bare verktøy"],""),
mc("Hva skal du gjøre hvis du ikke kan komme?",["Gi beskjed til styret innen 20. april","Betale en bot","Finne en annen som kan komme"],""),
fl("De skal male ___ ved lekeplassen.","benkene",""),
tf("Dugnaden varer hele dagen.",false,"Den er fra klokka 10 til 14."),
mc("Hva betyr «dugnad»?",["Frivillig arbeid sammen","Betalt overtid","Et nabolagsselskap"],"En viktig del av norsk fellesskap.")
]},
{title:"En stillingsannonse",
text:`Butikkmedarbeider – 60 % stilling
Vi søker en blid og serviceinnstilt medarbeider til butikken vår i sentrum. Arbeidstiden er hovedsakelig ettermiddag og annenhver lørdag.
Krav: Gode norskkunnskaper, muntlig og skriftlig.
Det er en fordel om du har erfaring fra varehandel, men det er ikke et krav.
Vi tilbyr et godt arbeidsmiljø, opplæring og personalrabatt.
Søknadsfrist: 1. mars.`,
intro:`<p>Stillingsannonser har ofte samme oppbygning: <span class="no">Vi søker</span>, <span class="no">Krav</span>, <span class="no">Vi tilbyr</span>, <span class="no">Søknadsfrist</span>.</p>`,
ex:[
mc("Hva betyr «60 % stilling»?",["Du jobber 60 % av full tid","Du får 60 % lønn","Jobben varer i 60 dager"],""),
mc("Når skal du stort sett jobbe?",["Ettermiddager og annenhver lørdag","Bare om morgenen","Om natta"],"annenhver = hver andre."),
tf("Du må ha erfaring fra butikk.",false,"Det er en fordel, men ikke et krav."),
mc("Hva er et krav?",["Gode norskkunnskaper","Førerkort","Utdanning fra universitetet"],""),
fl("Søknadsfristen er 1. ___.","mars",""),
mc("Hva betyr «personalrabatt»?",["De ansatte får billigere varer","Gratis lunsj","Ekstra ferie"],"")
]},
{title:"Brev fra kommunen",
text:`Ny ordning for avfall
Fra 1. januar innfører kommunen en ny ordning for kildesortering. Matavfall skal legges i grønne poser og kastes i den samme dunken som restavfallet. Plast skal skylles og legges i blå poser. Papir og papp kastes i papirdunken, som tømmes hver fjerde uke. Glass og metall leveres på returpunkter, som du finner ved de fleste dagligvarebutikker. Du får nye poser gratis i butikken.
Har du spørsmål, kan du kontakte servicetorget i kommunen.`,
intro:`<p>Kommunen sender ofte informasjon om praktiske ting. Nyttige ord: <span class="no">kildesortering</span> (å sortere søppel), <span class="no">restavfall</span> (det som ikke kan sorteres), <span class="no">dunk</span> (stor søppelkasse).</p>`,
ex:[
mc("Hva handler brevet om?",["Hvordan du skal sortere søppel","Nye bussruter","Skatt"],""),
mc("Hvor skal matavfallet?",["I grønne poser i dunken for restavfall","I blå poser","I papirdunken"],""),
tf("Papirdunken tømmes hver uke.",false,"Den tømmes hver fjerde uke."),
mc("Hvor leverer du glass?",["På et returpunkt ved butikken","I restavfallet","På servicetorget"],""),
fl("Plast skal ___ før du legger den i posen.",["skylles","vaskes"],""),
tf("Du må betale for de nye posene.",false,"«Du får nye poser gratis i butikken.»")
]}
],
snakke:[
{title:"Å si meningen sin",
intro:`<p>Tre verb som ofte blandes:</p><ul>
<li><b>synes</b>: en mening fra egen erfaring: <span class="no">Jeg synes filmen var bra.</span></li>
<li><b>tror</b>: noe du ikke vet sikkert: <span class="no">Jeg tror det blir regn.</span></li>
<li><b>tenker</b>: å bruke hodet: <span class="no">Jeg tenker på deg.</span></li></ul>
<p>Også nyttig: <span class="no">Det kommer an på …</span>, <span class="no">Jeg er enig / uenig</span>.</p>`,
ex:[
mc("Jeg så filmen i går. Jeg ___ den var kjedelig.",["synes","tror","tenker"],"Du har sett den: synes."),
mc("Jeg ___ det blir regn i morgen.",["tror","synes","tenker"],"Du vet ikke sikkert: tror."),
sp("Jeg synes det er fint å bo her, men vinteren er lang.",""),
sp("Det kommer an på været.",""),
sp("Jeg er helt enig med deg.",""),
sp("I sommer skal jeg besøke familien min, og så skal vi kanskje reise til Lofoten.","Svar på spørsmålet: Hva skal du gjøre i sommerferien?")
]},
{title:"På telefonen",
intro:`<p>Mange nordmenn svarer telefonen med navnet sitt: <span class="no">Hei, det er Anna.</span> Når du ringer, sier du hvem du er og hvorfor du ringer.</p>
<ul><li><span class="no">Jeg ringer angående …</span> = jeg ringer om …</li><li><span class="no">Kan du gjenta det?</span></li><li><span class="no">Kan jeg legge igjen en beskjed?</span></li></ul>`,
ex:[
sp("Hei, det er Anna som ringer. Jeg ringer angående leiligheten.",""),
sp("Unnskyld, kan du snakke litt saktere?",""),
sp("Kan jeg legge igjen en beskjed?",""),
mc("Du hørte ikke telefonnummeret. Hva sier du?",["Kan du gjenta det?","Hva sier du nå da?","Jeg forstår ingenting."],"Høflig og tydelig."),
mc("Hvordan svarer mange nordmenn telefonen?",["De sier navnet sitt","«Hallo, hvem er det?»","De venter på at du skal snakke"],"For eksempel: «Hei, det er Lars.»")
]},
{title:"Jobbintervju",
intro:`<p>I et norsk jobbintervju er tonen ofte uformell, men du bør være forberedt. Hils med håndtrykk og blikkontakt, og bruk fornavn.</p>
<ul><li><span class="no">Fortell litt om deg selv.</span></li><li><span class="no">Hva er dine sterke og svake sider?</span></li><li><span class="no">Hvorfor søker du denne stillingen?</span></li></ul>`,
ex:[
sp("Jeg har fem års erfaring fra butikk.",""),
sp("Mine sterke sider er at jeg er pålitelig og liker å samarbeide.",""),
sp("Jeg søker denne stillingen fordi jeg vil utvikle meg.",""),
sp("Jeg lurer på hvordan en vanlig arbeidsdag ser ut.","Et godt spørsmål å stille på slutten."),
mc("«Fortell litt om deg selv.» Hva er best?",["Kort om utdanning, erfaring og hva du er god på","Hele livshistorien din","«Det står i CV-en.»"],""),
mc("Hvordan hilser du vanligvis i et intervju i Norge?",["Håndtrykk, blikkontakt og fornavn","Med en klem","Med et bukk"],"")
]}
],
skrive:[
{title:"E-post til utleieren",
intro:`<p>Formelle e-poster i Norge er ofte direkte og vennlige. Du kan begynne med <b>Hei</b> + fornavn.</p>
<p>Oppbygning: <b>hvorfor du skriver</b> (<span class="no">Jeg skriver fordi …</span>) → <b>detaljer</b> → <b>hva du ønsker</b> (<span class="no">Kan du …?</span>) → <b>hilsen</b> (<span class="no">Med vennlig hilsen</span>).</p>`,
ex:[
fl("Med ___ hilsen","vennlig",""),
mc("Hvordan kan du begynne en e-post til utleieren Per?",["Hei Per,","Kjære herr Per,","Til den det måtte angå,"],"«Hei» + navn er vanlig i Norge."),
mc("Hvilken setning sier tydelig hva du ønsker?",["Kan du sende en reparatør så snart som mulig?","Kanskje noen kan se på det en gang.","Jeg vet ikke hva jeg skal gjøre."],""),
wr("Vaskemaskinen i leiligheten din er ødelagt. Skriv en e-post til utleieren: forklar problemet, hva du har prøvd, og be om hjelp.",60,[["Hei / navn","hei"],["Jeg skriver fordi","skriver fordi|skriver for å"],["vaskemaskin","vaskemaskin"],["har prøvd / sjekket","prøvd|sjekket"],["Kan du …?","kan du"],["Med vennlig hilsen","vennlig hilsen"]],
`Hei Per,
Jeg skriver fordi vaskemaskinen i leiligheten har sluttet å virke. Den startet ikke i går kveld, og det kommer vann ut på gulvet når jeg prøver igjen. Jeg har sjekket at kontakten står i, og at kranen er åpen.
Kan du sende en reparatør så snart som mulig? Jeg er hjemme etter klokka 16 på hverdager og hele dagen på lørdag. Gi meg gjerne beskjed om hvilken dag som passer.
Med vennlig hilsen
Lina Ahmed`)
]},
{title:"Tradisjoner før og nå",
intro:`<p>Skriv om en tradisjon fra hjemlandet ditt og sammenlign med Norge. Nyttige ord:</p>
<ul><li><span class="no">mens</span> (to ulike ting samtidig)</li><li><span class="no">i motsetning til</span></li><li><span class="no">på samme måte som</span></li><li><span class="no">derimot</span></li></ul>`,
ex:[
mc("I Norge spiser vi middag klokka fem, ___ i Spania spiser de mye senere.",["mens","fordi","hvis"],"«mens» viser en kontrast."),
fl("I ___ til Norge er det varmt hele året i Brasil.","motsetning","i motsetning til."),
wr("Beskriv en høytid eller tradisjon fra landet ditt, og sammenlign den med en norsk tradisjon.",70,[["I Norge","i norge"],["mens","mens"],["i motsetning til","i motsetning til|derimot"],["på samme måte","på samme måte|også"],["familie","familie|venner"]],
`I India feirer vi Diwali, lysfesten, om høsten. Vi tenner lys og lamper, spiser søtsaker og besøker familie og venner. Mange kjøper også nye klær.
I Norge er julen den største høytiden. På samme måte som Diwali handler julen om lys, god mat og familie. Mens vi feirer med fyrverkeri og farger, er julen i Norge roligere, og mange er hjemme med de nærmeste.
I motsetning til Diwali, som varer i flere dager, er julaften den viktigste kvelden i Norge. Jeg liker begge tradisjonene, og nå feirer familien min både Diwali og jul.`)
]},
{title:"Bildeoppgave: En dårlig morgen",
intro:`<p>Se på bildet og fortell hva som <b>skjedde</b>. Skriv i <b>preteritum</b>, og bruk tidsord som <span class="no">først, så, etterpå, til slutt</span>. Husk V2: <span class="no">Først <b>sto</b> jeg …</span></p>`,
ex:[
mcp(scene("ute","🌧️ 20 8 12; 🌧️ 55 6 12; 🌧️ 85 9 12; 🚏 28 32 18; 🧍 42 38 16; ☂️ 42 22 14; 🚌 80 42 22; ⏰ 10 48 9"),"Hvordan er været på bildet?",["Det regner.","Det snør.","Sola skinner."],""),
fl("Bussen kom 20 minutter for sent. Den var ___.","forsinket",""),
pw(scene("ute","🌧️ 20 8 12; 🌧️ 55 6 12; 🌧️ 85 9 12; 🚏 28 32 18; 🧍 42 38 16; ☂️ 42 22 14; 🚌 80 42 22; ⏰ 10 48 9"),"Fortell hva som skjedde denne morgenen. Skriv i preteritum.",60,
[["regn","regn"],["paraply","paraply"],["holdeplass","holdeplass|busstopp"],["buss","buss"],["forsinket / for sent","forsinket|for sent|sent"],["klokka","klokk|tid"],["jobb / møte","jobb|møte|skole"]],
`I går morges regnet det mye. Jeg sto på holdeplassen med paraplyen min og ventet på bussen. Den skulle komme klokka åtte, men den var forsinket. Etter tjue minutter kom den endelig, men den var helt full. Jeg kom for sent til et viktig møte på jobben, og sjefen min var ikke fornøyd. Neste gang skal jeg ta en tidligere buss.`)
]}
],
kultur:[
{title:"Arbeidslivet",
intro:`<ul><li><b>Flatt hierarki</b>: du sier fornavn til sjefen og blir bedt om å si meningen din.</li>
<li><b>Lunsj</b> er tidlig (ofte 11–11.30) og kort, gjerne matpakke i kantina.</li>
<li>Mange går hjem rundt <b>klokka 16</b>, og familietid blir respektert.</li>
<li><b>Janteloven</b>: en uskreven regel om at man ikke skal skryte eller tro at man er bedre enn andre.</li>
<li><b>Allemannsretten</b>: retten til å gå, gå på ski og telte i utmark.</li></ul>`,
ex:[
mc("Hva kaller du vanligvis sjefen din?",["Fornavnet","Herr eller fru + etternavn","Tittelen"],"Norske arbeidsplasser er flate."),
mc("Når spiser man vanligvis lunsj på jobben?",["Rundt 11–11.30","Klokka 13–14","Klokka 15"],""),
mc("Hva er janteloven?",["En uskreven regel mot skryt","En lov om arbeidstid","En regel for kø"],"Fra en roman av Aksel Sandemose (1933)."),
mc("Allemannsretten gir deg lov til å …",["gå tur og telte i utmark","fiske hvor som helst uten fiskekort","plukke frukt i hagen til naboen"],"Du kan telte minst 150 meter fra hus."),
tf("På et møte forventer sjefen at alle sier hva de mener.",true,"Det er vanlig at alle bidrar.")
]},
{title:"Venner og sosiale koder",
intro:`<ul><li>Nordmenn kan virke reserverte i starten, men vennskap kommer ofte gjennom <b>aktiviteter</b>: idrettslag, kor, dugnad.</li>
<li>Ta av deg <b>skoene</b> inne.</li><li>Kom <b>presis</b>.</li>
<li><b>Spleise</b>: det er vanlig å dele regningen.</li><li><b>Julebord</b>: julefest med kollegaer i november eller desember.</li></ul>`,
ex:[
mc("Du er på besøk hos en venn. Hva gjør du i døra?",["Tar av meg skoene","Beholder skoene på","Spør om tøfler"],""),
mc("«Skal vi spleise?» betyr …",["Skal vi dele regningen?","Skal vi gå hjem?","Skal vi bestille mer?"],""),
mc("Hva er den beste måten å få norske venner på?",["Bli med i en klubb eller aktivitet","Snakke med fremmede på bussen","Vente på å bli invitert hjem"],""),
mc("Hva er et julebord?",["En julefest med kollegaer","Et juletre","Et julemarked"],""),
tf("Middagen begynner klokka 18. Det er greit å komme klokka 18.45.",false,"Det er viktig å være presis.")
]},
{title:"Skole og barnehage",
intro:`<ul><li><b>Barnehage</b>: for barn fra 1 til 5 år.</li><li><b>Skolestart</b>: barna begynner på skolen det året de fyller 6.</li>
<li><b>SFO</b> (skolefritidsordningen): tilbud før og etter skoletid.</li>
<li><b>Utviklingssamtale</b>: møte mellom lærer, foreldre og elev om hvordan eleven har det.</li>
<li>Barna er ute i all slags vær: <span class="no">Det finnes ikke dårlig vær, bare dårlige klær.</span></li></ul>`,
ex:[
mc("Hvor gamle er barna når de begynner på skolen i Norge?",["6 år","5 år","7 år"],""),
mc("Hva er SFO?",["Et tilbud for barn før og etter skoletid","En eksamen","Et sommerkurs"],""),
mc("Hva er en utviklingssamtale?",["Et møte mellom lærer, foreldre og elev","Et jobbintervju","En time hos legen"],""),
tf("Foreldre blir ofte bedt om å være med på dugnad i skolen eller idrettslaget.",true,""),
mc("Barnehagen skal på tur, og det regner. Hva skjer?",["Barna går på tur likevel, med regntøy","Turen blir avlyst","Barna blir hjemme"],"Det finnes ikke dårlig vær, bare dårlige klær.")
]}
]
};
