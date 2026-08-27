---
Updated: 2026-06-05
---
> [!infobox]+ Quickies
   **Population:** ~280 000  
   **Citizens:** Elves (45%), Humans (30%), Half-Elves (15%)
   **Ruler:** [[King Theodemar Yllaris Everfall]]
   **Guard:** [[Central Shields]]
   **Economy:** Very Wealthy
   **Industry**: Arcane Research, Enchanting, Education, Banking, Luxury Goods
   **Education:** Very High
   **Architecture:** White stone manors, decorative plaster facades, silver roofs, stained glass, elevated gardens, and tree-lined boulevards
   
 
## 🌟 City of Silvergrove
White stone towers and shining roofs catching the light above the canopy. Elegant bridges, arcane spires, and grand manor houses stretch across the hills, while glowing lanterns and floating crystals illuminate the streets below. Everything feels refined, wealthy, and carefully maintained, as if the city itself was designed to impress long before you ever stepped through its gates.
## 📜 Overview
Silvergrove City is one of the wealthiest and most educated cities of its region. Built among ancient silver barked groves and carefully maintained parks, it combines natural beauty with magical innovation. Scholars, artificers, mages, and wealthy merchants fill its streets, creating an atmosphere where knowledge is often valued as highly as gold.

The city is known for its prestigious academies, refined culture, and extensive magical infrastructure. Enchanted streetlights glow softly through the night, messenger constructs roam busy districts, and magical conveniences are common sights for citizens.

Silvergrove's influence comes from knowledge, research, and investment.
## 💰 Economy
Silvergrove's wealth is built on expertise rather than raw production.

- Arcane research and magical development
- Enchanting workshops and artificer guilds
- Banking and financial services
- Luxury craftsmanship and fine goods
- Education and scholarly institutions
- Magical consulting and contract services

Magic is not a rarity here.

It is infrastructure.
## 🎭 NPCs
- [[King Theodemar Yllaris Everfall]] - King
- Lucien Evercrest - Archmage, Master of the Grand Arcane Academy
- [[Silas Kade]] - Merchant and owner of [[The Seven Cats Inn]] network
- Commander Elowen Thorne - Captain General of the Silver Wardens
- Professor Aldric Wren - Renowned scholar of magical history
- Mirabelle Frost - Influential banking house director
- Varyn Hollowbrook - Master Enchanter of the Silver Spire Consortium
- [[Gaganesh Orvil Amon Thorne]] - Owner of [[Dynamic Office Of Reality]]
## 🗺️ Geography
Silvergrove City rises among rolling hills covered in ancient silver barked trees whose shimmering leaves give the city its name.

Wide stone avenues wind between elegant estates, arcane colleges, public gardens, and towering spires. Canals, decorative bridges, and carefully maintained parks divide districts, creating a city that feels more cultivated than constructed.

At night, magical lanterns illuminate the streets with soft silver light while floating guide crystals drift above major roads. The skyline is dominated by elegant towers, observatories, and academy halls rather than warehouses or fortifications.

The city feels wealthy, controlled, and quietly powerful.
#### Silvergrove
#### Roseward
#### Foxglove
#### Crystal Walk
#### Blossom Plaza
#### Moonhall
#### Velvet Garden
#### Crown Park
#### Ivory Chapel
#### Kingsgrove
#### Elmward
#### Birchfield 


```leaflet
id: silvergrove
image: [[Silvergrove City.png]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 8
unit: feat
scale: 1700
marker: Tavern, -7.4832, 5.4543, [[The Seven Cats Inn]]
marker: Tavern, -3.0578, 4.5479, [[The Seven Cats Inn]]
marker: Tavern, -6.0465, 7.1313, [[The Seven Cats Inn]]
marker: Tavern, -1.7926, 3.7231, [[The Seven Cats Inn]]
marker: Tavern, -6.3096, 3.6643, [[The Seven Cats Inn]]
marker: Tavern, -3.875, 3.0725, The Scholar's Rest 
marker: School, -3.5244, 3.3206, Grand Arcane Academy
marker: Sights, -6.8877, 5.6077, Silverspire Tower
marker: Business, -5.6719, 2.3989, Hall of Ledgers
marker: Sights, -4.8691, 2.3235, Moonhall Gardens
marker: Business, -6.3848, 2.6956, Seven Cats Central House
marker: Sights, -4.6211, 6.8643, Crystal Plaza
marker: Library, -3.4668, 4.8442, Eternal Archive
marker: Shop, -6.4778, 5.8381, [[Dynamic Office Of Reality]]

 








```
---
#### 🍺 Lodge
- [[The Seven Cats Inn]] - Five inn's spread out in the city   
    🪙🪙🪙🪙🪙
- The Scholar's Rest - Popular with professors and students  
    🪙🪙🪙⚪⚪
#### 🏛️ Landmarks
- Grand Arcane Academy - The region's most prestigious magical institution
- Silverspire Tower - Center of magical research and regulation
- Hall of Ledgers - Headquarters of major banking houses
- Moonhall Gardens - Famous public gardens illuminated by enchantments
- Seven Cats Central House - Administrative headquarters of [[The Seven Cats Inn]] network
- Crystal Plaza - Wealthy commercial and financial district
- Eternal Archive - An grand and old Library
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
WHERE contains(file.outlinks, [[World/Towns/Silvergrove City]])
AND Birth <= [[Settings]].Year
AND (!Death OR Death >= [[Settings]].Year)
SORT Birth ASC
```

