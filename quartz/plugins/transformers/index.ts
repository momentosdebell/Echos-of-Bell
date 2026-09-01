import fs from "fs"
import path from "path"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.resolve(process.cwd(), SETTINGS_PATH)

  console.log(`[Age] Looking for Settings: ${settingsPath}`)

  if (!fs.existsSync(settingsPath)) {
    console.log(`[Age] Settings file NOT FOUND`)
    return undefined
  }

  const source = fs.readFileSync(settingsPath, "utf8")

  const match = source.match(/CurrentYear:\s*(\d+)/)

  if (!match) {
    console.log(`[Age] CurrentYear NOT FOUND`)
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
          const relativePath = String(
            file.data?.relativePath ?? "",
          ).replaceAll("\\", "/")

          // Only Family/People
          if (!relativePath.startsWith(`${PEOPLE_PATH}/`)) {
            return
          }

          const frontmatter = file.data?.frontmatter

          if (!frontmatter) {
            console.log(`[Age] No frontmatter: ${relativePath}`)
            return
          }

          // Age must exist in YAML
          if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
            return
          }

          console.log(`[Age] Processing: ${relativePath}`)

          const birth = Number(frontmatter.Birth)

          if (!Number.isFinite(birth)) {
            console.log(`[Age] Invalid Birth: ${relativePath}`)
            return
          }

          const currentYear = getCurrentYear()

          if (currentYear === undefined) {
            return
          }

          let age: string

          // Not born yet
          if (currentYear < birth) {
            age = "Not born yet"
          } else {
            const deathValue = frontmatter.Death

            const hasDeath =
              deathValue !== undefined &&
              deathValue !== null &&
              deathValue !== ""

            // Dead
            if (hasDeath) {
              const death = Number(deathValue)

              if (!Number.isFinite(death)) {
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
              // Alive
              age = `${currentYear - birth} y/o`
            }
          }

          frontmatter.Age = age

          console.log(`[Age] ${relativePath} -> ${age}`)
        }
      },
    ]
  },
})

export default Age