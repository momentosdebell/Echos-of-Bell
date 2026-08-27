---
Updated: 2026-06-05
Birth: 1434
Death: 1547
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
> ![[Silas Kade.jpeg|230]]
> **Titel:** 
> **Origin:** 
> **Race:** #Tiefling
> **Gender:** #Male 
> **Occupation:** Owner of [[The Seven Cats Inn]]
> **Residence:** [[Silvergrove City]]
> **Class:** 
> ---
> **Father:** 
> **Mother:** 
> **Siblings:** 
> **Partner:** 
> **Children:** 
