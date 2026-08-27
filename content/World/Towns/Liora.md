---
Updated: 2026-06-03
---
> [!infobox]+ Quickies
   **Population:** ~2 800  
   **Citizens:** Humans (70%), Halflings (15%), Mixed artisan families (15%)  
   **Ruler:** Lord Proprietor
   **Guard:** The Tideward Enforcers
   **Economy:** Strong, wine makeing  
   **Industry**: Wine production  
   **Education:** Low to Moderate
   **Architecture:** Terracotta plaster mediterranean buildings

## 🌟 City of Liora
Liora looks like a calm southern coastal city where life moves at an easy pace. The harbor is busy, but never chaotic, and the vineyards stretch quietly across the hills behind it. Visitors often assume nothing important ever happens here. That assumption is what keeps Liora safe. Nothing feels forced, but almost everything is controlled in some way. The calm is real, but it is also maintained.

## 📜 Overview
Liora is a warm coastal city in the south, shaped by sea trade, vineyards, and everyday life along the shoreline.

The city is calm but active. Ships come and go through the harbor, bringing goods, news, and travelers. Streets are narrow in the old districts and open wider near the sea, where markets and taverns sit close to the docks.

Life in Liora moves at a steady pace. People work, trade, eat well when they can, and rely on the sea and land for stability. The surrounding vineyards and coastal farms keep the city supplied, while trade routes connect it to larger inland powers.

Liora is not a city of extremes. It is a place that continues forward quietly, even when the wider world changes around it.

## 💰 Economy
- [[River Royal]] wine export (core industry)  
- Small scale fishing and coastal food trade  

## 🎭 NPCs
- [[Thalindra De Rivièr]] - Head of [[River Royal]] 
- Captain Jorren Vale - Harbor Wardens commander  

## 🗺️ Geography
Liora is built along a warm coastline with vineyards and shallow protected waters.

The coastline naturally protects the harbor, making it one of the safest trade ports in the region.

```leaflet
id: liora
image: [[Liora.png]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 8
unit: meters
scale: 1700
marker: Vineyard, -0.1464, 1.4954, [[River Royal]]
marker: Tavern, -1.6131, 1.7661, [[The Seven Cats Inn]]
marker: Sights, -0.7206, 2.054, Rivièr Cellars
marker: Sights, -1.6814, 1.9868, Painted Steps
marker: Sights, -2.5191, 1.6689, Moonfoam Shore
marker: Sights, -1.9705, 2.6704, The Glassvine House
```
---

#### 🍺 Lodge
- [[The Seven Cats Inn]] - In middle of the town
   🪙🪙🪙🪙🪙
#### 🏛️ Landmarks
- Rivièr Cellars - origin of [[River Royal]] wine  
- Painted Steps - mural staircase, painted by [[Elyra De Rivièr]]  
- Moonfoam Shore - A pale sand beach where waves break into soft glowing foam at night.
- The Glassvine House - main vine hall and merchant meeting point 

## 👥 Citizen
```dataview
TABLE
([[Settings]].Year - Birth) AS "Age",
default(
    filter(file.tags, (t) => contains(list("#Male", "#Female", "#Non-Binary"), t))[0],
    "Not known"
) AS "Gender",
default(
    filter(file.tags, (t) => contains(list(
        "#Human",
        "#Half-Elf",
        "#Half-Orc",
        "#Goliath",
        "#Firbolg",
        "#Aasimar",
        "#Genasi",
        "#Kalshtar",
        "#Tabaxi",
        "#Triton",
        "#Lizardfolk",
        "#Tortle",
        "#Kenku",
        "#Aarakocra",
        "#Goblin",
        "#Hobgoblin",
        "#Bugbear",
        "#Grung",
        "#Changeling",
        "#Shifter",
        "#Elf",
        "#Dwarf",
        "#Warforged",
        "#Halfling",
        "#Orc",
        "#Gnome",
        "#Satyr",
        "#Loxodon",
        "#Tiefling"
    ), t))[0],
    "Not known"
) AS "Race"
FROM ("World/NPC/Members" OR "Family/Members")
WHERE contains(file.outlinks, [[World/Towns/Liora]])
AND Birth <= [[Settings]].Year
AND (!Death OR Death >= [[Settings]].Year)
SORT Birth ASC
```