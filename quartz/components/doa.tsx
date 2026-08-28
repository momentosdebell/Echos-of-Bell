import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "quartz/components"

export default (() => {
  const CharacterStatus: QuartzComponent = ({ fileData, allFiles }) => {
    // 1. Hämta nuvarande kampanjår från Settings-sidan (sök på filnamnet)
    const settingsFile = allFiles.find(f => f.slug?.includes("Settings"))
    const year = settingsFile?.frontmatter?.Year ? Number(settingsFile.frontmatter.Year) : 1206

    // 2. Hämta födelse- och dödsår från karaktärens egen YAML
    const birth = fileData.frontmatter?.Birth
    const death = fileData.frontmatter?.Death

    if (typeof birth !== "number") return null

    let status = ""
    let ageText = ""

    if (birth > year) {
      status = "⚫ Not born"
    } else if (typeof death === "number" && death < year) {
      status = "🔴 Dead"
      ageText = ` | Died at ${death - birth} y/o | ${year - death} years ago`
    } else {
      status = "🟢 Alive"
      ageText = ` | Age: ${year - birth} y/o`
    }

    return (
      <div className="character-status-badge" style={{ fontSize: "0.9rem", opacity: 0.85, marginBottom: "1rem" }}>
        <span>{status}{ageText}</span>
      </div>
    )
  }

  return CharacterStatus
}) satisfies QuartzComponentConstructor