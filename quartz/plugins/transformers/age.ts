import fs from "fs"
import path from "path"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.join(process.cwd(), SETTINGS_PATH)

  if (!fs.existsSync(settingsPath)) {
    console.warn(`[Age] Settings file not found: ${settingsPath}`)
    return undefined
  }

  const source = fs.readFileSync(settingsPath, "utf8")

  const match = source.match(/CurrentYear:\s*(\d+)/)

  if (!match) {
    console.warn("[Age] CurrentYear not found in Settings.md")
    return undefined
  }

  return Number(match[1])
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(ctx, src) {
    return src
  },

  markdownPlugins(ctx) {
    return [
      () => {
        return (_tree: any, file: any) => {
          const filePath = String(file.data?.relativePath ?? "").replaceAll("\\", "/")

          // Only Family/People
          if (!filePath.startsWith(PEOPLE_PATH + "/")) {
            return
          }

          const frontmatter = file.data?.frontmatter

          if (!frontmatter) {
            return
          }

          // Age must exist in YAML
          if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
            return
          }

          const birth = Number(frontmatter.Birth)

          if (!Number.isFinite(birth)) {
            return
          }

          const currentYear = getCurrentYear()

          if (!Number.isFinite(currentYear)) {
            return
          }

          if (currentYear < birth) {
            frontmatter.Age = "Not born yet"
            return
          }

          const deathValue = frontmatter.Death

          if (
            deathValue !== undefined &&
            deathValue !== null &&
            deathValue !== ""
          ) {
            const death = Number(deathValue)

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

          frontmatter.Age = `${currentYear - birth} y/o`
        }
      }
    ]
  }
})

export default Age