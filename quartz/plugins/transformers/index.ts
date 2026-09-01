import { QuartzTransformerPlugin } from "../types"

const SETTINGS_PATH = "World/Settings.md"

let currentYear: number | undefined

export const Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    textTransform(_ctx, src) {
      return src
    },

    markdownPlugins(_ctx) {
      return [
        () => {
          return (_tree: any, file: any) => {
            const rawPath = file.path ?? ""
            const filePath = rawPath.replace(/\\/g, "/")

            // Read CurrentYear from World/Settings.md
            if (
              filePath === SETTINGS_PATH ||
              filePath.endsWith(`/${SETTINGS_PATH}`)
            ) {
              const frontmatter = file.data?.frontmatter

              if (frontmatter?.CurrentYear !== undefined) {
                const year = Number(frontmatter.CurrentYear)

                if (Number.isFinite(year)) {
                  currentYear = year
                }
              }

              return
            }

            // Only process markdown files inside Family/People
            if (!/(^|\/)Family\/People\/.+\.md$/.test(filePath)) {
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
            } else {
              const hasDeath =
                frontmatter.Death !== undefined &&
                frontmatter.Death !== null &&
                frontmatter.Death !== ""

              // Character has a valid Death year
              if (hasDeath) {
                const death = Number(frontmatter.Death)

                if (!Number.isFinite(death)) {
                  return
                }

                // Character is dead
                if (currentYear >= death) {
                  const ageAtDeath = death - birth
                  const yearsAgo = currentYear - death

                  age = `died at age ${ageAtDeath}, ${yearsAgo} years ago`
                } else {
                  // Death is in the future
                  age = `${currentYear - birth} y/o`
                }
              } else {
                // Character is alive
                age = `${currentYear - birth} y/o`
              }
            }

            frontmatter.Age = age
          }
        },
      ]
    },
  }
}

export default Age

