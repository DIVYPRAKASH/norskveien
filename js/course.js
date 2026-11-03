// Norskveien – kursstruktur og hjelpefunksjoner for innhold.
// Konvensjon: i flervalg (mc/ls/mcp) er FØRSTE alternativ riktig. Alternativene stokkes på skjermen.
const mc=(q,o,x)=>({t:"mc",q,o,x});
const mcp=(pic,q,o,x)=>({t:"mc",pic,q,o,x});            // flervalg med bilde
const tf=(q,a,x)=>({t:"tf",q,a,x});                      // sant/usant
const fl=(q,a,x)=>({t:"fill",q,a:[].concat(a),x});       // fyll inn
const od=(q,w,x,alt)=>({t:"order",q,w,x,alt:alt||[]});   // ordstilling
const ls=(say,o,x)=>({t:"listen",say,o,x});              // lytt og velg
const dk=(say,x)=>({t:"dict",say,x});                    // diktat: lytt og skriv
const sp=(say,tip)=>({t:"speak",say,tip});               // si det høyt
const pn=(pic,a,x)=>({t:"pic",pic,a:[].concat(a),x});    // hva er dette? (skriv ordet med artikkel)
// skriveoppgave: need = [[etikett, "stamme1|stamme2"], ...]
const wr=(q,min,need,model)=>({t:"write",q,min,need,model});
const pw=(scene,q,min,need,model)=>({t:"write",scene,q,min,need,model}); // bildeoppgave
// scene: bakgrunn + "emoji x y størrelse; ..."  (koordinater 0–100 × 0–62)
const scene=(bg,spec)=>({bg,items:spec.split(";").map(s=>s.trim()).filter(Boolean).map(s=>{const p=s.split(/\s+/);return {e:p[0],x:+p[1],y:+p[2],s:+p[3]||12}})});

const LEVEL_INFO={
  A1:{nb:"Nybegynner",can:"Du kan noen ord og enkle fraser og kan presentere deg selv."},
  A2:{nb:"Grunnleggende",can:"Du klarer deg i hverdagen: handle, spørre om veien, fortelle om uka di og hva du har gjort."},
  B1:{nb:"Mellomnivå",can:"Du kan si meningen din, skrive e-poster og følge vanlige samtaler og arbeidslivet i Norge."},
  B2:{nb:"Høyere mellomnivå",can:"Du kan diskutere og argumentere, lese nyheter, skrive strukturerte tekster og forstå ulike dialekter."}
};

const SKILLS=[
  {id:"gram",nb:"Grammatikk"},
  {id:"ord",nb:"Ordforråd"},
  {id:"uttale",nb:"Uttale"},
  {id:"lese",nb:"Lesing"},
  {id:"snakke",nb:"Muntlig"},
  {id:"skrive",nb:"Skriving"},
  {id:"kultur",nb:"Norge i praksis"}
];

const COURSE={};

// Plasseringstest: 3 spørsmål per nivå. Første alternativ er riktig.
const PLACEMENT=[
{l:"A1",...mc("___ eple",["et","en","ei"])},
{l:"A1",...mc("Jeg ___ fra Polen.",["kommer","kommet","å komme"])},
{l:"A1",...mc("Når sier du «Takk for maten»?",["Etter et måltid","Når du kommer hjem","Om morgenen"])},
{l:"A2",...mc("I går ___ jeg på kino.",["gikk","går","gå"])},
{l:"A2",...mc("Hvilken setning er riktig?",["I morgen reiser jeg til Bergen.","I morgen jeg reiser til Bergen.","Jeg i morgen reiser til Bergen."])},
{l:"A2",...mc("Jeg har ___ i Norge i tre år.",["bodd","bo","bor"])},
{l:"B1",...mc("Det ___ huset er mitt.",["store","stort","stor"])},
{l:"B1",...mc("Jeg vet at han ___",["ikke kommer.","kommer ikke.","ikke komme."])},
{l:"B1",...mc("Jeg så filmen i går. Jeg ___ den var kjedelig.",["synes","tror","tenker"])},
{l:"B2",...mc("Billettene må ___ på nett.",["kjøpes","kjøpe","kjøpt"])},
{l:"B2",...mc("Det regnet hele dagen. ___ gikk vi på tur.",["Likevel","Derfor","Fordi"])},
{l:"B2",...mc("«Ikke så verst» betyr vanligvis …",["ganske bra","veldig dårlig","ikke interessert"])}
];
