import { QuartzTransformerPlugin } from "../types"

const CalculateCharacterAge: QuartzTransformerPlugin = () => {
  return {
    name: "CalculateCharacterAge",
    markdownPlugins(ctx) {
      return [
        () => {
          return (tree, file) => {
            const frontmatter = file.data.frontmatter
            if (!frontmatter) return

            // Kör enbart om Age/age existerar i YAML
            const hasAgeProperty = "Age" in frontmatter || "age" in frontmatter
            if (!hasAgeProperty) return

            const birth = Number(frontmatter.Birth ?? frontmatter.birth)
            if (isNaN(birth)) return

            const currentYear = Number(ctx.cfg.configuration.currentYear)
            if (isNaN(currentYear)) return

            const rawDeath = frontmatter.Death ?? frontmatter.death
            const death = rawDeath !== undefined && rawDeath !== null && rawDeath !== "" 
              ? Number(rawDeath) 
              : undefined

            let ageText = ""

            if (birth > currentYear) {
              const yearsUntilBirth = birth - currentYear
              ageText = `${yearsUntilBirth}y before they were born`
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
              const age = currentYear - birth
              ageText = `${age}y/o`
            }

            // Tilldela åldern i minnet för note-properties
            frontmatter.Age = ageText
          }
        },
      ]
    },
  }
}

export default CalculateCharacterAge