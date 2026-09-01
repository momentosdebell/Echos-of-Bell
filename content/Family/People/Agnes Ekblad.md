---
Updated: 2026-08-27
Birth: 1394
Death: 1477
title: Agnes Ekblad
Race:
  - Human
Gender: Female
Occupation: "[[The Shelf|Innkeeper]]"
Residence: "[[Ever Peak]]"
Father: "[[Agust Ekblad]]"
Mother: "[[Bromhilda Winterfrost]]"
Siblings:
  - "[[Aurora]]"
Partner: "[[Gustav Ekblad]]"
Children:
  - "[[Princess Wiggles]]"
draft: false
---
```dataview
const currentYear = dv.page("World/private/Settings.md")?.CurrentYear ?? 0;

dv.table(["Karaktär", "Född", "Status / Ålder"],
    dv.pages('"Karaktärer"') // Byt ut '"Karaktärer"' mot namnet på mappen där dina karaktärsfiler ligger
      .where(p => p.Birth)
      .map(p => {
          let ageOrDeath;
          if (p.Death && p.Death !== "Alive" && p.Death !== "Unknown") {
              let deathAge = p.Death - p.Birth;
              ageOrDeath = `Död (${p.Death}) – Blev ${deathAge} år`;
          } else {
              let currentAge = currentYear - p.Birth;
              ageOrDeath = `Lever – ${currentAge} år`;
          }
          return [p.file.link, p.Birth, ageOrDeath];
      })
);
```