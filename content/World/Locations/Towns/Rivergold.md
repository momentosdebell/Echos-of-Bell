---
Updated: 2026-08-31
title: Rivergold
Type: City
Location:
Vibe:
  - Bureaucratic
  - Regulated
Custodian: "[[Arthur Wolfric McGlagen II]]"
Population: "7000"
Cityzens:
  - Human
  - Half-Orc
  - Half-Elf 
Economy:
  - Logistics
draft: false
---
## 🌟City of Rivergold

Rivergold is a tightly built river trade town where stone walls, narrow streets, and stacked warehouses rise directly from the riverbanks. Barges and cargo ships fill the docks in constant rotation, feeding the city’s role as the main control point between inland trade and downstream export routes. 
The city feels structured and controlled, shaped by contracts, customs, and logistics. Bells, ledgers, and dock signals set the rhythm of daily life, and the river itself feels less like nature and more like infrastructure.
## 📜 Overview

Rivergold is a prosperous river trade town built around movement, contracts, and commerce. Sitting downstream from [[Ambervale]], it serves as the primary customs and distribution hub for goods moving through the region. While smaller than many trade cities, its strategic location gives it influence far beyond its size.

It is structured and deliberate. Goods are counted, records are kept, and nearly every shipment passing through town leaves behind a fee, signature, or tax stamp. The town feels busy, organized, and constantly in motion.

Security in Rivergold is strict and tightly controlled, with a strong visible guard presence across docks, gates, and main trade routes. Movement of people and cargo is regularly checked, and most access points are monitored to ensure nothing passes without authorization or record.

## 💰 Economy

The wealth comes not from what it produces, but from what passes through it. Customs fees, cargo storage, brokerage services, shipping contracts, and trade taxation form the backbone of the local economy.

Merchants, warehouse owners, dockmasters, and shipping guilds hold considerable influence. Success here is measured in efficiency, connections, and control over trade routes rather than ownership of land.

Education is highly valued, particularly literacy, accounting, and contract law. A respected trade academy trains clerks, merchants, and administrators who help keep the city's complex flow of goods moving smoothly.

## 🎭 NPCs

- [[Arthur Wolfric McGlagen II]] - Lord Proprietor
- Garruk Ironmark - Head Customs Officer 
- Professor Cedric Vale - Trade Academy Headmaster
- Marina Holt - Harbormaster
    
## 🗺️ Geography

Rivergold rises from the riverbanks behind thick stone walls, its tightly packed buildings climbing above warehouses and busy docks. Slate roofs, merchant halls, cranes, and watchtowers dominate the skyline, while the river remains visible from nearly every district.

The town is built for function. Streets are narrower and more organized, funneling traffic toward markets, warehouses, and loading platforms. Stone bridges cross canals and drainage channels designed to manage seasonal flooding, while elevated roads connect the harbor to inland trade routes.

Bells ring from dock towers, merchants negotiate in crowded plazas, and cargo wagons rumble through the streets from dawn until well after sunset.

The **Trade Academy** stands slightly elevated above the harbor district, a structured stone complex where future merchants, clerks, and administrators are trained. Its presence reinforces Rivergold’s identity as a city built on education in trade, contracts, and logistics, and its bell marks the rhythm of study hours as much as the docks mark the rhythm of trade.

#### The Wet Foundry
The most heavily guarded district in Rivergold. This is where customs, harbor control, and taxation are enforced. Every ship, crate, and coin entering the city passes through here.
#### Candlebank
A major trade and shopping district on the opposite riverbank. Heavily monitored but lively, it is where merchants, travelers, and locals mix under constant watch.
#### Brightwater
The refined upper district, home to wealthy families and the city’s main school. Quiet, orderly, and carefully separated from the harsher parts of the city.
#### Drybank
A working-class district with mixed housing and labor spaces. Practical, worn, and essential to keeping the city functioning day to day.
#### The Broken Wharf
A dense, overcrowded ocean district where all classes blur together. Built around old docks, it is chaotic but central to city life.
#### Old Spillway
The outer agricultural and residential expansion zone. Larger plots, slower life.
#### Greenedge
The oldest surviving part of Rivergold. A blend of early settlement homes and old trade paths, still active but layered with history.
#### Cinderlane
A residential district filled with vacation homes, and long-stay visitors. Many wealthy merchants and foreign families keep secondary homes here, giving it a quiet but constantly shifting population.


```leaflet
id: rivergold
image: [[Rivergold.png]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 8
unit: feat
scale: 1700
marker: Tavern, -2.6165, 1.9739, [[The Seven Cats Inn]]
marker: Tavern, -1.5403, 1.7678,Ledger & Lantern
marker: Tavern, -2.0247, 0.6829,The Wet Coin
marker: Sights, -1.6165, 1.6448, Hall of Contracts
marker: School, -2.7112, 2.0461, Trade Academy
marker: Sights, -1.5553, 1.9517, Customs Hall
marker: Sights, -2.0237, 2.1614, Tidegate
```
---

#### 🍺 Lodge
- [[The Seven Cats Inn]] - Tavern Chain, by the school
  🪙🪙🪙🪙🪙
- Ledger & Lantern - By the docks
    🪙🪙🪙⚪⚪
- The Wet Coin - Main road in to the docks
    🪙🪙⚪⚪⚪
#### 🏛️ Landmarks
- Hall of Contracts - city hall
- Trade Academy - the region's most respected merchant school
- Customs Hall - where cargo is inspected and taxed
- Tidegate - massive canal locks controlling river flow
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
WHERE contains(file.outlinks, [[World/Towns/Rivergold]])
AND Birth <= [[Settings]].Year
AND (!Death OR Death >= [[Settings]].Year)
SORT Birth ASC
```
