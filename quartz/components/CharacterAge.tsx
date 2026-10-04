// quartz/components/CharacterAge.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CharacterAge: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    const rawBirth = fileData.frontmatter?.Birth
    const rawDeath = fileData.frontmatter?.Death

    if (rawBirth === undefined || rawBirth === null) return null

    const birth = Number(rawBirth)
    const death = rawDeath !== undefined && rawDeath !== null ? Number(rawDeath) : undefined
    
    // Läser currentYear från din yaml-config (1542)
    const currentYear = (cfg.configuration as any)?.currentYear ?? 1542

    if (isNaN(birth)) return null

    let statusText = ""

    // 1. Ej född
    if (birth > currentYear) {
      const yearsUntilBirth = birth - currentYear
      statusText = `${yearsUntilBirth}y before they were born`
    }
    // 2. Död
    else if (death !== undefined && !isNaN(death)) {
      const ageAtDeath = death - birth
      const yearsAgo = currentYear - death

      if (yearsAgo < 0) {
        statusText = `Died at ${ageAtDeath}y/o`
      } else if (yearsAgo === 0) {
        statusText = `Died this year at ${ageAtDeath}y/o`
      } else {
        statusText = `Died ${yearsAgo} years ago at ${ageAtDeath}y/o`
      }
    }
    // 3. Levande
    else {
      const age = currentYear - birth
      statusText = `${age}y/o`
    }

    return (
      <div className="character-age-status" style={{ fontStyle: "italic", opacity: 0.85, marginTop: "0.2rem" }}>
        <span>{statusText}</span>
      </div>
    )
  }

  return CharacterAge
}) satisfies QuartzComponentConstructor