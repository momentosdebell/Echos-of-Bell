import fs from "fs"
import path from "path"
import YAML from "yaml"
import { QuartzTransformerPlugin } from "../types"

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
    console.warn("[Age] Could not find CurrentYear in Settings.md")
    return undefined
  }

  const year = Number(match[1])

  return Number.isFinite(year) ? year : undefined
}

export const Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    textTransform(_ctx, src) {
      // Only process files that already have an Age property.
      if (!/^Age:\s*$/m.test(src)) {
        return src
      }

      const currentYear = getCurrentYear()

      if (currentYear === undefined) {
        return src
      }

      // Find YAML frontmatter
      if (!src.startsWith("---")) {
        return src
      }

      const end = src.indexOf("\n---", 3)

      if (end === -1) {
        return src
      }

      const yamlText = src.slice(3, end)
      const body = src.slice(end + 4)

      let frontmatter: Record<string, unknown>

      try {
        frontmatter = YAML.parse(yamlText) ?? {}
      } catch {
        return src
      }

      // Age must explicitly exist in the frontmatter.
      if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
        return src
      }

      // Birth is required.
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

        // Character is dead.
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
            // Death is in the future, so character is still alive.
            age = `${currentYear - birth} y/o`
          }
        } else {
          // Character is alive.
          age = `${currentYear - birth} y/o`
        }
      }

      frontmatter.Age = age

      const newYaml = YAML.stringify(frontmatter).trim()

      return `---\n${newYaml}\n---${body}`
    },

    markdownPlugins() {
      return []
    },
  }
}

export default Age