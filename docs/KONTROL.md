# Kontrol af første version

Udført 11. november 2026 på den kodede side med eksempelindhold.

- JavaScript-syntaks: `node --check script.js` bestod.
- HTML: `html-validate` med `html-validate:standard` bestod uden fejl.
- Chromium/Playwright: 390, 768 og 1440 px bredde.
  - Ingen vandret overflow.
  - Alle tre kategorifiltre viser de rigtige projektkort.
  - Alle projekter-knappen gendanner de tre kort.
  - Mobilmenu åbner, lukker ved Escape og lukker efter valg af kontaktlink.
  - Navigationen og alle kort er tilgængelige uden JavaScript.
  - Ingen JavaScript-fejl eller fejlede requests til sidens filer.
- Visuel gennemgang af helsidesbilleder ved 390 og 1440 px.
- axe-core: ingen fund i de automatiske WCAG 2 A/AA og 2.1 AA-kontroller
  ved 390 og 1440 px. Det er ikke en fuldstændig tilgængelighedsgodkendelse.

Kontrolværktøjerne blev kørt uden for projektmappen. Projektet kræver stadig
ingen npm-installation. Rigtig videoafspilning, endeligt indhold, Safari,
Firefox, faktisk brugertest og offentligt Pages-link er endnu ikke testet.

GitHub API gav Forbidden ved forespørgsel om Pages. Aktivér og verificér derfor
Pages via repositoryets Settings som beskrevet i README.
