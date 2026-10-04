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

            // Kör om Age eller age finns i YAML (oavsett om det står "?", är tomt eller har fnuttar)
            const hasAgeProperty = "Age" in frontmatter || "age" in frontmatter
            if (!hasAgeProperty) return

            const birth = Number(frontmatter.Birth ?? frontmatter.birth)
            if (isNaN(birth)) return

            // Hämta currentYear från config (standard 1542 om det saknas)
            const currentYear = Number(ctx.cfg.configuration.currentYear) || 1542

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

            // Skriv över på alla ställen Quartz läser ifrån
            frontmatter.Age = ageText
            frontmatter.age = ageText
          }
        },
      ]
    },
  }
}

export default CalculateCharacterAge