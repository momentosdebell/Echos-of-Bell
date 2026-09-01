import fs from "fs"
import path from "path"
import YAML from "yaml"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.join(process.cwd(), SETTINGS_PATH)

  if (!fs.existsSync(settingsPath)) {
    return undefined
  }

  const source = fs.readFileSync(settingsPath, "utf8")
  const match = source.match(/^CurrentYear:\s*(\d+)\s*$/m)

  if (!match) {
    return undefined
  }

  const year = Number(match[1])

  return Number.isFinite(year) ? year : undefined
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(_ctx, src) {
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

    // Age must exist in the character YAML
    if (!Object.prototype.hasOwnProperty.call(frontmatter, "Age")) {
      return src
    }

    // Birth is required
    const birth = Number(frontmatter.Birth)

    if (!Number.isFinite(birth)) {
      return src
    }

    const currentYear = getCurrentYear()

    if (currentYear === undefined) {
      return src
    }

    let age: string

    // Not born yet
    if (currentYear < birth) {
      age = "Not born yet"
    } else {
      const death = Number(frontmatter.Death)

      // Dead
      if (Number.isFinite(death) && currentYear >= death) {
        const ageAtDeath = death - birth
        const yearsAgo = currentYear - death

        age = `died at age ${ageAtDeath}, ${yearsAgo} years ago`
      } else {
        // Alive
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
})

export default Age