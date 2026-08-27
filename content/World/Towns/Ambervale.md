---
Updated: 2026-06-05
---
> [!infobox]+ Quickies
   **Population:** ~5 000  
   **Citizens:** Gnomes (42%), Halflings (36%), Dwarves (14%)
   **Ruler:** Council of Ambervale
   **Guard:** [[Central Shields]]
   **Economy:** Fair
   **Industry**: Trade
   **Education:** Low
   **Architecture:** 
   
## 🌟 City of Ambervale
Ambervale is a sun drenched trade city spread wide across rolling hills, more open landscape than crowded streets. A broad river runs through its heart, feeding a busy harbor where barges move goods toward [[Rivergold]] without pause. Surrounded by endless farmland and watched over by a distant mountain trade route, the city feels warm, alive, and always in motion, like a marketplace that never fully sleeps.
## 📜 Overview
Trade is the backbone, but Ambervale’s real strength is its reputation for reliability. Goods from here are expected to be consistent, durable, and honest in quality, which makes them highly valued.

Craftsmanship dominates local life. Guilds of smiths, carpenters, farmers, and transport workers shape most of the city’s influence, while formal schooling is limited and secondary to hands on apprenticeship.

Arcane magic is uncommon here, showing up mostly in small, unpredictable ways and, every now and then, maybe most notably in Old Thom’s bread that people swear carries a bit of something special in it.

Security is steady but not militarized. Guards are visible around markets, docks, and major roads, but the city relies more on community structure and guild influence than heavy force. Merchant routes are protected mainly because the economy depends on them, not because of strict authority.
## 🎭NPCs
- [[Family/People/Talia Bramblevick]] - Cafe owner
- Bram Kettle - Harbormaster

## 🗺️ Geography 
Rolling hills and wide farmland stretch in every direction, broken only when rooftops start to rise out of the fields. There are no looming walls, only a low outer barrier meant more to keep animals out than to keep people in. The river pulls straight through it all, guiding you toward a busy harbor where barges crowd the docks.

Inside, Ambervale is built low and wide. Houses are simple but well made, mostly timber, stone foundations, and clay roofs worn smooth by sun and rain. Buildings cluster loosely rather than stacking tight, leaving open gaps of farmland and gardens between districts. Streets bend naturally around homes, markets, and workshops, never forming rigid lines.

There are few towers and almost no heavy fortifications. Guards are fully present, and watch points are small, practical structures rather than symbols of power. Everything here is built for living and working, not defending. The city feels like it was grown into the land rather than placed on top of it.
#### Highgarden Hill
The highest and most exclusive part of Ambervale, home to the wealthy elite. Overlooks the entire town with controlled estates and quiet luxury.
#### Golden Slopes
A refined district for minor nobility and wealthy families. Comfortable, orderly, and positioned just below Highgarden Hill in status and elevation.
#### Willowmead
The heart of Ambervale, filled with markets, shops, and daily life. It is where trade, conversation, and movement converge.
#### Suncrest
A quieter outer district with farmland influence. Mostly commoners living in open, sunlit spaces near the edge of the town.
#### The Crossing
A dense commoner district built around movement between key roads. Busy, practical, and always in motion.
#### Saltwake
The harbor district, shaped by trade and arrival. Known for its markets, docks, and a scenic central square facing the water.
#### Grain District
The first district, seen when entering from the far side of the river. Farmland surrounds it, and it is known for its harvest trade and a famous local bakery [[The Rolling Pin]].

```leaflet
id: leaflet-map
image: [[Ambervale.png]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 8
unit: meters
scale: 1700
marker: Bakery, -1.75, 2.9, [[The Rolling Pin]]
marker: Tavern, -2.3324, 2.5415, [[The Seven Cats Inn]]
marker: Tavern, -2.5354, 2.8547, Shear Bliss Inn
marker: Tavern, -1.7133, 1.2935, The Rabbit & Rest
marker: Tavern, -2.6898, 1.2954, Field of Snores
marker: Harbor, -2.4073, 2.8108, River Square Harbor
marker: Bridge, -2.0186, 2.6653, River Road Bridge
```

---
#### 🍺Lodge
- [[The Seven Cats Inn]] - Tavern Chain, right by the town square
  🪙🪙🪙🪙🪙
- Shear Bliss Inn - Small tavern, by the harbor
  🪙🪙🪙⚪⚪
- The Rabbit & Rest - Mid size tavern in central of Ambervale
  🪙🪙⚪⚪⚪
- Field of Snores - Small tavern in the outskirts of town
  🪙⚪⚪⚪⚪ 
#### 🏛️Landmarks
- [[The Rolling Pin]] - Cafe famus for their sourdough bread
- River Square Harbor - Town square and small river trade harbor in one open hub
- Great Field Ring - surrounding farmland shaping the town’s identity
- River Road Bridge - main crossing toward Rivergold trade route
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
WHERE contains(file.outlinks, [[World/Towns/Ambervale]])
AND Birth <= [[Settings]].Year
AND (!Death OR Death >= [[Settings]].Year)
SORT Birth ASC
```

