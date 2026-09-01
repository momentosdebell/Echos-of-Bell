import fs from "fs"
import path from "path"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People/"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.join(process.cwd(), SETTINGS_PATH)

  if (!fs.existsSync(settingsPath)) {
    console.warn(`[Age] Could not find ${SETTINGS_PATH}`)
    return undefined
  }

  const content = fs.readFileSync(settingsPath, "utf8")

  const match = content.match(/^CurrentYear:\s*(\d+)/m)

  if (!match) {
    console.warn("[Age] Could not find CurrentYear in World/Settings.md")
    return undefined
  }

  const year = Number(match[1])

  return Number.isFinite(year) ? year : undefined
}

export const Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    markdownPlugins() {
      return [
        () => {
          return (_tree: any, file: any) => {
            const filePath = file.path ?? ""

            // Only Family/People
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

            const currentYear = getCurrentYear()

            if (currentYear === undefined) {
              return
            }

            // Not born yet
            if (currentYear < birth) {
              frontmatter.Age = "Not born yet"
              return
            }

            // Dead
            if (
              frontmatter.Death !== undefined &&
              frontmatter.Death !== null &&
              frontmatter.Death !== ""
            ) {
              const death = Number(frontmatter.Death)

              if (!Number.isFinite(death)) {
                return
              }

              if (currentYear >= death) {
                const ageAtDeath = death - birth
                const yearsAgo = currentYear - death

                frontmatter.Age =
                  `died at age ${ageAtDeath}, ${yearsAgo} years ago`

                return
              }
            }

            // Alive
            frontmatter.Age = `${currentYear - birth} y/o`
          }
        },
      ]
    },
  }
}

export default Age