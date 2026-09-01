import fs from "fs"
import path from "path"
import { QuartzTransformerPlugin } from "../types"

const PEOPLE_PATH = "Family/People/"
const SETTINGS_PATH = "World/Settings.md"

function getCurrentYear(): number | undefined {
  const settingsPath = path.resolve(process.cwd(), SETTINGS_PATH)

  if (!fs.existsSync(settingsPath)) {
    return undefined
  }

  const source = fs.readFileSync(settingsPath, "utf8")

  const match = source.match(/^\s*CurrentYear:\s*(\d+)\s*$/m)

  if (!match) {
    return undefined
  }

  const year = Number(match[1])

  return Number.isFinite(year) ? year : undefined
}

function calculateAge(
  birth: number,
  death: number | undefined,
  currentYear: number,
): string {
  if (currentYear < birth) {
    return "Not born yet"
  }

  if (death !== undefined && currentYear >= death) {
    const ageAtDeath = death - birth
    const yearsAgo = currentYear - death

    return `died at age ${ageAtDeath}, ${yearsAgo} years ago`
  }

  return `${currentYear - birth} y/o`
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(_ctx, src) {
    // Must have YAML frontmatter
    if (!src.startsWith("---")) {
      return src
    }

    const end = src.indexOf("\n---", 3)

    if (end === -1) {
      return src
    }

    const frontmatter = src.slice(3, end)

    // Only files containing an Age property
    const ageMatch = frontmatter.match(/^Age:\s*(.*)$/m)

    if (!ageMatch) {
      return src
    }

    // Only Family/People files.
    // We cannot get the path from textTransform, so we identify
    // character files by requiring Birth.
    const birthMatch = frontmatter.match(/^Birth:\s*(\d+)\s*$/m)

    if (!birthMatch) {
      return src
    }

    const birth = Number(birthMatch[1])

    if (!Number.isFinite(birth)) {
      return src
    }

    const currentYear = getCurrentYear()

    if (currentYear === undefined) {
      return src
    }

    const deathMatch = frontmatter.match(/^Death:\s*(\d+)\s*$/m)

    const death =
      deathMatch !== null
        ? Number(deathMatch[1])
        : undefined

    const age = calculateAge(
      birth,
      Number.isFinite(death) ? death : undefined,
      currentYear,
    )

    // Replace only the Age value.
    // The user's "Age:" stays in the YAML.
    const newFrontmatter = frontmatter.replace(
      /^Age:\s*.*$/m,
      `Age: ${age}`,
    )

    return `---${newFrontmatter}\n---${src.slice(end + 4)}`
  },

  markdownPlugins() {
    return []
  },
})

export default Age