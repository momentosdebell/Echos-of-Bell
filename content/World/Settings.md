---
Updated: 2026-06-05
Year: 1542
---
## Info
In the YAML above named "Year", change the year depending on what timeline you want to be in and all "Status" of dead or alive will update (default is 1542).

## [[Timeline.canvas|Timeline]] 
We are currently living in years of AB, After Birth, this reffers to [[King Theodemar Yllaris Everfall]] father [[Theodore Akkar Yllaris]] Years before that is BA, Before Akkar

## Dead or Alive
```dataview
TABLE Birth, Death,
choice(
  Birth > this.Year,
  "",
  choice(
    Death AND Death < this.Year,
    Death - Birth,
    this.Year - Birth
  )
) AS Age,
choice(
  Birth > this.Year,
  "⚫ Not born",
  choice(
    Death AND Death < this.Year,
    "🔴 Dead (" +
      string(this.Year - Death) +
      " y ago, would be " +
      string(this.Year - Birth) +
      ")",
    "🟢 Alive"
  )
) AS Status
FROM ("World/NPC/Members" or "Family/People")
SORT (this.Year - Birth) DESC
```
