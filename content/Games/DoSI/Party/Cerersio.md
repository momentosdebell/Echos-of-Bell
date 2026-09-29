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
.dnd-statblock-stream {
  --dnd-bg: #fdf1dc;
  --dnd-border: #822014;
  --dnd-box-bg: rgba(130, 32, 20, 0.04);
  --dnd-box-border: rgba(130, 32, 20, 0.15);
  --dnd-text: #222222;
  --dnd-label-color: #822014;

  background: var(--dnd-bg);
  border: 2px solid var(--dnd-border);
  border-radius: 4px;
  padding: 16px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: sans-serif;
  max-width: 100%;
  color: var(--dnd-text) !important;
}

[saved-theme="dark"] .dnd-statblock-stream,
[data-theme="dark"] .dnd-statblock-stream,
.dark .dnd-statblock-stream {
  --dnd-bg: #1c1816;
  --dnd-border: #9e3b2e;
  --dnd-box-bg: rgba(158, 59, 46, 0.12);
  --dnd-box-border: rgba(158, 59, 46, 0.3);
  --dnd-text: #e6dfd3;
  --dnd-label-color: #d95343;
}

.dnd-statblock-stream *, 
.dnd-statblock-stream *::before, 
.dnd-statblock-stream *::after {
  color: inherit;
}

.dnd-statblock-stream .stat-header {
  border-bottom: 2px solid var(--dnd-border);
  padding-bottom: 6px;
  margin-bottom: 12px;
}

.dnd-statblock-stream .char-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--dnd-label-color) !important;
  font-family: serif;
  letter-spacing: 0.5px;
}

.dnd-statblock-stream .middle-row {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: stretch;
}

.dnd-statblock-stream .token-box {
  flex: 0 0 250px;
  width: 250px;
  height: 250px;
  background: var(--dnd-box-bg);
  border: 1px solid var(--dnd-box-border);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.dnd-statblock-stream .stat-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.dnd-statblock-stream .top-stats-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 6px;
}

.dnd-statblock-stream .top-stat-box {
  background: var(--dnd-box-bg);
  border: 1px solid var(--dnd-box-border);
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.dnd-statblock-stream .stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 6px;
  text-align: center;
}

.dnd-statblock-stream .stat-item {
  background: var(--dnd-box-bg);
  border: 1px solid var(--dnd-box-border);
  border-radius: 4px;
  padding: 6px;
  display: flex;
  flex-direction: column;
}

.dnd-statblock-stream .label {
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--dnd-label-color) !important;
}

.dnd-statblock-stream .val {
  font-size: 0.95rem;
  font-weight: bold;
}

@media (max-width: 600px) {
  .dnd-statblock-stream .middle-row {
    flex-direction: column;
    align-items: center;
  }
  .dnd-statblock-stream .token-box {
    flex: 0 0 180px;
    width: 180px;
    height: 180px;
  }
  .dnd-statblock-stream .top-stats-grid {
    width: 100%;
  }
}
</style>

<div class="dnd-statblock-stream">
  <div class="stat-header">
    <div class="char-title">Karaktärsnamn (Level 5)</div>
  </div>

  <div class="middle-row">
    <div class="token-box">
      <img src="https://momentosdebell.github.io/Echos-of-Bell/world/private/img/noimg.png" class="stat-portrait" alt="Porträtt">
    </div>
    
    <div class="top-stats-grid">
      <div class="top-stat-box">
        <span class="label">AC</span>
        <span class="val">16</span>
      </div>
      <div class="top-stat-box">
        <span class="label">MAX HP</span>
        <span class="val">52</span>
      </div>
      <div class="top-stat-box">
        <span class="label">SPEED</span>
        <span class="val">30ft</span>
      </div>
      <div class="top-stat-box">
        <span class="label">INIT</span>
        <span class="val">+3</span>
      </div>
    </div>
  </div>

  <div class="stat-grid">
    <div class="stat-item">
      <span class="label">STR</span>
      <span class="val">10</span>
    </div>
    <div class="stat-item">
      <span class="label">DEX</span>
      <span class="val">16</span>
    </div>
    <div class="stat-item">
      <span class="label">CON</span>
      <span class="val">14</span>
    </div>
    <div class="stat-item">
      <span class="label">INT</span>
      <span class="val">12</span>
    </div>
    <div class="stat-item">
      <span class="label">WIS</span>
      <span class="val">13</span>
    </div>
    <div class="stat-item">
      <span class="label">CHA</span>
      <span class="val">18</span>
    </div>
  </div>
</div>