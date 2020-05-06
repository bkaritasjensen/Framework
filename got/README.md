### Framework

## GAME OF THRONES

_Har valgt at lave en hjemmeside med - Game of Thrones, tema. Hvor jeg vil hente data fra API med beskrivelse over de forskellige karakter der er i serien og bøgerne der er blevet skrevet. Siden bygges op med React og Tailwind, for at bruge nogle af de nye frameworks vi har lært._

Fundet API'en fra denne side:
https://public-apis.xyz/an-api-of-ice-and-fire-9393

API'en:
https://anapioficeandfire.com/?ref=public-apis

Layoutet er fundet, ligger i layout mappen.

Begyndt at finde billeder til hjemmesiden, som er i images mappen.

---

### OPGAVEBESKRIVELSE FRA TIDLIGERE PROJEKT:

​

## Om opgaven

Denne opgave er omhandler opsætning, navigation og hentning af data. Læs hele opgavebeskrivelsen grundigt igennem inden du stiller spørgsmål.
​

## Opgavebeskrivelse

​
Du skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og kunne fremsøge produkter vha. søgeord. Der er udelukkende tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.
​
Opgaven varer ca. 2 uger og omhandler udarbejdelse af en projektplan (eksempelvis ved hjælp af GitHub Projects), designanalyse og datastruktur i en eller flere JSON-filer, samt produktionen af client-side produktet.
​

### Tekniske krav

​
**Client-Side**

- Semantisk korrekt HTML
- Modulært opbygget CSS (Flere css filer)
- Modulært struktureret JavaScript (<a href="https://www.youtube.com/watch?v=7d9H34ZVRPg" target="_blank">Object Literals</a>, Revealing Module Patterns)
- Hente data ved hjælp af fetch-api'et. (HTML/ JSON)
- Begrænset data udtræk ved hjælp af url parametre
  ​

### Design og layout

Du skal udarbejde en layoutanalyse, som redegør for hvordan elementerne på hjemmesiden er bygget op.<br>
Produktet skal designes efter mobile first princippet, men nødvendigvis ikke implementeret til begge medier _(prioriter desktop varianten som den primære der produceres. Breakpointet der arbejdes udfra er 1280px)_.
​

### Forslag til arbejdsprocess

- Projekt planlægning: Afklaring af opgavens indhold defineret i et Kanban bord
- Layout: Udarbejdelse af layoutanalyse
- Design datastrukturer i JSON
- GODKENDELSE AF OVENSTÅENDE inden arbjedet fortsættes
- Opsæt HTML sider med dummy-data (statisk site)
- Opret datafiler (JSON)
- Programmér funktioner til dataudtræk
- Byg alle nødvendige fetch, og udskriv data fra fetch
  ​

### Sider og indhold

- Forside
- Brand-liste
- Shop-kategorier
- Kategori-liste
- Enkelt produktvisning

### Forsiden

- Forsidetekst og billeder af produkter
- Visning af minimum ét produktbillede (kan være det senest oprettede, et tilfældigt produkt eller andet du finder relevant)

### Produktsider

Der er flere forskellige funktioner under produkter:

- Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
- Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
- Visning af ét produkt ved klik på et produkt fra listerne
- Visning af produkter efter søgning
  ​
  Alle produkter hentes via et API og udskrives med fetch, alle produkter vises med deres billede.

### Alle sider

- Menu
- Fritekst-søgefunktion til produkter og producenter (visning på produktsiden)
- Footer med kontaktinfo
  ​

### Github

- Projektet opsættes i et GitHub Classroom.
- Der skal committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet - og altid inden fyraften.
- Alle commit tekster på GitHub skal kort beskrive ændringerne. **Der må ikke skrives ligegyldige beskrivelser!**.
  ​
  <br><br>

## Ekstraopgaver

Hvis du er hurtigt færdig!
​

1. Udvikel et billedgalleri til forsiden som skifter mellem billederne på en af følgende måder:

- Automatisk (Timer)
- Manuelt (Ved tryk på pile ikonerne)
- Manuelt (Ved tryk på piletasterne)
  ​

2. Indsæt reklmebannere på hjemmesiden. Du skal selv beslutte hvor på siden reklamebannere vil passe ind. Find et API på nettet, som lader dig fetche bannere og indsæt vilkårlige bannere på hjemmesiden.
   ​

---

​

## **Refleksion efter opgaven**

​
Når tiden er gået, skal du kort **reflektere over, hvordan det gik**. Dette skal du gøre **skriftligt** i en **"Refleksioner" markdown-fil** i roden af dit repository.
​
Her er et **eksempel** på, hvordan indholdet af filen kunne se ud:<br>
[Skabeloner/Refleksioner.md](../Skabeloner/Refleksioner.md)
​
I "Refleksioner" markdown-filen skal der være en **overskrift til hver opgave** du ønsker at skrive om, som vist i ovenstående eksempel.
​
**Hvis du ikke blev færdig**, skriv kort om hvad der var af **forhindringer**. <br>
Føler du, at du koder for langsomt? <br>
Har du svært ved at finde kode du kan genbruge? <br>
Mister du overblikket?<br>
osv.
​
**Hvis du syntes det gik godt**, så skriv det. <br>Nævn specielt om du syntes opgaven var **nem** eller **tilpas** og fortæl hvad du synes om den type opgaver. Det er IKKE arrogant at

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
