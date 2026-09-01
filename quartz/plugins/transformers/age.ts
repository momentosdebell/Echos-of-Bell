import fs from "fs"
import path from "path"
import YAML from "yaml"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People/"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.join(process.cwd(), SETTINGS_PATH)

  if (!fs.existsSync(settingsPath)) {
    console.warn(`[Age] Could not find ${SETTINGS_PATH}`)
    return undefined
  }

  const source = fs.readFileSync(settingsPath, "utf8")
  const match = source.match(/^CurrentYear:\s*(\d+)\s*$/m)

  if (!match) {
    console.warn(`[Age] Could not find CurrentYear in ${SETTINGS_PATH}`)
    return undefined
  }

  const year = Number(match[1])

  return Number.isFinite(year) ? year : undefined
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(ctx, src) {
    const currentYear = getCurrentYear()

    if (currentYear === undefined) {
      return src
    }

    if (!src.startsWith("---")) {
      return src
    }

    const end = src.indexOf("\n---", 3)

    if (end === -1) {
      return src
    }

    const yamlText = src.slice(3, end)
    const body = src.slice(end + 4)

    let frontmatter: Record<string, any>

    try {
      frontmatter = YAML.parse(yamlText) ?? {}
    } catch {
      return src
    }

    // Age must be manually added to the character YAML.
    // Example:
    //
    // Age:
    //
    if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
      return src
    }

    // Birth is required.
    if (frontmatter.Birth === undefined || frontmatter.Birth === null) {
      return src
    }

    const birth = Number(frontmatter.Birth)

    if (!Number.isFinite(birth)) {
      return src
    }

    let age: string

    // Character has not been born yet.
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
          return src
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

    // Replace the existing empty Age: value.
    frontmatter.Age = age

    const newYaml = YAML.stringify(frontmatter).trim()

    return `---\n${newYaml}\n---${body}`
  },

  markdownPlugins() {
    return []
  },
})

export default Age