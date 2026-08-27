---
Updated: 2026-06-06
Birth: 614
Death: 1793
---
```dataviewjs
const year = dv.page("Settings").Year;
const birth = dv.current().Birth;
const death = dv.current().Death;

let status;
let age = "";

if (birth > year) {
    status = "⚫ Not born";
}
else if (death && death < year) {
    status = "🔴 Dead";
    age = ` | Age at death: ${death - birth} y/o`;
}
else {
    status = "🟢 Alive";
    age = ` | Age: ${year - birth} y/o`;
}

dv.span(`[[Settings|${status}]]${age}`);
```
> [!infobox]+ Quickies
> ![[Gaganesh Orvil Amon Thorne.png|230]]
> **Titel:** 
> **Origin:** 
> **Race:** #Loxodon
> **Gender:** #Female 
> **Occupation:** Store owner, [[Dynamic Office Of Reality]]
> **Residence:** [[Silvergrove City]]
> **Class:** #Wizard
> ---
> **Father:** 
> **Mother:** 
> **Siblings:** 
> **Partner:** 
> **Children:** [[Sequoia]]
