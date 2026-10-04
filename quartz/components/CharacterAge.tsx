import { QuartzTransformerPlugin } from "../types"

export const CharacterAge: QuartzTransformerPlugin = () => {
  return {
    name: "CharacterAge",
    markdownPlugins(ctx) {
      return [
        () => {
          return (tree, file) => {
            const frontmatter = file.data.frontmatter
            if (!frontmatter) return

            const rawBirth = frontmatter.Birth
            const rawDeath = frontmatter.Death

            if (rawBirth === undefined || rawBirth === null) return

            const birth = Number(rawBirth)
            const death = rawDeath !== undefined && rawDeath !== null ? Number(rawDeath) : undefined
            
            // Läser currentYear från config (default 1542)
            const currentYear = (ctx.cfg.configuration as any)?.currentYear ?? 1542

            if (isNaN(birth)) return

            let ageText = ""

            // 1. Ej född
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

            // Sätt Age direkt i frontmatter
            frontmatter.Age = ageText
          }
        },
      ]
    },
  }
}

export default CharacterAge