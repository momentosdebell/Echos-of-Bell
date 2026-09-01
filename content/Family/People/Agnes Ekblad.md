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
$=let c = dv.current(); let s = dv.page("World/private/Settings.md"); c.Birth ? (c.Death && c.Death != "Alive" && c.Death != "Unknown" ? (c.Death - c.Birth) + " år vid sin död" : (s.CurrentYear - c.Birth) + " år") : "Ingen ålder"