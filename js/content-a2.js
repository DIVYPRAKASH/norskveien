// A2 – Grunnleggende
COURSE.A2={
gram:[
{title:"Substantiv: kjønn og former",
intro:`<p>Alle substantiv har kjønn: <b>hankjønn</b> (en), <b>hunkjønn</b> (ei) og <b>intetkjønn</b> (et). I bokmål kan du også bruke <i>en</i> om hunkjønnsord: <span class="no">ei jente / en jente</span>.</p>
<table class="t"><tr><th>Ubestemt entall</th><th>Bestemt entall</th><th>Ubestemt flertall</th><th>Bestemt flertall</th></tr>
<tr><td>en bil</td><td>bilen</td><td>biler</td><td>bilene</td></tr>
<tr><td>ei jente</td><td>jenta / jenten</td><td>jenter</td><td>jentene</td></tr>
<tr><td>et eple</td><td>eplet</td><td>epler</td><td>eplene</td></tr>
<tr><td>et hus</td><td>huset</td><td>hus</td><td>husene</td></tr></table>
<p>Korte et-ord (én stavelse) får ofte ingen endelse i ubestemt flertall: <span class="no">et hus – mange hus</span>.</p>
<p>Noen ord er uregelmessige: <span class="no">en mann – menn, et barn – barn – barna, en bok – bøker – bøkene</span>.</p>`,
ex:[
mc("___ eple",["et","en","ei"],"«Eple» er et intetkjønnsord: et eple."),
fl("en bil – ___ (bestemt form entall)","bilen","Hankjønn får -en: bilen."),
fl("et hus – mange ___","hus","Korte et-ord får ingen endelse i ubestemt flertall."),
mc("Hva er bestemt form flertall av «en bok»?",["bøkene","bokene","bøker"],"en bok – boka/boken – bøker – bøkene."),
fl("ei jente – ___ (bestemt form entall)",["jenta","jenten"],"Hunkjønn: jenta. Du kan også skrive jenten."),
mc("Jeg har to ___.",["barn","barner","barnen"],"et barn – to barn – barna."),
pn("🍎",["et eple"],"et eple – eplet – epler – eplene.")
]},
{title:"Adjektiv: ubestemt form",
intro:`<p>Adjektivet bøyes etter substantivet:</p>
<table class="t"><tr><th>en-ord</th><th>et-ord</th><th>flertall</th></tr>
<tr><td>en stor bil</td><td>et stor<b>t</b> hus</td><td>stor<b>e</b> biler</td></tr>
<tr><td>Bilen er stor.</td><td>Huset er stort.</td><td>Bilene er store.</td></tr></table>
<ul><li>Adjektiv på <b>-ig</b> får ikke -t: <span class="no">et hyggelig sted</span>.</li>
<li>Adjektiv som slutter på vokal med trykk, får <b>-tt</b>: <span class="no">et nytt hus, et blått hus</span>.</li>
<li><b>liten</b> er uregelmessig: <span class="no">en liten bil, ei lita jente, et lite hus, små barn</span>.</li></ul>`,
ex:[
fl("et ___ hus (stor)","stort","Et-ord får -t: et stort hus."),
fl("Bilene er ___. (rød)","røde","Flertall får -e."),
mc("Huset er ___.",["nytt","ny","nye"],"Et-ord + ny blir nytt."),
mc("et ___ sted (hyggelig)",["hyggelig","hyggeligt","hyggelige"],"Adjektiv på -ig får ikke -t."),
fl("Vi har to ___ barn. (liten)","små","liten blir små i flertall."),
od("Sett ordene i riktig rekkefølge.",["Leiligheten","er","liten","og","koselig"],"Verbet «er» står på plass 2.",["Leiligheten er koselig og liten"]),
pn("🏠",["et hus"],"et hus – huset – hus – husene.")
]},
{title:"Presens, preteritum og ordstilling",
intro:`<p><b>Presens</b>: infinitiv + <b>-r</b>, likt for alle personer: <span class="no">jeg snakker, du snakker, de snakker</span>. Unntak: <span class="no">er, har, gjør, sier, vet</span>.</p>
<p><b>Preteritum</b> brukes om noe som er ferdig: <i>i går, i fjor, forrige uke</i>.</p>
<table class="t"><tr><th>Gruppe</th><th>Infinitiv</th><th>Preteritum</th></tr>
<tr><td>-et</td><td>å snakke, å jobbe</td><td>snakket, jobbet</td></tr>
<tr><td>-te</td><td>å spise, å kjøpe</td><td>spiste, kjøpte</td></tr>
<tr><td>-de</td><td>å prøve, å leve</td><td>prøvde, levde</td></tr>
<tr><td>-dde</td><td>å bo, å tro</td><td>bodde, trodde</td></tr>
<tr><td>sterke verb</td><td>gå, se, drikke, komme, være, ha</td><td>gikk, så, drakk, kom, var, hadde</td></tr></table>
<p><b>V2-regelen:</b> verbet står alltid på plass 2. Begynner du med tid eller sted, kommer subjektet etter verbet: <span class="no">I går <b>spiste</b> jeg fisk.</span></p>
<p><b>ikke</b> står rett etter verbet: <span class="no">Jeg liker <b>ikke</b> kaffe.</span></p>`,
ex:[
fl("I går ___ jeg pizza. (spise)","spiste","-te-gruppen: spise – spiste."),
fl("Vi ___ på kino på lørdag. (gå)","gikk","Sterkt verb: gå – gikk."),
fl("Hun ___ i Trondheim før. (bo)","bodde","-dde-gruppen: bo – bodde."),
mc("Hvilken setning er riktig?",["I dag spiser jeg fisk.","I dag jeg spiser fisk.","I dag fisk jeg spiser."],"V2: verbet kommer rett etter «I dag»."),
mc("Hvor skal «ikke» stå?",["Jeg liker ikke kaffe.","Jeg ikke liker kaffe.","Ikke jeg liker kaffe."],"I en helsetning står «ikke» rett etter verbet."),
od("Sett ordene i riktig rekkefølge.",["I morgen","reiser","vi","til","Tromsø"],"Tid først, så verbet, så subjektet.",["Vi reiser til Tromsø i morgen"]),
fl("Han ___ norsk og engelsk. (snakke, presens)","snakker","Presens: infinitiv + r.")
]},
{title:"Perfektum og framtid",
intro:`<p><b>Perfektum</b> = <i>har</i> + perfektum partisipp. Brukes om erfaringer og om noe som fortsatt er viktig nå, ofte med <i>aldri, noen gang, i to år</i>.</p>
<table class="t"><tr><th>Infinitiv</th><th>Perfektum</th></tr>
<tr><td>å snakke / å spise / å bo</td><td>har snakket / har spist / har bodd</td></tr>
<tr><td>å gå / å se / å være</td><td>har gått / har sett / har vært</td></tr>
<tr><td>å lese / å skrive / å ha</td><td>har lest / har skrevet / har hatt</td></tr></table>
<p><b>Framtid:</b> <span class="no">Jeg <b>skal</b> reise.</span> (plan) · <span class="no">Det <b>kommer til å</b> regne.</span> (det tror vi skjer) · <span class="no">I morgen <b>reiser</b> jeg.</span> (presens + tidsord)</p>`,
ex:[
fl("Jeg har ___ her i to år. (bo)","bodd","bo – bodde – har bodd."),
mc("Du har aldri besøkt Tromsø. Hva sier du?",["Jeg har aldri vært i Tromsø.","Jeg var aldri i Tromsø.","Jeg har aldri være i Tromsø."],"En erfaring: perfektum, har + vært."),
fl("Har du ___ boka? (lese)","lest","lese – leste – har lest."),
mc("«Det kommer til å regne i morgen.» Hva uttrykker setningen?",["Noe vi tror vil skje","En plan vi har laget","Noe som skjedde i går"],"«Kommer til å» = noe vi tror skjer. «Skal» = en plan."),
fl("Vi ___ reise til Spania i sommer. Vi har kjøpt billetter.","skal","En plan: skal."),
od("Sett ordene i riktig rekkefølge.",["Jeg","har","ikke","spist","frokost"],"«ikke» står etter det første verbet (har)."),
fl("Hun har ___ et brev til kommunen. (skrive)","skrevet","skrive – skrev – har skrevet.")
]},
{title:"Pronomen og eiendomsord",
intro:`<table class="t"><tr><th>Subjekt</th><th>Objekt</th><th>Eiendomsord</th></tr>
<tr><td>jeg</td><td>meg</td><td>min / mi / mitt / mine</td></tr>
<tr><td>du</td><td>deg</td><td>din / di / ditt / dine</td></tr>
<tr><td>han / hun</td><td>ham (han) / henne</td><td>hans / hennes</td></tr>
<tr><td>vi</td><td>oss</td><td>vår / vårt / våre</td></tr>
<tr><td>dere</td><td>dere</td><td>deres</td></tr>
<tr><td>de</td><td>dem</td><td>deres</td></tr></table>
<p>Eiendomsordet står vanligvis <b>etter</b> substantivet, og substantivet har bestemt form: <span class="no">bilen min, kona mi, huset vårt, bøkene mine</span>.</p>`,
ex:[
mc("Kan du hjelpe ___?",["meg","jeg","min"],"Etter verbet bruker vi objektsform: meg."),
mc("Jeg ser ___ hver dag. (de)",["dem","de","deres"],"Objektsform av «de» er «dem»."),
fl("Huset ___ er stort. (vi)","vårt","et hus – huset vårt."),
fl("Dette er bøkene ___. (jeg)","mine","Flertall: mine."),
mc("Hva er riktig?",["bilen min","bil min","bilen mitt"],"Bestemt form + eiendomsord etter. Bil er et en-ord: min."),
fl("Kona ___ heter Anna. (han)","hans","Han har en kone: kona hans."),
mc("Hun ringer ___ i kveld. (du)",["deg","du","din"],"Objektsform: deg.")
]},
{title:"Modalverb, spørsmål og nektelse",
intro:`<p><b>Modalverb</b> (kan, vil, skal, må, bør) + infinitiv <b>uten å</b>: <span class="no">Jeg kan svømme. Du må komme.</span></p>
<p><b>Spørsmål:</b> verbet først (<span class="no">Kommer du?</span>) eller spørreord + verb (<span class="no">Hvor bor du?</span>). Spørreord: hva, hvem, hvor, når, hvorfor, hvordan, hvilken.</p>
<p><b>Nektelse:</b> «ikke» etter verbet: <span class="no">Jeg kan ikke komme.</span></p>
<p><b>Ja – nei – jo:</b> «jo» svarer ja på et spørsmål med «ikke»: <span class="no">Kommer du ikke? – Jo, jeg kommer!</span></p>`,
ex:[
mc("Jeg må ___ i dag.",["jobbe","å jobbe","jobber"],"Etter modalverb: infinitiv uten å."),
mc("___ bor du? – I Bergen.",["Hvor","Hva","Hvem"],"Spør om sted: hvor."),
mc("___ kommer bussen? – Klokka åtte.",["Når","Hvor","Hvorfor"],"Spør om tid: når."),
mc("«Liker du ikke kaffe?» Du liker kaffe. Hva svarer du?",["Jo!","Ja!","Nei!"],"«Jo» svarer ja på et spørsmål med «ikke»."),
od("Lag et spørsmål.",["Kan","du","komme","i morgen"],"I ja/nei-spørsmål står verbet først."),
fl("Vi ___ ikke parkere her. Det er forbudt.",["kan","får","må"],"Kan ikke / får ikke / må ikke = det er ikke lov."),
mc("___ heter du?",["Hva","Hvem","Hvilken"],"Hva heter du?")
]},
{title:"Preposisjoner for sted og tid",
intro:`<p><b>Sted:</b> <span class="no">i Norge, i huset, på jobb, på butikken, på kjøkkenet, under bordet, ved siden av, mellom, foran, bak</span></p>
<p><b>Retning:</b> <span class="no">Jeg reiser <b>til</b> Bergen. Hun kommer <b>fra</b> Iran.</span></p>
<p><b>Tid:</b></p><ul>
<li><span class="no">på mandag</span> (en bestemt dag), <span class="no">i helgen, i sommer, i 2020</span></li>
<li><span class="no">om morgenen</span> = vanligvis om morgenen</li>
<li><span class="no">klokka åtte</span></li>
<li><span class="no">for to år siden</span> (når?) · <span class="no">i to år</span> (hvor lenge?)</li></ul>`,
ex:[
mc("Jeg bor ___ Norge.",["i","på","til"],"Land og byer: i Norge, i Oslo."),
mc("Hun er ___ jobb nå.",["på","i","til"],"Fast uttrykk: på jobb."),
mc("Vi trener ___ morgenen.",["om","på","i"],"«om morgenen» = hver morgen, vanligvis."),
fl("Jeg kom til Norge ___ tre år siden.","for","for … siden = hvor lenge siden."),
fl("Toget går fra Oslo ___ Bergen.","til","Retning: til."),
mcp(scene("inne","🪑 50 30 34; 🐈 50 50 14"),"Hvor er katten?",["Under stolen","På stolen","Bak døra"],"Katten sitter under stolen."),
mc("Jeg har bodd her ___ fem år.",["i","for","på"],"Hvor lenge: i fem år.")
]}
],
ord:[
{title:"Mat og drikke",
intro:`<p>Lær ordene med artikkel. Da husker du kjønnet.</p>
<ul class="vocab"><li>🍞 et brød</li><li>🧀 en ost</li><li>🥛 ei/en melk</li><li>🍎 et eple</li><li>🥔 en potet</li><li>🐟 en fisk</li><li>🥚 et egg</li><li>🍌 en banan</li><li>🥕 ei/en gulrot</li><li>☕ en kaffe</li></ul>
<p>Nyttige ord: <span class="no">pålegg</span> (det du har på brødskiva), <span class="no">middag, frokost, lunsj, kveldsmat</span>.</p>`,
ex:[
pn("🍞",["et brød"],"et brød – brødet – brød – brødene."),
pn("🧀",["en ost"],"en ost – osten."),
pn("🥔",["en potet"],"en potet – poteten – poteter."),
pn("🥚",["et egg"],"et egg – egget – egg – eggene."),
pn("🐟",["en fisk"],"en fisk – fisken – fisker."),
pn("🥕",["ei gulrot","en gulrot"],"ei/en gulrot – gulrota/gulroten – gulrøtter."),
mc("Hvilket ord passer ikke?",["en stol","et eple","en banan","en potet"],"En stol er ikke mat.")
]},
{title:"Hjemmet",
intro:`<ul class="vocab"><li>🛏️ ei/en seng</li><li>🛋️ en sofa</li><li>🪑 en stol</li><li>🚪 ei/en dør</li><li>🪟 et vindu</li><li>🚿 en dusj</li><li>🛁 et badekar</li><li>🧺 en vaskemaskin</li></ul>
<p>Rom: <span class="no">kjøkkenet, stua, soverommet, badet, gangen</span>. Vi sier <b>på</b>: <span class="no">på kjøkkenet, på badet</span>, men <b>i</b> stua.</p>`,
ex:[
pn("🛏️",["ei seng","en seng"],"ei/en seng – senga/sengen."),
pn("🛋️",["en sofa"],"en sofa – sofaen."),
pn("🚪",["ei dør","en dør"],"ei/en dør – døra/døren."),
pn("🪟",["et vindu"],"et vindu – vinduet – vinduer."),
mc("Hvor sover du?",["På soverommet","På kjøkkenet","I gangen"],""),
mc("Hvor lager du mat?",["På kjøkkenet","På badet","På soverommet"],""),
mc("Hvor ser familien på TV?",["I stua","På badet","I kjelleren"],"Stua er rommet der vi sitter og slapper av.")
]},
{title:"Kropp, helse og klær",
intro:`<ul class="vocab"><li>👂 et øre</li><li>👁️ et øye (øyne)</li><li>🦶 en fot (føtter)</li><li>✋ ei/en hånd (hender)</li><li>🦷 ei/en tann (tenner)</li><li>👖 ei/en bukse</li><li>🧦 en sokk</li><li>🧥 ei/en jakke</li><li>👟 en sko</li><li>🧣 et skjerf</li></ul>
<p><span class="no">Jeg har vondt i …</span> + kroppsdel i bestemt form: <span class="no">Jeg har vondt i hodet / i magen / i tanna.</span></p>`,
ex:[
pn("👂",["et øre"],"et øre – øret – ører."),
pn("🦶",["en fot"],"en fot – foten – føtter – føttene."),
pn("👖",["ei bukse","en bukse"],"ei/en bukse – buksa/buksen."),
pn("🧦",["en sokk"],"en sokk – sokken – sokker."),
pn("🧥",["ei jakke","en jakke"],"ei/en jakke – jakka/jakken."),
mc("Hva er flertall av «en fot»?",["føtter","foter","fotene"],"Uregelmessig: en fot – føtter."),
mcp("🦷","Hva sier du til tannlegen?",["Jeg har vondt i tanna.","Jeg har vondt i foten.","Jeg har vondt i øret."],"ei/en tann – tanna/tannen.")
]}
],
uttale:[
{title:"Kj, sj og stumme bokstaver",
intro:`<p><b>Kj-lyden</b> (mykt, som i tysk «ich»): kj, og k foran i / y / ei / øy: <span class="no">kjøre, kino, kylling</span>.</p>
<p><b>Sj-lyden</b>: sj, skj, og sk foran i / y / ei / øy: <span class="no">sjø, skje, ski, sky</span>.</p>
<p><b>Stumme bokstaver:</b></p><ul>
<li><b>hv-</b> uttales v: <span class="no">hva, hvor</span></li>
<li><b>hj- / gj-</b> uttales j: <span class="no">hjem, gjøre</span></li>
<li><b>-d</b> etter vokal er ofte stum: <span class="no">god, glad, ved</span></li>
<li><b>-ig</b>: g-en er stum: <span class="no">hyggelig, viktig</span></li>
<li><span class="no">jeg</span> uttales «jæi», <span class="no">meg / deg</span> «mæi / dæi»</li></ul>`,
ex:[
mc("Hvilket ord begynner med sj-lyden?",["ski","kake","kopp"],"sk foran i gir sj-lyd."),
mc("Hvordan uttaler du «hvor»?",["Som «vor», h-en er stum","Med tydelig h","Som «for»"],"hv- = v. Det samme i hva, hvem, hvorfor."),
mc("I «hyggelig» er den siste g-en …",["stum","hard, som i «gå»","som j"],"-ig: g-en er stum: hyggelig, viktig, deilig."),
ls("ski",["ski","si","sky"],"«ski» begynner med sj-lyden."),
ls("kino",["kino","Kina","kone"],"kino og Kina begynner begge med kj-lyd."),
sp("Skal vi kjøre til sjøen?","Myk kj i «kjøre», sj-lyd i «sjøen»."),
sp("Hyggelig å hilse på deg.","Stum g i «hyggelig», «dæi» for «deg».")
]},
{title:"Lange og korte vokaler",
intro:`<p>En vokal med trykk er enten lang eller kort. Det kan endre betydningen.</p>
<table class="t"><tr><th>Kort (dobbel konsonant)</th><th>Lang</th></tr>
<tr><td>takk</td><td>tak</td></tr><tr><td>hatt</td><td>hat</td></tr><tr><td>vann</td><td>van</td></tr></table>
<p>Lang <b>o</b> ligner på engelsk «oo» (<span class="no">bok, sol</span>). <b>u</b> uttales med runde, stramme lepper (<span class="no">hus</span>).</p>`,
ex:[
mc("Hvilket ord har kort vokal?",["takk","tak","tal"],"Dobbel konsonant etter vokalen gir kort vokal."),
ls("takk",["takk","tak"],"takk: kort a."),
ls("hus",["hus","hos"],"hus og hos har ulike vokaler."),
ls("vann",["vann","van"],"vann: kort a."),
mc("Hvordan uttales «o» i «bok»?",["Som «oo» i engelsk «food»","Som «o» i engelsk «hot»","Som «å»"],"Lang norsk o ligner på engelsk «oo»."),
dk("Tusen takk for maten.","Kort a i «takk», lang a i «maten»."),
sp("Det er fint vær i dag.","Lang æ i «vær».")
]},
{title:"Vokalene y, u, æ, ø og å",
intro:`<ul>
<li><b>y</b>: si «i», og rund leppene: <span class="no">by, sy, ny</span></li>
<li><b>u</b>: runde lepper, tunga fram: <span class="no">hus, ut, du</span></li>
<li><b>æ</b>: åpen e-lyd: <span class="no">være, bær, lære</span></li>
<li><b>ø</b>: si «e», og rund leppene: <span class="no">øl, høre, søt</span></li>
<li><b>å</b>: som «o» i engelsk «more»: <span class="no">gå, år, båt</span></li></ul>`,
ex:[
ls("by",["by","bi","bu"],"by: rund leppene på i-lyden."),
ls("øl",["øl","ål","el"],"øl: e-lyd med runde lepper."),
ls("bær",["bær","ber","bor"],"bær: åpen æ."),
ls("syr",["syr","sier","sur"],"y er en i med runde lepper."),
mc("Hvilket ord har samme vokal som «gå»?",["båt","bok","by"],"Begge har å-lyd."),
dk("Jeg bor i en by ved sjøen.","Hør etter y i «by» og ø i «sjøen»."),
sp("Nå må vi gå hjem før det blir mørkt.","Øv på å i «nå, må, gå» og ø i «før, mørkt».")
]}
],
lese:[
{title:"En helg på hytta",
text:`Forrige helg dro familien Hansen på hytta. Hytta ligger ved et vann, to timer fra Lillehammer. Det er ikke strøm der, så de brukte stearinlys og fyrte i peisen. På lørdag gikk de på ski, og på søndag fisket de på isen. Det var kaldt, minus femten grader, men alle syntes det var veldig koselig. Søndag kveld kjørte de hjem igjen. Det var mye trafikk, og de kom ikke hjem før klokka ti.`,
intro:`<p>Les teksten. Prøv å forstå helheten før du sjekker enkeltord. Teksten vises mens du svarer.</p><p>Nyttige ord: <span class="no">strøm</span> (elektrisitet), <span class="no">peis</span> (åpen ild inne), <span class="no">ikke … før</span> (først klokka …).</p>`,
ex:[
mc("Hvor ligger hytta?",["Ved et vann","Ved havet","Midt i Lillehammer"],"«Hytta ligger ved et vann.»"),
mc("Hvorfor brukte de stearinlys?",["Det er ikke strøm på hytta","Det var jul","Lampene var ødelagte"],"«Det er ikke strøm der.»"),
tf("Familien fisket på lørdag.",false,"De gikk på ski på lørdag og fisket på søndag."),
fl("Alle syntes det var veldig ___.","koselig","«Koselig» er et viktig norsk ord."),
mc("Når kom de hjem?",["Klokka ti","Klokka to","På mandag"],"«De kom ikke hjem før klokka ti.»"),
tf("Det var varmt på hytta.",false,"Det var minus femten grader.")
]},
{title:"Melding fra barnehagen",
text:`Hei alle foreldre!
Fredag 14. februar har vi karneval i barnehagen. Barna kan gjerne komme utkledd, men husk varme klær under kostymet, for vi skal være ute etter lunsj. På formiddagen baker vi boller sammen. Barnehagen stenger klokka 15 denne dagen på grunn av planleggingsmøte for de ansatte.
Hilsen Solsikken barnehage`,
intro:`<p>En typisk melding som foreldre får i Norge.</p><p>Nyttige ord: <span class="no">utkledd</span> (i kostyme), <span class="no">på grunn av</span> (fordi det er), <span class="no">de ansatte</span> (de som jobber der).</p>`,
ex:[
mc("Hva skjer på fredag?",["Karneval i barnehagen","Foreldremøte","Kinotur"],"«Fredag 14. februar har vi karneval.»"),
mc("Hvorfor trenger barna varme klær?",["De skal være ute etter lunsj","Det er kaldt inne","De skal gå på ski"],"«vi skal være ute etter lunsj»"),
mc("Hva skal de bake?",["Boller","Pizza","Brød"],""),
fl("Barnehagen stenger klokka ___ denne dagen.","15",""),
tf("Barnehagen stenger tidlig fordi det er ferie.",false,"Det er planleggingsmøte for de ansatte.")
]},
{title:"Leilighet til leie",
text:`Leilighet til leie i Trondheim
Lys og fin toroms leilighet på 55 kvadratmeter i tredje etasje. Leiligheten har stue med åpen kjøkkenløsning, ett soverom, bad med dusj og en liten balkong. Det er fem minutter å gå til bussen og ti minutter til sentrum.
Husleie: 11 500 kroner per måned. Strøm og internett er ikke inkludert. Depositum: tre måneders husleie.
Ingen husdyr. Ledig fra 1. august.
Ring Kari på 912 34 567 eller send en melding.`,
intro:`<p>En boligannonse. Nyttige ord: <span class="no">toroms</span> (stue + ett soverom), <span class="no">husleie</span> (det du betaler hver måned), <span class="no">depositum</span> (penger du betaler først og får tilbake), <span class="no">husdyr</span> (dyr som bor hjemme).</p>`,
ex:[
tf("Leiligheten har to soverom.",false,"Toroms = stue og ett soverom."),
mc("Hva må du betale i tillegg til husleia?",["Strøm og internett","Ingenting","Parkering"],"«Strøm og internett er ikke inkludert.»"),
fl("Leiligheten er ledig fra 1. ___.","august",""),
tf("Du kan ha hund i leiligheten.",false,"«Ingen husdyr.»"),
mc("Hvor lang tid tar det å gå til bussen?",["Fem minutter","Ti minutter","Tre minutter"],""),
mc("Hvor mye er depositumet?",["34 500 kroner","11 500 kroner","3 000 kroner"],"Tre måneders husleie: 3 × 11 500.")
]}
],
snakke:[
{title:"I butikken og på kafé",
intro:`<p>Norsk har ikke ett ord for «please». Vi er høflige med <b>Kan jeg få …?</b>, <b>takk</b> og en vennlig tone.</p>
<p>Slik øver du: lytt, si setningen høyt, og trykk på mikrofonen for å sjekke uttalen. Fungerer ikke mikrofonen, vurderer du deg selv.</p>`,
ex:[
sp("Kan jeg få en kaffe, takk?","«Kan jeg få» er den høflige måten å bestille på."),
sp("Hvor mye koster det?","hv = v: «vor mye»."),
sp("Kan jeg betale med kort?",""),
sp("Har dere noe uten gluten?",""),
mc("Kassereren spør: «Trenger du pose?» Hva svarer du?",["Ja takk, én pose.","Ja, jeg er pose.","Nei, jeg har det bra."],"En pose = en bærepose."),
mc("«Vil du ha kvitteringen?» betyr …",["Vil du ha papiret som viser hva du har betalt?","Vil du ha rabatt?","Vil du ha en pose?"],"")
]},
{title:"Veien og legen",
intro:`<ul><li><span class="no">til venstre / til høyre / rett fram</span></li><li><span class="no">ved lyskrysset, ved rundkjøringen</span></li><li><span class="no">bestille time</span> = avtale tid hos legen</li><li><span class="no">Jeg har vondt i …</span></li></ul>`,
ex:[
sp("Unnskyld, hvordan kommer jeg til jernbanestasjonen?","«Unnskyld» åpner nesten alle spørsmål til fremmede."),
sp("Gå rett fram og ta til venstre ved lyskrysset.",""),
sp("Jeg vil gjerne bestille time hos legen.","«vil gjerne» er en høflig måte å si «vil» på."),
sp("Jeg har hatt vondt i hodet i tre dager.",""),
mcp("➡️","Hva betyr pila?",["Ta til høyre","Ta til venstre","Gå rett fram"],""),
mc("Hvordan sier du at ryggen gjør vondt?",["Jeg har vondt i ryggen.","Jeg er vondt i ryggen.","Ryggen min har vondt."],"Mønsteret er: Jeg har vondt i + kroppsdel.")
]},
{title:"Om meg selv",
intro:`<p>Du blir ofte spurt om disse tingene: navn, hvor du kommer fra, hvor lenge du har bodd i Norge, familie, jobb og fritid.</p>
<ul><li><span class="no">Hva driver du med?</span> = Hva jobber du med / hva gjør du?</li><li><span class="no">Hvor lenge har du bodd i Norge?</span> – <span class="no">I to år.</span></li></ul>`,
ex:[
sp("Jeg heter Sara, og jeg kommer fra Spania.",""),
sp("Jeg har bodd i Norge i to år.","«i to år» = hvor lenge."),
sp("Jeg har to barn og en hund.",""),
sp("På fritiden liker jeg å gå tur og lage mat.","Husk «å» etter «liker»."),
mc("Noen spør: «Hva driver du med?» Hva vil de vite?",["Hva du jobber med eller gjør","Hvor du bor","Hvor gammel du er"],""),
mc("«Hvor lenge har du bodd i Norge?» Hva svarer du?",["I tre år.","For tre år siden.","Om tre år."],"Hvor lenge? I tre år.")
]}
],
skrive:[
{title:"En melding om helgen",
intro:`<p>Skriv en melding til en venn om forrige helg. Bruk <b>preteritum</b> og husk <b>V2</b> når du begynner med et tidsord.</p>
<p>Oppbygning: hilsen → hva du gjorde → hvordan det var → avslutning (<span class="no">Snakkes! / Hilsen …</span>).</p>`,
ex:[
fl("Jeg ___ en ny jakke i går. (kjøpe)","kjøpte","kjøpe – kjøpte."),
od("Sett ordene i riktig rekkefølge.",["På lørdag","gikk","vi","til","Fløyen"],"Tid først, verbet på plass 2.",["Vi gikk til Fløyen på lørdag"]),
mc("Hvilken setning er riktig?",["Etter middag så vi en film.","Etter middag vi så en film.","Etter middag så en film vi."],"V2: verbet på plass 2."),
wr("Skriv 5–7 setninger til en venn om hva du gjorde i helgen.",40,[["i helgen","helg"],["dro / reiste","dro|reiste"],["var","var"],["gikk","gikk"],["spiste","spiste|drakk"]],
`Hei Marte!
Hvordan har du det? I helgen dro jeg til Bergen med en venn. Vi tok toget fra Oslo, og turen var veldig fin. På lørdag gikk vi opp på Fløyen. Det regnet litt, men utsikten var flott. Om kvelden spiste vi fiskesuppe på en restaurant. På søndag var jeg sliten, så jeg slappet av hjemme.
Snakkes snart!
Hilsen Sam`)
]},
{title:"En invitasjon",
intro:`<p>Skriv en invitasjon til bursdagen din. Ta med <b>hva, når og hvor</b>, og be gjestene svare.</p>
<ul><li><span class="no">Jeg inviterer deg til …</span></li><li><span class="no">Festen begynner klokka 19.</span></li><li><span class="no">Gi beskjed innen fredag om du kan komme.</span></li></ul>`,
ex:[
fl("Festen begynner ___ 19.",["klokka","kl.","klokken","kl"],"klokka / kl. + tid."),
mc("Hvordan ber du om svar på en hyggelig måte?",["Gi beskjed om du kan komme!","Du må komme.","Svar nå."],"Gi beskjed = si fra."),
mc("Hva betyr «Ta med drikke selv»?",["Gjestene tar med sin egen drikke","Drikke er inkludert","Det er ikke lov med drikke"],"Vanlig på norske fester."),
wr("Skriv en invitasjon til bursdagsfesten din: dag, tid, sted, hva dere skal gjøre, og be om svar.",35,[["inviterer","inviter"],["dag","mandag|tirsdag|onsdag|torsdag|fredag|lørdag|søndag"],["klokka","klokka|kl"],["beskjed","beskjed|svar"]],
`Hei alle sammen!
Jeg fyller 30 år og inviterer dere til fest lørdag 12. april. Festen begynner klokka 19 hjemme hos meg i Kirkegata 5. Vi skal spise taco og spille spill, og kanskje danse litt. Ta gjerne med drikke selv.
Gi beskjed innen onsdag om du kan komme!
Hilsen Amir`)
]},
{title:"Bildeoppgave: Frokost hjemme",
intro:`<p>Se på bildet og skriv hva du ser. Bruk <span class="no">Det er …, Jeg ser …, … sitter / spiser / drikker …</span></p><p>Nettstedet sjekker teksten din: hvilke ting du nevner, ordstilling, kjønn og vanlige feil.</p>`,
ex:[
mcp(scene("inne","🪟 82 12 14; ☀️ 86 9 7; 👨 22 22 15; 👩 42 22 15; 👧 62 24 13; 🍞 30 44 8; 🧀 40 44 8; 🥛 52 43 8; ☕ 63 43 8; 🐈 86 50 11"),"Hvem er på bildet?",["En familie","En lærer og elever","To venner på kafé"],""),
pn("☕",["en kaffe","en kopp","en kopp kaffe","kaffe"],"en kopp kaffe."),
pw(scene("inne","🪟 82 12 14; ☀️ 86 9 7; 👨 22 22 15; 👩 42 22 15; 👧 62 24 13; 🍞 30 44 8; 🧀 40 44 8; 🥛 52 43 8; ☕ 63 43 8; 🐈 86 50 11"),"Beskriv bildet. Hvem er det? Hva gjør de? Hva står på bordet?",40,
[["familie","familie|mann|far|pappa|kvinne|mor|mamma|jente|datter|barn"],["frokost","frokost|spis|spiser"],["brød","brød"],["ost","ost"],["melk","melk"],["kaffe","kaffe|kopp"],["katt","katt"],["sola","sol|vær|vindu"]],
`På bildet ser jeg en familie som spiser frokost. Det er en mann, en kvinne og en liten jente. De sitter ved bordet på kjøkkenet. På bordet er det brød, ost, melk og en kopp kaffe. Jenta drikker melk, og moren drikker kaffe. En katt sitter på gulvet. Sola skinner gjennom vinduet, så det er fint vær i dag.`)
]}
],
kultur:[
{title:"Hverdagen i Norge",
intro:`<ul>
<li><b>Matpakke</b>: brødskiver med pålegg som mange tar med til jobb og skole.</li>
<li><b>Brunost</b>: søt, brun ost, på brød eller vafler.</li>
<li><b>Vinmonopolet</b>: statens butikk for vin og brennevin. Butikkene selger bare øl, og ikke sent på kvelden.</li>
<li>De fleste butikker er <b>stengt på søndag</b>.</li>
<li><b>Takk for sist</b> sier du når du møter noen du har vært sammen med før.</li></ul>`,
ex:[
mc("Hva er en matpakke?",["Brødskiver man tar med til jobb eller skole","Mat man kjøper på restaurant","En pose med dagligvarer"],""),
mc("Hvor kjøper du en flaske vin?",["På Vinmonopolet","I alle matbutikker","På kiosken"],"Vin og brennevin selges bare på Vinmonopolet."),
mc("Du vil handle mat på søndag. Hva skjer vanligvis?",["De fleste butikker er stengt","Alt er åpent som vanlig","Butikkene åpner klokka tolv"],"Bare noen små butikker får holde åpent."),
mc("Når sier du «Takk for sist»?",["Når du møter noen igjen etter forrige gang","Når du går fra en fest","Når du får en gave"],""),
tf("Brunost er en søt ost.",true,"Prøv den på nystekte vafler.")
]},
{title:"Høytider og årstider",
intro:`<ul><li><b>17. mai</b>: grunnlovsdagen. Barnetog, flagg, bunad og is.</li>
<li><b>Påske</b>: mange drar til fjells, går på ski, spiser appelsiner og leser krim (<i>påskekrim</i>).</li>
<li><b>Sankthans</b> (23. juni): bål på midtsommeraften.</li>
<li><b>Fellesferie</b>: i juli tar mange ferie samtidig.</li>
<li><b>Jul</b>: den store feiringen er på julaften, 24. desember.</li></ul>`,
ex:[
mc("Hva feirer vi 17. mai?",["Grunnlovsdagen","Jul","Midtsommer"],"Vi feirer grunnloven fra 1814."),
mc("Når åpner nordmenn julegavene?",["På kvelden 24. desember","Om morgenen 25. desember","6. januar"],"Julaften er den viktigste dagen."),
mc("Hva er «påskekrim»?",["Krimbøker og krimserier i påsken","En påskedessert","Et skirenn"],""),
tf("I juli tar mange nordmenn ferie samtidig.",true,"Det kalles fellesferie."),
mc("Hva skjer på sankthansaften?",["Folk tenner bål","Det er fyrverkeri ved midnatt","Det er barnetog"],"23. juni.")
]},
{title:"Måltider",
intro:`<table class="t"><tr><th>Måltid</th><th>Når</th><th>Hva</th></tr>
<tr><td>frokost</td><td>kl. 7–8</td><td>brødskiver med pålegg, kaffe</td></tr>
<tr><td>lunsj</td><td>kl. 11–12</td><td>matpakke</td></tr>
<tr><td>middag</td><td>kl. 16–18</td><td>varm mat</td></tr>
<tr><td>kveldsmat</td><td>kl. 20–21</td><td>brødskiver, knekkebrød</td></tr></table>
<p>Mange familier spiser <b>taco på fredag</b>. Etter maten sier du <span class="no">Takk for maten</span>, og verten svarer <span class="no">Velbekomme</span>.</p>`,
ex:[
mc("Når spiser mange nordmenn middag?",["Mellom 16 og 18","Klokka 21","Klokka 12"],""),
mc("Hva er pålegg?",["Det du legger på brødskiva","En varm rett","En dessert"],"Ost, skinke og syltetøy er pålegg."),
tf("Mange familier spiser taco på fredager.",true,"«Fredagstaco» er en kjent tradisjon."),
mc("Noen sier «Takk for maten». Hva svarer du?",["Velbekomme!","Vær så god!","Unnskyld!"],""),
mc("Hva er kveldsmat?",["Et lett måltid om kvelden, ofte brødskiver","Middag på restaurant","Lunsj på jobb"],"")
]}
]
};
