import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People/"
const SETTINGS_PATH = "World/Settings.md"

let currentYear: number | undefined

export const Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    textTransform(ctx, src) {
      return src
    },

    markdownPlugins(ctx) {
      return [
        () => {
          return (tree: any, file: any) => {
            const filePath = file.path ?? ""

            // Read CurrentYear from World/Settings.md
            if (filePath === SETTINGS_PATH) {
              const frontmatter = file.data?.frontmatter

              if (frontmatter?.CurrentYear !== undefined) {
                const year = Number(frontmatter.CurrentYear)

                if (Number.isFinite(year)) {
                  currentYear = year
                }
              }

              return
            }

            // Only process characters in Family/People
            if (!filePath.startsWith(PEOPLE_PATH)) {
              return
            }

            const frontmatter = file.data?.frontmatter

            if (!frontmatter) {
              return
            }

            const birth = Number(frontmatter.Birth)

            if (!Number.isFinite(birth)) {
              return
            }

            if (currentYear === undefined) {
              console.warn(
                "[Age] Could not find CurrentYear in World/Settings.md",
              )
              return
            }

            let age: string

            // Character has not been born yet
            if (currentYear < birth) {
              age = "Not born yet"
            }
            // Character is dead
            else if (
              frontmatter.Death !== undefined &&
              frontmatter.Death !== null &&
              frontmatter.Death !== ""
            ) {
              const death = Number(frontmatter.Death)

              if (!Number.isFinite(death)) {
                return
              }

              const ageAtDeath = death - birth
              const yearsAgo = currentYear - death

              if (currentYear >= death) {
                age = `died at age ${ageAtDeath}, ${yearsAgo} years ago`
              } else {
                age = `${currentYear - birth} y/o`
              }
            }
            // Character is alive
            else {
              age = `${currentYear - birth} y/o`
            }

            frontmatter.Age = age
          }
        },
      ]
    },
  }
}

export default Age