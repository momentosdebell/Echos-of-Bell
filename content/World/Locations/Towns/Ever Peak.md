---
Updated: 2026-08-31
title: Ever Peak
Type: City
Location:
Vibe:
  - Industrial
  - Cozy
Custodian: Lord Proprietor - Kaelen Dravemont
Population: "13000"
Cityzens:
  - Human
  - Dwarf
Economy:
  - Mining
  - Stone work
draft: false
---
### 🌟 City of Ever Peak
Ever Peak doesn’t look like a mining town at first glance.

From a distance it feels almost soft. A quiet mountain town clinging to the cliffs, smoke curling from stone chimneys, bridges draped between terraced streets, little lanterns glowing against pale rock. It looks cozy. Calm. Safe.

Only when you step closer do the details start to change.

The streets are too reinforced. The stone is too thick. The “decorative” arches are load bearing. The pretty balconies are actually crane points. The cute little stairways keep going deeper, carved straight into the mountain like veins.

## 📜 Overview
Ever Peak clings to the mountains. A sturdy, cute, mining town where "i do it tomorrow" shapes everything. The air is cold, the stone is older than memory, and the people are known for being direct, reliable, and unbreakably grounded.

The city is not rich in luxury, but rich in skill, ore, and pride. Travelers often describe it as “honest stone with a heartbeat.”

Ever Peak is protected and governed on the ground by the **Iron Crest Elite (I.C.E.)**, an elite military law enforcement force that blends the discipline of an army with the authority of a city police system.

They are highly trained, heavily equipped, and extremely selective in recruitment. In Ever Peak, they are not just guards, but a symbol of order itself. Their presence is calm but absolute, and most conflicts are resolved the moment an I.C.E. unit arrives.

Unlike typical city watch forces, the Iron Crest Elite Guard operates with military precision, structured ranks, and rapid deployment protocols throughout the mountain districts. They handle everything from high risk criminal threats to mining accidents, border patrol, and internal security breaches.
## 💰 Economy
Ever Peak runs on extraction and trade.

- Iron, copper, and rare mountain ore
- Stone quarrying and export
- Blacksmith guild contracts
- Supply trade between valley and lowlands

Wealth is steady, not flashy. Nothing here is wasted.

## 🎭NPCs
- Kaelen Dravemont – Lord Proprietor of Ever Peak
- Brann Ironvale – Master Smith of the Upper Forges
- Sister Mira Coldwell – Mountain chapel healer
- Hilda Stonebrow – Guild overseer of quarry operations

## 🗺️ Geography 
Ever Peak is built into a massive mountain ridge, with districts stacked in natural terraces.

Lower districts handle trade, caravans, and markets. Mid levels hold homes, inns, and guild halls. Upper levels disappear into cliffside workshops, mines, and wind beaten watch platforms.

Stone bridges cross deep ravines. Narrow switchback roads connect carved tunnels and open terraces. Snow is common on the upper tiers year round.

The mountain itself is part of the city structure.

#### The Peak
The highest and deepest inner core of the mountain city. Reserved for a few residents, leadership, and essential inner operations. 
#### Stonegate
A massive carved entrance set directly into the mountain. Home to wealthy residents.
#### Stonecross
The central district where trade, movement, and governance intersect. A practical hub connecting all major carved routes through the mountain.
#### Rimwall
The outermost living layer of Ever Peak. Exposed to harsher conditions, it houses common workers and acts as the first line before the deeper city.
#### Ironvault
A dense residential and storage district built within reinforced stone chambers. Known for its tight living conditions and constant industry pressure.
#### Hammerdeep
The working heart of Ever Peak. Mines, forges, and excavation sites stretch deep into the mountain, where stone is broken, shaped, and extracted daily.

```leaflet
id: ever-peak
image: [[Ever Peak.png]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 8
unit: meters
scale: 1700
marker: Tavern, -0.1607, 1.6646, [[The Shelf]]
marker: Tavern, -2.1652, 1.5635, [[The Seven Cats Inn]]
marker: Sights, -1.0813, 1.844, The Great Peak Gate
marker: Sights, -1.5266, 2.4778, The Upper Forges
marker: Sights, -0.4495, 2.4905, Stonevein Mines
marker: Sights, -0.5904, 2.2837, Windwatch Spire
marker: Sights, -1.1822, 2.3931, The Granite Steps
```

---
#### 🍺 Lodge
- [[The Seven Cats Inn]] - Overlooking the wally
  🪙🪙🪙🪙🪙
- The Shelf - On the highest point
  🪙⚪⚪⚪⚪
#### 🏛️ Landmarks
- The Great Peak Gate - main carved entrance through solid rock
- The Upper Forges - massive cliffside smithing complex
- Stonevein Mines - deep, layered mining network
- Windwatch Spire - signal tower and storm lookout
- The Granite Steps - ancient carved stairway connecting all districts
## 👥Citizen
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
WHERE contains(file.outlinks, [[World/Towns/Ever Peak]])
AND Birth <= [[Settings]].Year
AND (!Death OR Death >= [[Settings]].Year)
SORT Birth ASC
```






