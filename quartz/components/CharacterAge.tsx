import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const CharacterAge: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter
  if (!frontmatter) return null

  // Kör bara om "Age" eller "age" finns i YAML
  const hasAge = "Age" in frontmatter || "age" in frontmatter
  if (!hasAge) return null

  const birth = Number(frontmatter.Birth ?? frontmatter.birth)
  if (isNaN(birth)) return null

  // Hämta currentYear från config (standard 1542 om det saknas)
  const currentYear = Number(cfg.configuration.currentYear) || 1542
  const rawDeath = frontmatter.Death ?? frontmatter.death
  const death = rawDeath !== undefined && rawDeath !== null && rawDeath !== "" ? Number(rawDeath) : undefined

  let ageText = ""

  if (birth > currentYear) {
    ageText = `${birth - currentYear}y before they were born`
  } else if (death !== undefined && !isNaN(death)) {
    const ageAtDeath = death - birth
    const yearsAgo = currentYear - death
    if (yearsAgo < 0) {
      ageText = `Died at ${ageAtDeath}y/o`
    } else if (yearsAgo === 0) {
      ageText = `Died this year at ${ageAtDeath}y/o`
    } else {
      ageText = `Died ${yearsAgo} years ago at ${ageAtDeath}y/o`
    }
  } else {
    ageText = `${currentYear - birth}y/o`
  }

  return (
    <div className="character-age">
      <span><strong>Age:</strong> {ageText}</span>
    </div>
  )
}

export default (() => CharacterAge) satisfies QuartzComponentConstructor