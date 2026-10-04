import { QuartzTransformerPlugin } from "../types"

export const CalculateCharacterAge: QuartzTransformerPlugin = () => {
  return {
    name: "CalculateCharacterAge",
    markdownPlugins(ctx) {
      return [
        () => {
          return (tree, file) => {
            const frontmatter = file.data.frontmatter
            if (!frontmatter) return

            // 1. Kör bara om Age / age existerar i frontmatter
            const hasAgeProperty = "Age" in frontmatter || "age" in frontmatter
            if (!hasAgeProperty) return

            // 2. Kontrollera Birth
            const birth = Number(frontmatter.Birth ?? frontmatter.birth)
            if (isNaN(birth)) return

            // 3. Hämta currentYear dynamiskt från quartz.config.yaml
            const currentYear = Number(ctx.cfg.configuration.currentYear)
            if (isNaN(currentYear)) return

            const rawDeath = frontmatter.Death ?? frontmatter.death
            const death = rawDeath !== undefined && rawDeath !== null && rawDeath !== "" 
              ? Number(rawDeath) 
              : undefined

            let ageText = ""

            // 1. Ej född än
            if (birth > currentYear) {
              const yearsUntilBirth = birth - currentYear
              ageText = `${yearsUntilBirth}y before they were born`
            } 
            // 2. Död
            else if (death !== undefined && !isNaN(death)) {
              const ageAtDeath = death - birth
              const yearsAgo = currentYear - death

              if (yearsAgo < 0) {
                ageText = `Died at ${ageAtDeath}y/o`
              } else if (yearsAgo === 0) {
                ageText = `Died this year at ${ageAtDeath}y/o`
              } else {
                ageText = `Died ${yearsAgo} years ago at ${ageAtDeath}y/o`
              }
            } 
            // 3. Levande
            else {
              const age = currentYear - birth
              ageText = `${age}y/o`
            }

            // Tilldela den färdiga texten
            frontmatter.Age = ageText
          }
        },
      ]
    },
  }
}