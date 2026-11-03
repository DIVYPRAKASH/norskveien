// B2 – Høyere mellomnivå
COURSE.B2={
gram:[
{title:"Passiv",
intro:`<p><b>Bli-passiv</b> om enkelthendelser: <span class="no">Huset <b>ble bygd</b> i 1920.</span> <span class="no">Sykkelen <b>ble stjålet</b>.</span></p>
<p><b>S-passiv</b> etter modalverb og om regler: <span class="no">Billetter <b>må kjøpes</b> på forhånd.</span> <span class="no">Her <b>selges</b> fisk.</span></p>
<p>Perfektum: <span class="no">Det <b>har blitt</b> sagt at …</span></p>
<p>Hvem som gjør noe, kan nevnes med <b>av</b>: <span class="no">Boka ble skrevet av Ibsen.</span></p>`,
ex:[
mc("Skriv om: «Noen stjal sykkelen min.»",["Sykkelen min ble stjålet.","Sykkelen min stjal.","Sykkelen min har stjele."],"bli + perfektum partisipp."),
fl("Søknaden må ___ innen fredag. (sende, s-passiv)","sendes","Etter «må»: s-passiv."),
fl("Det har ___ sagt mye om saken.","blitt","har + blitt + partisipp."),
mc("Hvilket skilt er riktig?",["Hunder må holdes i bånd.","Hunder må holde i bånd.","Hunder blir holde i bånd."],"Regler: s-passiv."),
od("Sett ordene i riktig rekkefølge.",["Huset","ble","bygd","i","1920"],"bli-passiv om en enkelthendelse.",["I 1920 ble huset bygd"]),
fl("«Et dukkehjem» ble skrevet ___ Henrik Ibsen.","av","Den som gjør handlingen: av."),
mc("Her ___ norsk og engelsk. (snakke)",["snakkes","snakker","blir snakk"],"Generelt: s-passiv i presens.")
]},
{title:"Bindeord",
intro:`<table class="t"><tr><th>Betydning</th><th>Bindeord</th><th>Ordstilling etter</th></tr>
<tr><td>årsak</td><td>fordi, ettersom, siden</td><td>leddsetning (ikke foran verbet)</td></tr>
<tr><td>årsak + substantiv</td><td>på grunn av</td><td>—</td></tr>
<tr><td>innrømmelse</td><td>selv om</td><td>leddsetning</td></tr>
<tr><td>følge</td><td>derfor</td><td>inversjon: <i>Derfor <b>gikk</b> vi</i></td></tr>
<tr><td>motsetning</td><td>likevel, derimot</td><td>inversjon / adverb</td></tr>
<tr><td>tillegg</td><td>dessuten, i tillegg</td><td>inversjon</td></tr></table>`,
ex:[
fl("Det regnet hele dagen. ___ ble vi hjemme.","Derfor","Derfor + verb + subjekt."),
mc("Det regnet hele dagen. ___ gikk vi på tur.",["Likevel","Derfor","Fordi"],"Et overraskende resultat: likevel."),
mc("Toget var forsinket ___ snøen.",["på grunn av","fordi","selv om"],"Foran et substantiv: på grunn av."),
mc("Hva er riktig?",["Selv om han ikke har tid, hjelper han oss.","Selv om han har ikke tid, han hjelper oss.","Selv om han ikke har tid, han hjelper oss."],"Leddsetning først, så V2 i helsetningen."),
fl("Leiligheten er stor. ___ ligger den sentralt.","Dessuten","Dessuten legger til et nytt argument."),
od("Sett ordene i riktig rekkefølge.",["Derfor","tok","vi","bussen"],"Inversjon etter «derfor»."),
mc("___ prisene har steget, handler folk mindre.",["Ettersom","Derfor","Likevel"],"«Ettersom» = fordi.")
]},
{title:"Indirekte tale",
intro:`<p>Når du forteller hva noen sa, bruker du ofte <b>at</b> og flytter verbet ett steg tilbake i tid:</p>
<table class="t"><tr><th>Direkte</th><th>Indirekte</th></tr>
<tr><td>«Jeg <b>er</b> sliten», sa hun.</td><td>Hun sa at hun <b>var</b> sliten.</td></tr>
<tr><td>«Vi <b>har</b> solgt huset.»</td><td>De sa at de <b>hadde</b> solgt huset.</td></tr>
<tr><td>«Jeg <b>skal</b> reise.»</td><td>Han sa at han <b>skulle</b> reise.</td></tr>
<tr><td>«Kommer du?»</td><td>Hun spurte <b>om</b> jeg kom.</td></tr>
<tr><td>«Hvor bor du?»</td><td>Han spurte <b>hvor</b> jeg bodde.</td></tr></table>
<p>Indirekte spørsmål har leddsetningsordstilling: <span class="no">Hun spurte hvorfor jeg <b>ikke kom</b>.</span></p>`,
ex:[
mc("«Jeg er syk», sa Per. → Per sa at han ___ syk.",["var","er","har vært"],""),
mc("«Kommer du i morgen?» spurte hun. → Hun spurte ___ jeg kom dagen etter.",["om","at","hvis"],"Ja/nei-spørsmål: om."),
fl("«Jeg skal reise», sa han. → Han sa at han ___ reise.","skulle","skal → skulle."),
mc("«Hvorfor kommer du ikke?» → Hun spurte hvorfor jeg …",["ikke kom","kom ikke","ikke komme"],"Leddsetning: ikke foran verbet."),
fl("«Vi har solgt huset», sa de. → De sa at de ___ solgt huset.","hadde","har → hadde."),
mc("«Hvor jobber du?» → Han spurte hvor jeg …",["jobbet","jobber du","jobbet jeg"],"Ingen inversjon i indirekte spørsmål.")
]},
{title:"Hypotetiske setninger og høflighet",
intro:`<p><b>Noe som ikke er virkelig nå:</b> <span class="no">Hvis jeg <b>hadde</b> mer tid, <b>ville</b> jeg lære fransk.</span></p>
<p><b>Noe som ikke skjedde:</b> <span class="no">Hvis jeg <b>hadde visst</b> det, <b>ville</b> jeg <b>ha kommet</b>.</span></p>
<p><b>Høflighet:</b> <span class="no">Jeg <b>skulle gjerne hatt</b> et glass vann. <b>Kunne</b> du hjelpe meg?</span></p>`,
ex:[
mc("Hvis jeg ___ mer tid, ville jeg lære fransk.",["hadde","har","skulle"],""),
fl("Hvis det ikke hadde regnet, ___ vi ha gått på tur.","ville",""),
mc("Hvilken setning er mest høflig?",["Kunne du hjelpe meg med dette?","Hjelp meg med dette.","Du må hjelpe meg."],""),
mc("«Hvis jeg hadde visst det, ville jeg ha ringt.» Ringte personen?",["Nei","Ja","Vi vet ikke"],"Det var noe som ikke skjedde."),
fl("Jeg ___ gjerne hatt et glass vann.","skulle","Et høflig ønske."),
od("Sett ordene i riktig rekkefølge.",["Hvis","jeg","var","deg,","ville","jeg","takket","ja"],"Leddsetning først, så verbet «ville».")
]},
{title:"Formell stil",
intro:`<p>I formelle tekster gjør vi ofte verb om til <b>substantiv</b>:</p>
<table class="t"><tr><th>Verb</th><th>Substantiv</th></tr>
<tr><td>å øke / å redusere</td><td>en økning / en reduksjon</td></tr><tr><td>å utvikle / å bestemme</td><td>en utvikling / en bestemmelse</td></tr><tr><td>å delta</td><td>en deltakelse</td></tr></table>
<p><span class="no">Prisene økte kraftig.</span> → <span class="no">Det var en kraftig økning i prisene.</span></p>
<p>Formelle ord: <span class="no">imidlertid</span> (men), <span class="no">følgelig</span> (derfor), <span class="no">ifølge</span> (etter det som står i), <span class="no">angående</span> (om).</p>`,
ex:[
fl("å øke → en ___","økning",""),
fl("å utvikle → en ___","utvikling",""),
mc("Mer formelt: «Men mange er uenige.»",["Mange er imidlertid uenige.","Men mange er liksom uenige.","Mange er uenige, da."],""),
mc("«Ifølge rapporten …» betyr …",["Det rapporten sier, er …","Mot rapporten …","Før rapporten …"],""),
fl("å delta → en ___",["deltakelse","deltagelse"],""),
mc("Hvilken setning passer i en rapport?",["Det har vært en betydelig nedgang i antall besøkende.","Folk kommer mye mindre nå, liksom.","Det er jo ingen som kommer lenger."],"")
]},
{title:"Faste uttrykk",
intro:`<ul><li><span class="no">Det er ugler i mosen.</span> = Noe mistenkelig foregår.</li>
<li><span class="no">å legge seg flat</span> = å innrømme feil og be om unnskyldning</li>
<li><span class="no">å ta seg vann over hodet</span> = å påta seg mer enn man klarer</li>
<li><span class="no">å slå to fluer i én smekk</span> = å oppnå to ting med én handling</li>
<li><span class="no">å skjære alle over én kam</span> = å behandle alle likt uten å se forskjeller</li>
<li><span class="no">rett fra levra</span> = å si det man mener, helt ærlig</li>
<li><span class="no">Nå er det hipp som happ.</span> = Det spiller ingen rolle.</li></ul>`,
ex:[
mc("«Det er ugler i mosen.» betyr …",["Noe mistenkelig foregår","Det er mye fugl i skogen","Det blir regn"],""),
mc("Etter skandalen la direktøren seg flat. Hva gjorde han?",["Han innrømmet feil og ba om unnskyldning","Han la seg ned for å hvile","Han nektet for alt"],""),
mc("Hun tok jobb, studier og to verv samtidig. Hun har …",["tatt seg vann over hodet","slått to fluer i én smekk","lagt seg flat"],""),
mc("Jeg sykler til jobben og trener samtidig. Jeg slår to fluer i …",["én smekk","ett slag","én hånd"],""),
mc("«Ikke skjær alle over én kam!» betyr …",["Ikke generaliser om alle","Ikke klipp håret","Ikke del ut alt"],""),
mc("«Han snakket rett fra levra.» Han …",["var helt ærlig","var syk","snakket utydelig"],"")
]},
{title:"Setningsadverb og småord",
intro:`<p><b>Setningsadverb</b> (ikke, aldri, alltid, ofte, kanskje, dessverre) står etter det første verbet i helsetninger, og foran verbet i leddsetninger.</p>
<p><b>Småord</b> gir nyanser:</p><ul>
<li><b>jo</b>: noe vi begge vet: <span class="no">Det er jo kaldt.</span></li>
<li><b>vel</b>: jeg antar: <span class="no">Du kommer vel?</span></li>
<li><b>nok</b>: sannsynligvis: <span class="no">Han kommer nok snart.</span></li>
<li><b>da</b>: myker opp: <span class="no">Kom igjen, da!</span></li></ul>`,
ex:[
mc("«Det er jo kaldt ute.» «jo» viser at …",["dette vet vi begge","det er overraskende","det er et spørsmål"],""),
mc("«Han kommer nok snart.» betyr …",["Han kommer sannsynligvis snart.","Han kommer sikkert ikke.","Han kom i går."],""),
mc("«Du kommer vel i morgen?» betyr …",["Jeg regner med at du kommer, men vil ha det bekreftet.","Jeg vet at du ikke kommer.","Jeg bryr meg ikke."],""),
mc("Riktig ordstilling:",["Jeg vet at hun alltid kommer for sent.","Jeg vet at hun kommer alltid for sent.","Jeg vet at alltid hun kommer for sent."],"Leddsetning: adverb foran verbet."),
mc("Riktig ordstilling:",["I dag har jeg dessverre ikke tid.","I dag jeg har dessverre ikke tid.","I dag har ikke jeg dessverre tid."],"V2, så subjekt, så adverb."),
fl("Kom igjen, ___! (myker opp)","da","")
]}
],
ord:[
{title:"Samfunn og politikk",
intro:`<ul class="vocab"><li>🗳️ et valg</li><li>🏛️ Stortinget</li><li>⚖️ en domstol</li><li>📰 ei/en avis</li><li>💰 en skatt</li><li>🏥 et sykehus</li></ul>
<p><span class="no">regjeringen, statsministeren, opposisjonen, kommunen, fylket, velferdsstaten, et parti, en lov</span></p>`,
ex:[
mcp("🗳️","Hva skjer her?",["Et valg","En konsert","En rettssak"],""),
mc("Hva heter nasjonalforsamlingen i Norge?",["Stortinget","Riksdagen","Folketinget"],"Riksdagen er i Sverige, Folketinget i Danmark."),
mc("Hvem leder regjeringen?",["Statsministeren","Kongen","Stortingspresidenten"],""),
fl("Pengene vi betaler til staten av lønna, heter ___.","skatt",""),
mc("«Velferdsstaten» betyr at …",["staten sørger for helse, skole og trygd","staten eier alle bedrifter","det ikke finnes skatt"],""),
mcp("⚖️","Hva symboliserer dette?",["Rettsvesenet","Helsevesenet","Skolen"],"")
]},
{title:"Følelser og egenskaper",
intro:`<ul class="vocab"><li>😊 glad</li><li>😢 lei seg</li><li>😠 sint</li><li>😨 redd</li><li>😴 trøtt</li><li>😮 overrasket</li><li>😳 flau</li></ul>
<p>Egenskaper: <span class="no">pålitelig, ærlig, tålmodig, sta, sjenert, utadvendt, innadvendt</span>. <span class="no">å glede seg til</span> ↔ <span class="no">å grue seg til</span>.</p>`,
ex:[
mcp("😢","Hvordan har han det?",["Han er lei seg.","Han er sint.","Han er sulten."],""),
mcp("😳","Hvordan føler hun seg?",["Flau","Stolt","Sint"],""),
mc("En person som aldri gir seg, er …",["sta","sjenert","lat"],""),
mc("Det motsatte av «utadvendt» er …",["innadvendt","utålmodig","uærlig"],""),
fl("Hun venter rolig uten å klage. Hun er ___.","tålmodig",""),
mc("«Jeg gruer meg til eksamen.» Personen …",["er nervøs og ser ikke fram til den","gleder seg","har glemt den"],"")
]},
{title:"Miljø og teknologi",
intro:`<ul class="vocab"><li>🌍 klimaet</li><li>♻️ gjenvinning</li><li>⚡ strøm</li><li>🔋 et batteri</li><li>📱 en mobil, skjermtid</li><li>🏭 utslipp</li></ul>
<p><span class="no">fornybar energi, vannkraft, vindkraft, solenergi, klimagasser, bærekraftig</span></p>`,
ex:[
mcp("♻️","Hva betyr symbolet?",["Gjenvinning","Fare","Strøm"],""),
mc("Hva er utslipp?",["Forurensning som slippes ut i luft eller vann","En type energi","Et skattefradrag"],""),
fl("Strøm fra vind heter ___.","vindkraft",""),
mc("Hva betyr «skjermtid»?",["Tiden man bruker foran en skjerm","Arbeidstid","Fritid ute"],""),
mc("Hva er fornybar energi?",["Energi som ikke tar slutt, som vann, vind og sol","Olje og gass","Kull"],""),
pn("🔋",["et batteri"],"et batteri – batteriet – batterier.")
]}
],
uttale:[
{title:"R-lyden og retroflekser",
intro:`<p>På Østlandet smelter <b>r</b> sammen med konsonanten etter:</p>
<ul><li><b>rs</b> uttales sj: <span class="no">norsk</span> ≈ «nosjk», <span class="no">værsågod</span></li>
<li><b>rt, rd, rn, rl</b>: tunga bøyes bakover: <span class="no">kort, ferdig, barn, Karl</span></li></ul>
<p>R-en rulles på Østlandet og i Nord-Norge, men er en <i>skarre-r</i> (bak i halsen) på Vestlandet og Sørlandet. Skriftlig er det alltid samme bokmål.</p>`,
ex:[
mc("I Oslo uttales «rs» i «norsk» som …",["sj","tydelig r + s","z"],""),
mc("Hvor er skarre-r vanlig?",["Bergen og Sørvestlandet","Oslo","Tromsø"],""),
mc("Hvilket ord har en retrofleks lyd på Østlandet?",["barn","bane","bok"],"rn smelter sammen i «barn»."),
ls("Jeg snakker norsk hver dag.",["Jeg snakker norsk hver dag.","Jeg snakket norsk i går.","Jeg skal snakke norsk."],"Lytt etter «nosjk»."),
dk("Barna sitter på gulvet og tegner kort.","rn i «barna», rt i «kort»."),
sp("Værsågod, maten er ferdig!","rs i «værsågod», rd i «ferdig».")
]},
{title:"Forstå dialekter",
intro:`<p>Du skriver og snakker bokmål, men i Norge møter du dialekter overalt, også på TV og på jobb. Du trenger ikke snakke dem, men det er nyttig å forstå dem.</p>
<table class="t"><tr><th>Bokmål</th><th>Vestlandet</th><th>Trøndelag / Nord-Norge</th></tr>
<tr><td>jeg</td><td>eg</td><td>æ</td></tr><tr><td>ikke</td><td>ikkje</td><td>itj / ikkje</td></tr>
<tr><td>hva</td><td>ka / kva</td><td>ka</td></tr><tr><td>hvor</td><td>kor</td><td>kor</td></tr></table>`,
ex:[
mc("«Æ e itj sikker.» Hva er det på bokmål?",["Jeg er ikke sikker.","Jeg er sikker.","Er du sikker?"],"Trøndersk: æ = jeg, itj = ikke."),
mc("«Eg veit ikkje kva eg skal gjere.» Hva er det på bokmål?",["Jeg vet ikke hva jeg skal gjøre.","Jeg vet hva du skal gjøre.","Hvem skal gjøre det?"],""),
mc("«Kor e du fra?» Hva er det på bokmål?",["Hvor er du fra?","Hvem er du?","Hva er det?"],""),
mc("«Ka du driv me?» Hva er det på bokmål?",["Hva driver du med?","Hvor kjører du?","Hvem driver her?"],""),
mc("Du skriver en e-post på jobben. Hvilken form bruker du?",["Jeg vet ikke.","Eg veit ikkje.","Æ veit itj."],"Skriftlig bruker du bokmål.")
]},
{title:"Rytme og trykk i setninger",
intro:`<p>I en setning får de <b>viktigste ordene</b> mest trykk. Småord som <i>jeg, er, på, å</i> blir svake.</p>
<p>Trykk kan endre meningen: <span class="no">JEG har ikke gjort det</span> (noen andre har gjort det) · <span class="no">Jeg har IKKE gjort det</span> (sterk nektelse).</p>
<p>Snakk i grupper av ord, ikke ord for ord.</p>`,
ex:[
mc("«Hvor skal du?» – «Jeg skal til Bergen i morgen.» Hvilket ord får mest trykk?",["Bergen","jeg","skal"],"Det nye svaret får trykket."),
mc("«Det var IKKE meg.» Trykket på «ikke» viser …",["at du nekter sterkt","at du er usikker","at du spør"],""),
dk("Vi skulle egentlig reise i går, men flyet ble innstilt på grunn av været.","Lang setning: lytt i grupper."),
dk("Hvis du har tid etter jobb, kan vi ta en kaffe.",""),
sp("På den ene siden er det dyrt, men på den andre siden sparer vi mye tid.","Trykk på «ene», «andre», «dyrt» og «tid»."),
sp("Jeg skulle gjerne hatt mer informasjon om tilbudet deres.","")
]}
],
lese:[
{title:"Elbilens triumf",
text:`Elbilens triumf – og bakside
Norge er landet i verden med den høyeste andelen elbiler. I 2024 var nesten ni av ti nye personbiler som ble solgt, helelektriske. Forklaringen er først og fremst politisk: I mange år har elbiler vært fritatt for de store avgiftene som legges på bensin- og dieselbiler, og eierne har fått rabatt i bomringer og på ferger.
Suksessen har imidlertid hatt en pris. Staten har gått glipp av milliarder i avgiftsinntekter, og kritikere mener at ordningen først og fremst har kommet de mest velstående til gode. I tillegg har elbilene ført til mer trafikk i byene, fordi mange har valgt bilen framfor kollektivtransport. Derfor har politikerne de siste årene gradvis innført moms og avgifter også på elbiler.`,
intro:`<p>En nyhetstekst. Legg merke til hvordan skribenten går fra fakta til kritikk med <span class="no">imidlertid</span> og <span class="no">i tillegg</span>.</p>`,
ex:[
mc("Hva er den viktigste forklaringen på de mange elbilene?",["Politiske fordeler som avgiftsfritak","Nordmenn elsker teknologi","Det selges ikke bensin"],""),
mc("Hva betyr «imidlertid»?",["men","straks","i tillegg"],"Et formelt ord for «men»."),
mc("Hva mener kritikerne?",["Ordningen har mest hjulpet de rikeste","Elbiler er farlige","Det finnes for få ladere"],""),
mc("Hvorfor er det mer trafikk i byene?",["Mange har valgt bil i stedet for buss og tog","Flere turister","Billigere bensin"],""),
tf("Elbiler har alltid vært fritatt for moms.",false,"Politikerne har gradvis innført moms."),
fl("«avgifter» er penger man må betale til ___.","staten","")
]},
{title:"Språk i endring",
text:`Språket vårt endrer seg raskere enn før, hevder mange. Engelske ord som «deadline», «chill» og «nice» har for lengst funnet veien inn i dagligtalen, og på sosiale medier blander unge norsk og engelsk uten å blunke. Bekymrede røster advarer mot at norsk kan bli et «kjøkkenspråk» som bare brukes hjemme, mens viktige samtaler foregår på engelsk.
Språkforskere er imidlertid mer avslappet. De påpeker at norsk alltid har lånt ord, fra nedertysk i middelalderen og fra dansk i århundrene etter. Det avgjørende, sier de, er ikke om vi låner ord, men om norsk fortsatt brukes på alle samfunnsområder. Det er nettopp her utfordringen ligger: I deler av næringslivet og akademia er engelsk blitt arbeidsspråket.`,
intro:`<p>En meningstekst. Se etter <b>argumentasjonen</b>: hva er bekymringen, og hva sier forskerne er det egentlige problemet?</p>`,
ex:[
mc("Hva er et «kjøkkenspråk» i teksten?",["Et språk som bare brukes hjemme","Et språk for matlaging","Et hemmelig språk"],""),
mc("Hva mener språkforskerne om engelske lånord?",["Det er ikke et stort problem, norsk har alltid lånt ord","Det er en alvorlig trussel","Lånord bør forbys"],""),
mc("Hva er den egentlige utfordringen ifølge forskerne?",["At engelsk tar over i arbeidsliv og akademia","Slang blant unge","Dansk påvirkning"],""),
fl("I middelalderen lånte norsk mange ord fra ___.","nedertysk","Gjennom handelen med Hansaen."),
mc("Hva betyr «uten å blunke»?",["uten å nøle","uten å forstå","uten å snakke"],""),
tf("Ifølge teksten har norsk ikke lånt ord før.",false,"Norsk har alltid lånt ord.")
]},
{title:"Skjermfri barndom?",
text:`Norske barn bruker i gjennomsnitt flere timer foran skjerm hver dag. Mange foreldre er bekymret, og flere skoler har innført mobilforbud i friminuttene. Tilhengerne av forbudet mener at barna leker mer, beveger seg mer og blir mindre utsatt for mobbing på nett.
Kritikerne påpeker derimot at skjermen også gir læring og sosial kontakt, og at et forbud ikke lærer barna å bruke teknologien fornuftig. Etter min mening er løsningen verken totalforbud eller fri flyt, men bevisste voksne som setter grenser – og som selv legger bort mobilen ved middagsbordet.`,
intro:`<p>En kronikk har en tydelig mening. Finn argumentene for og mot, og skribentens egen konklusjon.</p>`,
ex:[
mc("Hva er hovedtemaet?",["Barn og skjermbruk","Mobbing i idretten","Nye mobiltelefoner"],""),
mc("Hvilket argument bruker tilhengerne av forbudet?",["Barna leker og beveger seg mer","Barna lærer mer på skjerm","Det er billigere"],""),
mc("Hva mener kritikerne?",["Et forbud lærer ikke barna å bruke teknologi fornuftig","Barn bør slippe skolen","Skjerm er farlig for alle"],""),
mc("Hva er skribentens konklusjon?",["Voksne må sette grenser og være gode eksempler","Totalforbud er best","Barna bør bestemme selv"],""),
tf("Skribenten mener at voksne også bør bruke mobilen mindre.",true,"«… som selv legger bort mobilen ved middagsbordet.»"),
fl("Det motsatte av «tilhengere» er ___.",["kritikere","motstandere"],"")
]}
],
snakke:[
{title:"Diskusjon",
intro:`<p>I en norsk diskusjon er det greit å være uenig, men vær rolig og høflig.</p><ul>
<li><span class="no">På den ene siden … på den andre siden …</span></li><li><span class="no">Det er et godt poeng, men …</span></li>
<li><span class="no">Jeg forstår hva du mener, men jeg ser det annerledes.</span></li><li><span class="no">Unnskyld at jeg avbryter, men …</span></li></ul>`,
ex:[
mc("Hva er den høfligste måten å være uenig på?",["Jeg forstår hva du mener, men jeg ser det litt annerledes.","Det er feil.","Du tar feil, rett og slett."],"Vis forståelse først."),
mc("Du må avbryte på en høflig måte. Hva sier du?",["Unnskyld at jeg avbryter, men …","Stopp, nå er det meg.","Hør her!"],""),
sp("På den ene siden er det dyrt, men på den andre siden sparer vi tid.",""),
sp("Det er et godt poeng, men har du tenkt på kostnadene?",""),
sp("Etter min mening bør butikkene holde stengt på søndager, fordi folk trenger en fridag.","Fortsett selv i ett minutt: gi ett argument til og ett motargument.")
]},
{title:"Presentasjon",
intro:`<ul><li><b>Start:</b> <span class="no">I dag skal jeg snakke om …</span></li><li><b>Rekkefølge:</b> <span class="no">For det første … For det andre … Til slutt …</span></li>
<li><b>Mykere påstander:</b> <span class="no">Det kan tyde på at …</span>, <span class="no">Mange mener at …</span></li><li><b>Slutt:</b> <span class="no">Avslutningsvis vil jeg si at …</span></li></ul>`,
ex:[
mc("Hvilket uttrykk gjør en påstand mykere?",["Det kan tyde på at …","Det er helt sikkert at …","Alle vet at …"],""),
mc("Når bruker du «avslutningsvis»?",["På slutten","I starten","Når du gir et eksempel"],""),
sp("I dag skal jeg snakke om hvorfor friluftsliv er så viktig i Norge.",""),
sp("For det første er naturen lett tilgjengelig. For det andre er det gratis.",""),
sp("Avslutningsvis vil jeg si at friluftsliv er en del av den norske identiteten.","Hold nå hele presentasjonen på to minutter, med egne eksempler.")
]},
{title:"Formelle samtaler",
intro:`<p>Når du klager, forhandler eller deltar i møter, er tonen saklig og løsningsorientert.</p>
<ul><li><span class="no">Jeg ringer for å …</span></li><li><span class="no">Kunne du forklare …?</span></li><li><span class="no">Jeg foreslår at …</span></li><li><span class="no">Kan vi oppsummere hva vi er blitt enige om?</span></li></ul>`,
ex:[
sp("Jeg ringer for å klage på en regning jeg har fått.",""),
sp("Kunne du forklare hvorfor beløpet er så høyt?",""),
sp("Jeg foreslår at vi finner en løsning som passer for begge parter.",""),
sp("Kan vi oppsummere hva vi er blitt enige om?",""),
mc("Du er uenig med sjefen i et møte. Hva sier du?",["Jeg forstår poenget, men jeg er bekymret for tidsplanen.","Det der er tull.","Jeg sier ingenting."],""),
mc("Hva betyr «å forhandle»?",["Å diskutere for å bli enige om vilkår","Å kjøpe noe på nett","Å nekte å snakke"],"")
]}
],
skrive:[
{title:"Drøftende tekst",
intro:`<p>En <b>drøftende tekst</b> ser på begge sider før du konkluderer. Denne teksttypen kommer på skriftlig norskprøve på B2.</p>
<p>Oppbygning: <b>innledning</b> (spørsmålet) → <b>argumenter for</b> → <b>argumenter mot</b> → <b>konklusjon</b> (din mening). Bruk <span class="no">dessuten, derimot, likevel, derfor</span>.</p>`,
ex:[
mc("Hva skal innledningen gjøre?",["Presentere spørsmålet du drøfter","Gi den endelige meningen din","Liste opp alle argumentene"],""),
mc("Hvilket uttrykk innleder et motargument?",["På den andre siden","Dessuten","For eksempel"],""),
wr("Bør Norge innføre fire dagers arbeidsuke? Skriv en drøftende tekst med argumenter for og mot, og en konklusjon.",120,[["På den ene siden","den ene siden"],["På den andre siden","den andre siden|derimot"],["Dessuten","dessuten|i tillegg"],["Derfor","derfor|følgelig"],["Etter min mening","etter min mening|jeg mener"],["arbeidsuke","arbeidsuke|arbeidsdag"]],
`Bør vi innføre fire dagers arbeidsuke?
De siste årene har flere bedrifter testet fire dagers arbeidsuke. Spørsmålet er om dette er en god idé for hele samfunnet.
På den ene siden kan en kortere uke gi bedre helse og mer tid til familie og fritid. Dessuten viser noen forsøk at de ansatte blir mer effektive når de har færre arbeidsdager.
På den andre siden passer ordningen dårlig for yrker der noen må være til stede hele tiden, for eksempel i helsevesenet. Det kan også bli dyrt for arbeidsgiverne hvis de må ansette flere.
Etter min mening bør bedrifter få prøve ordningen der den passer, men jeg tror ikke den bør innføres for alle. Derfor er fleksible løsninger det beste.`)
]},
{title:"En formell klage",
intro:`<p>En <b>klage</b> skal være saklig og rolig. Ta med: hva du kjøpte og når, hva som gikk galt, hva du har gjort, og hva du ønsker (penger tilbake, ny vare).</p>
<ul><li><span class="no">Jeg viser til …</span></li><li><span class="no">Jeg ber om at …</span></li><li><span class="no">Jeg ser fram til svar.</span></li></ul>`,
ex:[
mc("Hvilken setning passer best i en formell klage?",["Jeg ber om at beløpet blir refundert innen 14 dager.","Gi meg pengene mine tilbake nå!","Dere er helt håpløse."],"Rolig, saklig og konkret."),
fl("Jeg ___ til bestillingen min av 3. mars.","viser",""),
wr("Du bestilte en sofa på nett. Den kom tre uker for sent, og den var skadet. Skriv en klage til butikken.",100,[["Jeg viser til","viser til"],["bestilling","bestill"],["forsinket","forsinket|for sent|ikke før"],["skadet","skade|ødelagt|revet|knekt"],["Jeg ber om","ber om"],["Jeg ser fram til svar","ser fram til|ser frem til"]],
`Klage på forsinket og skadet levering
Jeg viser til bestillingen min av en sofa (ordrenummer 48213) 3. mars. Ifølge bekreftelsen skulle sofaen leveres innen 10. mars, men den kom ikke før 31. mars.
Da jeg pakket den ut, oppdaget jeg at stoffet var revet opp på den ene siden, og at ett av beina var knekt. Jeg har tatt bilder av skadene, og de ligger vedlagt.
Jeg ber om at dere henter sofaen og leverer en ny innen to uker. Hvis dette ikke er mulig, ønsker jeg å heve kjøpet og få pengene tilbake.
Jeg ser fram til svar.
Med vennlig hilsen
Jonas Berg`)
]},
{title:"Bildeoppgave: Trafikk i sentrum",
intro:`<p>Beskriv bildet kort, og drøft deretter spørsmålet: <b>Bør bilene ut av sentrum?</b> Gi argumenter for og mot, og avslutt med din mening.</p>`,
ex:[
mcp(scene("by","🏢 12 18 22; 🏬 34 16 24; 🏢 88 18 22; 🌫️ 60 10 16; 🚗 18 46 12; 🚗 34 46 12; 🚙 50 46 12; 🚗 66 46 12; 🚌 84 44 16; 🚲 40 56 9; 🚶 10 56 9"),"Hva er problemet på bildet?",["Det er kø og dårlig luft","Det er ingen mennesker","Det snør mye"],""),
fl("Når mange biler står stille etter hverandre, er det ___.","kø",""),
pw(scene("by","🏢 12 18 22; 🏬 34 16 24; 🏢 88 18 22; 🌫️ 60 10 16; 🚗 18 46 12; 🚗 34 46 12; 🚙 50 46 12; 🚗 66 46 12; 🚌 84 44 16; 🚲 40 56 9; 🚶 10 56 9"),"Beskriv bildet kort. Drøft så: Bør bilene ut av sentrum?",120,
[["bil","bil"],["kø / trafikk","kø|trafikk"],["sykkel","sykkel|sykl"],["buss / kollektiv","buss|kollektiv|trikk|t-bane"],["luft / utslipp","luft|utslipp|forurens|eksos|støy"],["På den ene siden","den ene siden"],["På den andre siden","den andre siden|derimot"],["Etter min mening","etter min mening|jeg mener"]],
`På bildet ser vi en gate i sentrum med mange biler i kø. Lufta er grå av eksos, og bare én person sykler. En buss står fast i trafikken sammen med bilene.
På den ene siden ville et bilfritt sentrum gitt renere luft, mindre støy og mer plass til mennesker. Dessuten kunne bussene kjørt raskere uten kø.
På den andre siden er mange avhengige av bil, for eksempel eldre, håndverkere og familier med små barn. Butikkene i sentrum frykter også at kundene vil handle andre steder.
Etter min mening bør bilene i hovedsak ut av sentrum, men det må finnes unntak og et godt kollektivtilbud. Derfor må endringen skje gradvis.`)
]}
],
kultur:[
{title:"Samfunnet",
intro:`<ul><li><b>NAV</b>: Arbeids- og velferdsforvaltningen (dagpenger, sykepenger, pensjon).</li>
<li><b>Fastlege</b>: legen din. Hit går du først.</li><li><b>BankID</b>: elektronisk ID for bank, skatt og offentlige tjenester.</li>
<li><b>Bokmål og nynorsk</b>: to offisielle skriftspråk. Du lærer bokmål.</li><li><b>Samisk</b> har også offisiell status. Sametinget ligger i Karasjok.</li>
<li>Norge er et <b>tillitssamfunn</b>: folk stoler stort sett på hverandre og på staten.</li></ul>`,
ex:[
mc("Du mister jobben. Hvem kontakter du?",["NAV","Skatteetaten","Biblioteket"],""),
mc("Du føler deg syk. Hvem kontakter du først?",["Fastlegen","Sykehuset direkte","Et apotek i utlandet"],"Fastlegen henviser deg videre ved behov."),
mc("Hva bruker du BankID til?",["Å logge inn i banken og offentlige tjenester","Bare å betale i butikken","Å reise til utlandet"],""),
mc("Hvor mange offisielle skriftspråk har norsk?",["To: bokmål og nynorsk","Ett","Fire"],""),
mc("Hvor ligger Sametinget?",["I Karasjok","I Oslo","I Bergen"],"")
]},
{title:"Kommunikasjonsstil",
intro:`<ul><li><b>Underdrivelse</b>: <span class="no">Ikke så verst</span> betyr ofte «veldig bra».</li><li><span class="no">Det går seg til</span> = det ordner seg.</li>
<li><span class="no">Uff</span> (uff da): når noe er litt leit.</li><li><span class="no">Nei, nå må jeg komme meg hjem.</span> «Nei» starter en avskjed.</li>
<li>Det er greit med stillhet i en samtale.</li></ul>`,
ex:[
mc("En kollega sier at presentasjonen din var «ikke så verst». Hva mener hun?",["Den var ganske bra","Den var dårlig","Hun hørte ikke etter"],""),
mc("Noen sier: «Nei, nå må jeg komme meg hjem.» Hva skjer?",["Personen skal snart gå","Personen sier nei til noe","Personen er sint"],""),
mc("Hva betyr «Det går seg til»?",["Det ordner seg","Det blir verre","La oss gå"],""),
mc("Vennen din har mistet bussen. Hva sier du?",["Uff, så kjedelig!","Gratulerer!","Det går seg til, ha det."],""),
tf("Det er uhøflig å være stille en stund i en samtale i Norge.",false,"Stillhet er helt vanlig.")
]},
{title:"Norsk historie i korte trekk",
intro:`<table class="t"><tr><th>År</th><th>Hendelse</th></tr>
<tr><td>1814</td><td>Grunnloven blir vedtatt på Eidsvoll, 17. mai.</td></tr>
<tr><td>1905</td><td>Unionen med Sverige blir oppløst.</td></tr>
<tr><td>1913</td><td>Kvinner får stemmerett ved stortingsvalg.</td></tr>
<tr><td>1940–1945</td><td>Tyskland okkuperer Norge.</td></tr>
<tr><td>1969</td><td>Olje blir funnet på Ekofisk i Nordsjøen.</td></tr>
<tr><td>1990</td><td>Oljefondet blir opprettet.</td></tr></table>`,
ex:[
mc("Hva skjedde i 1814?",["Grunnloven ble vedtatt","Norge fant olje","Unionen med Sverige ble oppløst"],""),
mc("Hvilket land var Norge i union med fram til 1905?",["Sverige","Danmark","Finland"],"Fram til 1814 var Norge i union med Danmark."),
mc("Når fikk kvinner stemmerett ved stortingsvalg?",["1913","1814","1969"],""),
mc("Hva ble funnet i Nordsjøen i 1969?",["Olje","Gull","Et vikingskip"],"Ekofisk-feltet."),
tf("Norge var okkupert av Tyskland under andre verdenskrig.",true,"Fra 1940 til 1945."),
mc("Hva er Oljefondet?",["Statens sparefond med inntekter fra olje og gass","Et oljeselskap","En bensinstasjon"],"")
]}
]
};
