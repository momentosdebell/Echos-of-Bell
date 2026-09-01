import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Age: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const birth = fileData.frontmatter?.Birth
  const death = fileData.frontmatter?.Death

  if (!birth) {
    return null
  }

  const birthYear = Number(birth)

  if (isNaN(birthYear)) {
    return null
  }

  let age: number | null = null

  if (death) {
    const deathYear = Number(death)

    if (!isNaN(deathYear)) {
      age = deathYear - birthYear
    }
  }

  /*
   * Levande karaktärer behöver CurrentYear från
   * World/private Settings.md.
   *
   * Detta värde hämtas senare från Quartz data.
   */

  if (age === null) {
    return null
  }

  return (
    <div className="character-age">
      <span className="character-age-label">Age</span>
      <span className="character-age-value">{age}</span>
    </div>
  )
}

export default (() => Age) satisfies QuartzComponentConstructor