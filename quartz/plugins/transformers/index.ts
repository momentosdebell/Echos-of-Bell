import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People/"
const SETTINGS_PATH = "World/Settings.md"

let currentYear: number | undefined

export const Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    markdownPlugins() {
      return [
        () => {
          return (tree: any, file: any) => {
            const filePath = file.path ?? ""

            // World/Settings.md
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

            // Bara Family/People
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
              return
            }

            // Inte född
            if (currentYear < birth) {
              frontmatter.Age = "Not born yet"
              return
            }

            // Har Death
            if (
              frontmatter.Death !== undefined &&
              frontmatter.Death !== null &&
              frontmatter.Death !== ""
            ) {
              const death = Number(frontmatter.Death)

              if (!Number.isFinite(death)) {
                return
              }

              // Personen är död enligt CurrentYear
              if (currentYear >= death) {
                const ageAtDeath = death - birth
                const yearsAgo = currentYear - death

                frontmatter.Age =
                  `died at age ${ageAtDeath}, ${yearsAgo} years ago`

                return
              }
            }

            // Personen lever
            frontmatter.Age = `${currentYear - birth} y/o`
          }
        },
      ]
    },
  }
}

export default Age