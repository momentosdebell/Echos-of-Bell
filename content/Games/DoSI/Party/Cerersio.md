---
Updated: 2026-08-28
title: Cerersio
Img:
Player: Kevin
Gender: Male
Race: Goblin
Class: Fighter
draft: false
---
<style>
.dnd-stat { 
  --bg: #fdf1dc; 
  --border: #822014; 
  --box: rgba(130,32,20,0.04); 
  --text: #222222; 
  background: var(--bg); 
  border: 2px solid var(--border); 
  border-radius: 4px; 
  padding: 16px; 
  margin: 20px 0; 
  font-family: sans-serif; 
  color: var(--text) !important; 
} 

[saved-theme="dark"] .dnd-stat, [data-theme="dark"] .dnd-stat, .dark .dnd-stat { 
  --bg: #21201d; 
  --border: #5e170e; 
  --box: rgba(130,32,20,0.15); 
  --text: #c6c6c6; 
} 

.dnd-stat *, .dnd-stat *::before, .dnd-stat *::after { 
  color: inherit; 
} 

.dnd-stat-hdr { 
  border-bottom: 2px solid var(--border); 
  padding-bottom: 6px; 
  margin-bottom: 12px; 
  font-size: 1.4rem; 
  font-weight: bold; 
  color: var(--border) !important; 
  font-family: serif; 
} 

[saved-theme="dark"] .dnd-stat-hdr, [data-theme="dark"] .dnd-stat-hdr, .dark .dnd-stat-hdr { 
  color: #d96859 !important; 
  border-bottom-color: #822014; 
} 

.dnd-stat-row { 
  display: flex; 
  gap: 12px; 
  margin-bottom: 12px; 
} 

.dnd-stat-token { 
  flex: 0 0 250px; 
  width: 250px; 
  height: 250px; 
  background: var(--box); 
  border: 1px solid var(--border); 
  border-radius: 4px; 
  overflow: hidden; 
} 

.dnd-stat-token img { 
  display: block;
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  object-position: center center; 
} 

.dnd-stat-topgrid { 
  flex: 1; 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr); 
  gap: 6px; 
} 

.dnd-stat-box, .dnd-stat-item { 
  background: var(--box); 
  border: 1px solid var(--border); 
  border-radius: 4px; 
  padding: 4px; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
} 

.dnd-stat-grid { 
  display: grid; 
  grid-template-columns: repeat(6, 1fr); 
  gap: 6px; 
} 

.dnd-stat-lbl { 
  font-size: 0.7rem; 
  font-weight: bold; 
  letter-spacing: 1px; 
  color: var(--border) !important; 
} 

[saved-theme="dark"] .dnd-stat-lbl, [data-theme="dark"] .dnd-stat-lbl, .dark .dnd-stat-lbl { 
  color: #d96859 !important; 
} 

.dnd-stat-val { 
  font-size: 0.95rem; 
  font-weight: bold; 
} 

@media(max-width:600px) { 
  .dnd-stat-row { 
    flex-direction: column; 
    align-items: stretch; 
  } 
  .dnd-stat-token { 
    flex: none; 
    width: 100%; 
    height: auto;
    aspect-ratio: 1 / 1; 
  } 
  .dnd-stat-topgrid { 
    width: 100%; 
  } 
  .dnd-stat-grid { 
    grid-template-columns: repeat(3, 1fr); 
  } 
} 
</style>

<div class="dnd-stat">
  <div class="dnd-stat-hdr">Fighter Level 1</div>
  <div class="dnd-stat-row">
    <div class="dnd-stat-token">
      <img src="img/cerersio.png" alt="Token">
    </div>
    <div class="dnd-stat-topgrid">
      <div class="dnd-stat-box"><span class="dnd-stat-lbl">AC</span><span class="dnd-stat-val">13</span></div>
      <div class="dnd-stat-box"><span class="dnd-stat-lbl">MAX HP</span><span class="dnd-stat-val">13</span></div>
      <div class="dnd-stat-box"><span class="dnd-stat-lbl">SPEED</span><span class="dnd-stat-val">30ft</span></div>
      <div class="dnd-stat-box"><span class="dnd-stat-lbl">INITIATIVE</span><span class="dnd-stat-val">+3</span></div>
    </div>
  </div>
  <div class="dnd-stat-grid">
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">STR</span><span class="dnd-stat-val">14</span></div>
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">DEX</span><span class="dnd-stat-val">16</span></div>
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">CON</span><span class="dnd-stat-val">16</span></div>
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">INT</span><span class="dnd-stat-val">10</span></div>
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">WIS</span><span class="dnd-stat-val">12</span></div>
    <div class="dnd-stat-item"><span class="dnd-stat-lbl">CHA</span><span class="dnd-stat-val">19</span></div>
  </div>
</div>

## 📜Overview 
A rugged goblin clad in chainmail and a horned helmet, armed with a trident after escaping the fighting pits of [[Menzoberranzan]]. 