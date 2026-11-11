# Personlig portfolio · Showreel
En enkel, håndkodet portfolio til Multimediedesigner på Zealand.

## Åbn i PhpStorm
1. Vælg **File → Open** og åbn denne mappe.
2. Åbn `index.html`, og vælg browserikonet i editoren.
3. Alternativt: kør `python -m http.server 8000` i terminalen fra projektmappen.

Ingen installation, frameworks eller byggeværktøjer er nødvendige.

## Filer
- `index.html`: indhold og semantisk sidestruktur.
- `style.css`: mobile first-layout; farver og skrifttyper øverst.
- `script.js`: mobilmenu og filtrering af projekter.
- `assets/`: lette SVG-eksempelillustrationer; udskift med dine egne billeder.
- `docs/`: designgrundlag, wireframes og afleveringstjek.

## Arbejdsproces
Struktur og designgrundlag → layout og interaktion → kontrol og dokumentation.
Commits dokumenterer disse faktiske trin. De erstatter ikke din egen løbende
arbejdsproces gennem semesteret. Commit dine egne ændringer løbende.

## Teknologier og valg
HTML5, CSS Grid/Flexbox og almindelig JavaScript. Systemskrifter giver hurtig
indlæsning uden eksterne fonttjenester. Siden bruger ingen cookies eller eksterne
biblioteker. JavaScript er kun nødvendig for filtre og mobilmenu.

## Før aflevering
Navn, mail, portræt, projekter og video er markeret som eksempelindhold.
Se `docs/AFLEVERING.md`. Siden må ikke præsenteres som en færdig personlig
portfolio, før det indhold er erstattet.

## Ret indholdet – helt konkret
- **Farver og fonts:** ret variablerne under `:root` øverst i `style.css`.
- **Tekster:** ret teksten mellem HTML-tags i `index.html`.
- **Projektbilleder:** læg fx `projekt-1.webp` i `assets/` og ret kortets `src`
  og `alt`. Alt-teksten skal beskrive det nye billede. Brug gerne ca. 100–250 KB
  pr. billede og passende dimensioner (fx 800 × 600 px).
- **Nye projekter:** kopiér et helt `<article class="project-card">...</article>`.
  Kategorien kan være `design`, `web` eller `video`.
- **Projektvideo:** erstat kortets `<img>` med fx:
  ```html
  <video controls playsinline preload="metadata" aria-label="Mit videoprojekt">
    <source src="assets/mit-projekt.mp4" type="video/mp4">
    <a href="assets/mit-projekt.mp4">Hent videoen</a>
  </video>
  ```
  Filen skal tilføjes af dig. Brug H.264 MP4 og en komprimeret webudgave.
  Videoen afspilles ikke automatisk. Tilføj undertekster ved tale.
- **Showreel:** find kommentaren `SHOWREEL` i HTML. Erstat den grafiske
  pladsholder med videoeksemplet i kommentaren, og tilføj de nævnte filer.
  Behold kun `<track>`, hvis du har en rigtig undertekstfil.
- **Portræt:** erstat `.portrait-placeholder` med et billede af dig selv med
  en beskrivende alt-tekst og passende størrelse.

## Udgivelse med GitHub Pages
Når koden ligger på `main`: Åbn repositoryets **Settings → Pages**. Vælg
**Deploy from a branch**, branch **main**, mappe **/(root)** og gem.
Adressen bliver normalt `https://jayllaxo.github.io/portfolio-opgave/`.
Adressen er først et afleveringslink, når GitHub har bygget siden, og du har
afprøvet den online. Git push alene aktiverer ikke nødvendigvis Pages.
