# React + Vite

For å teste appen:

Åpne terminalen og naviger til:
cd stemme-app

for å kjøre så må du sjekke om du har disse først:
node -v
npm -v

Skriv inn:
npm run dev

hoover over en link som ser ut som denne:
http://localhost:5173/
Klikk på "follow link".

Jeg har endret minimalt i index.css som fulgte med, der endret jeg bare på fargen til knappekantene når du hoovrer over dem. Alt annet av styling la jeg til direkte i filene mine (inline styling med camelCasing) fordi jeg ikke ville tukle for mye med et oppsett som jeg allerede synes var fint.

Jeg valgte å legge inn noen kandidater slik at appen ikke så så tom ut, disse kan endres og slettes, men om siden refreshes så tilbakestilles alt til original tillstand.

Desverre rakk jeg ikke å legge til bilder, men tanken var at kandidatene skulle ha et lite foto ved navnet sitt.
Navnet til kandidatene kunne også blitt stylet på en litt tydeligere måte/fått litt større font. Nå var det jo ikke visuelt pirk denne oppgaven handlet om, men greit å få med at jeg hadde litt større ambisjoner enn det jeg rakk å utføre.

Jeg hadde lyst til å legge stemmetelleren til hver kandidat istedenfor i en liste nederst på siden, men jeg tenker at det er en nice to have istedenfor en need to have også kan jeg implementere det om jeg får tid. It's not exactly a visual feast that's for sure...

Jeg har forsøkt å implementere litt errorhåndtering også (men skulle gjerne rukket å legge inn mer gjennomgående håndering i filene), selv om appen ser ut til å fungere greit, så har jeg ikke rukket å teste den altfor hardt: det er mye mulig den har en del barnesykdommer jeg ikke er klar over.

Ting jeg har lært:
For å kommentere her bruker vi en miks av disse: {} // (slash, stjerne, stjerne, slash også men det får jeg ikke skrive her)
(jeg prøver fremdeles å liste ut hva jeg skal kommentere inn hvor).

Hva er UseState?
! En React-hook som lar funksjonelle komponenter håndtere og oppdatere sin lokale tilstand.

Hva er Hook?
!: En hook er en spesiell funksjon i React som gir deg muligheten til å bruke tilstand og livssyklusmetoder(montering, oppdatering, avmontering) i funksjonelle komponenter, uten å måtte bruke klassekomponenter.

I React bruker vi PascaCasing til å navngi komponenter (både funksjon og klassekomponenter).
Hvorfor?
!: Fordi React behandler alt som starter med stor bokstav som komponenter, alt som starter med små bokstaver blir regnet som vanlige HTML komponenter.
(Vi bruker det også til egendefinerte hooks).

Når bruker vi camelCase?
!: Vi bruker camelCase for vanlige variabler, funksjonsnavn, atributter slik som f.eks onClick og slik som jeg gjorde i innline stylingen:

<div style={{ backgroundColor: "grønn" }} onClick={handleSomething}>

?: Hvorfor bruker vi dobble {{}} curlybrackets når vi styler?
!: I et vanlig React-oppsett brukes den ytre parentesen til å inkludere JavaScript-uttrykk i JSX. Alt innenfor denne ytre parentesen blir tolket som JavaScript. De indre parantesene representerer et JavaScript-objekt som inneholder CSS-egenskapene.

?: Hvorfor bruker vi egentlig (...) ?
!: Vi bruker spread syntax i React for å forenkle prop-overføring
(prosessen med å sende data og funksjoner som props/egenskaper fra en overordnet komponent til en underordnet komponent i React),
Prop-overføring gjør det mulig for komponenter å dele data og funksjonalitet.

Etterord:

Jeg må ærlig innrømme at uten hjelp og støtte fra chat gpt så hadde jeg aldri kommet i mål med oppgaven
(tidsklemma er like reel for meg som den er for andre og livet mitt er bare en lang rekke deadlines som løper alt for fort),
merker at jeg er veldig avhengig av å få forklart ting med teskjed og da er det hyggelig å ha et program som aldri blir lei når jeg spør "hvorfor er det sånn, hvorfor gjør vi sånn, hvorfor, hvorfor, hvorfor". Merker at den typen avhengighet av et hjelpemiddel kan ta bort mye mestringsfølelse og det ender veldig fort opp med å amplifisere impostersyndrom og dårlige selvtanker rundt egen prestasjonsevne.
Jeg aner ikke hvor mye utviklere lener seg på AI i hverdagen, jeg vet bare hvor utrolig fortapt jeg følte meg når internett datt ut og jeg måtte lete etter svarene i notatbøkene mine: AI er et tveegget sverd og det merkes veldig. Eier jeg virkelig like mye lærdom når jeg spør AI om råd, som når jeg leser og leter meg frem til svaret i kompendium eller i notatbøkene mine.
Er den tiden jeg sparer på å spørre chat gpt "hvorfor gjør vi sånn her, eller hvorfor vil ikke dette virke når jeg har gjort slik" verdt det. Burde jeg egentlig gå helt tilbake til basic med badeanda mi, eller burde jeg levere oppgaven til tidsfristen.
Jeg tenker at så lenge jeg selv forstår hva jeg driver med, og så lenge jeg er klar over hvor svakhetene mine ligger så er det ok.
(Også er det jo ikke sånn at alle råd er gode så det er viktig å vite hvorfor vi gjør det vi gjør uten å støtte seg 100% på noe som ikke alltid er rett).
