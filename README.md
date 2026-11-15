# Johans portfolio

En statisk hjemmeside i HTML, CSS og lidt JavaScript. Åbn projektmappen i
PhpStorm og start siden med `python3 -m http.server 8000` fra projektmappen.
Der er ingen pakker, installation eller build-trin.

- `index.html`: forside med showreel og syv projektkategorier.
- `projekter.html`: alle projekter, fotoalbummer, musikafspillere og links.
- `om-mig.html`: præsentation og kompetencer.
- `style.css`: fælles design og mobiltilpasning. Farver og størrelser står ved reglerne.
- `script.js`: mobilmenu, billedvalg og forstørrelse i gallerierne.
- `assets/`: billeder, MP3-filer, PDF'er og showreel-videoen.

## Showreel

`assets/showreel.mp4` afspilles med browserens egne kontroller. `preload="metadata"`
begrænser den første indlæsning, og `playsinline` understøtter afspilning på mobil.
Videoen starter først, når den besøgende trykker play.

Forsidebilledet er `assets/showreel-poster.webp`. Opdatér både MP4 og poster,
hvis videoen udskiftes. Hvis videoen får undertekster, skal den rigtige VTT-fil
tilføjes med et `<track>`-tag og passende sprogkode.

## Tilføj musik og billeder

Kopiér et nummers `<h3>`, beskrivelse og `<div class="music-player">` i Music-sektionen.
Ret spornavn, `aria-label` og begge filhenvisninger. Musikken er MP3 og bruger
`preload="none"`, så alle numre ikke hentes på én gang.

I et galleri tilføjes en miniatureknap med et beskrivende `aria-label`.
Miniaturens `src` er den lille fil, og `data-full` peger på den større webversion.
Miniaturens `alt=""` er bevidst: knappens navn beskriver billedet, og JavaScript
bruger samme beskrivelse til det store billede. Almindelige billeder uden for
miniatureknapper skal have passende alt-tekst.

Et nyt album skal have sit eget dialog-ID. Forstørrelsesknappens `aria-controls`
skal pege på det samme ID. De eksisterende albummer viser opbygningen.

## Kontrol ved ændringer

Kontrollér siderne ved både smal mobilbredde og desktopbredde. Prøv menuen,
projektkortene, kategori-links, afspillerne, billedgallerierne og knapperne til
sidens top. Prøv også Tab, Enter, Escape og piletaster i et åbent galleri.

YouTube og Spotify kræver internetadgang. Kontrollér deres afspilning samt
PDF'ernes læserækkefølge og eventuelle behov for undertekster manuelt.
