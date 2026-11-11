# Design og prototypegrundlag

## Retning
En personlig, redaktionel portfolio med lys baggrund, mørk tekst og varm orange
accent. Stor typografi skaber hierarki, mens projekter og showreel får plads.
Målgruppen er potentielle praktiksteder, der hurtigt skal kunne se arbejde,
kompetencer og kontaktmuligheder.

## Informationsarkitektur
Forside/showreel → udvalgte projekter → om mig → kontakt.
Navigationen bruger ankerlinks. Projektfiltrering viser visuel feedback og
opdaterer en besked til skærmlæsere. Videoen bruger browserens egne kontroller,
når du har lagt din video ind.

## Figma
Der er ikke oprettet et Figma-dokument. `wireframes.svg` er et importgrundlag:
træk filen ind i Figma. Lav frames på 1440 px og 390 px i bredden og brug
wireframes som udgangspunkt. Opret farvestile fra variablerne i `style.css`
og tekststile med samme systemfont. Den kodede hjemmeside er en fungerende
prototype, som du kan sammenligne med dine Figma-skærme.

Forslag til klikbar Figma-prototype:
1. Link menupunkterne til sektioner på desktop.
2. Lav en ekstra mobilframe med åben menu; forbind menuknappen til den.
3. Lav frames for hvert aktivt projektfilter og forbind filterknapperne.
4. Lav en videoframe med dit eget stillbillede og afspilningsstatus.

## Tilpasning
Farver, skrifter, afstande og maksimal sidebredde står i `:root` i CSS.
Projektkort er almindelig HTML, så indholdet kan redigeres uden at forstå JS.
Brug samme `data-category` på et kort og `data-filter` på dets filterknap.

## Afprøvning med andre
Bed en person finde et projekt, afspille showreel og finde kontakt på både
mobil og desktop. Notér problemer og dine ændringer. Faktiske brugertests
og Figma-prototypen skal udføres og dokumenteres af dig.
