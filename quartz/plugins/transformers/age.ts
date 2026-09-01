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

  const year = Number(match[1])

  console.log(`[Age] CurrentYear = ${year}`)

  return Number.isFinite(year) ? year : undefined
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(_ctx, src) {
    return src
  },

  markdownPlugins() {
    return [
      () => {
        return (_tree: any, file: any) => {
          const filePath = String(
            file.data?.relativePath ?? "",
          ).replaceAll("\\", "/")

          // Only Family/People
          if (!filePath.startsWith(PEOPLE_PATH + "/")) {
            return
          }

          console.log("[AGE TEST]", {
            file: filePath,
            frontmatter: file.data?.frontmatter,
          })

          const frontmatter = file.data?.frontmatter

          if (!frontmatter) {
            console.log("[AGE TEST] No frontmatter")
            return
          }

          if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
            console.log("[AGE TEST] No Age property")
            return
          }

          const birth = Number(frontmatter.Birth)

          if (!Number.isFinite(birth)) {
            console.log("[AGE TEST] Invalid Birth:", frontmatter.Birth)
            return
          }

          const currentYear = getCurrentYear()

          if (currentYear === undefined) {
            console.log("[AGE TEST] No CurrentYear")
            return
          }

          let age: string

          if (currentYear < birth) {
            age = "Not born yet"
          } else {
            const deathValue = frontmatter.Death

            const hasDeath =
              deathValue !== undefined &&
              deathValue !== null &&
              deathValue !== ""

            if (hasDeath) {
              const death = Number(deathValue)

              if (!Number.isFinite(death)) {
                console.log("[AGE TEST] Invalid Death:", deathValue)
                return
              }

              if (currentYear >= death) {
                const ageAtDeath = death - birth
                const yearsAgo = currentYear - death

                age = `died at age ${ageAtDeath}, ${yearsAgo} years ago`
              } else {
                age = `${currentYear - birth} y/o`
              }
            } else {
              age = `${currentYear - birth} y/o`
            }
          }

          frontmatter.Age = age

          console.log(`[AGE RESULT] ${filePath} -> ${age}`)
        }
      },
    ]
  },
})

export default Age