import fs from "node:fs"
import path from "node:path"
import YAML from "yaml"
import type { QuartzTransformerPlugin } from "../types"

let currentYear: number | null = null

function getCurrentYear(contentDir: string): number | null {
  if (currentYear !== null) {
    return currentYear
  }

  const settingsPath = path.join(contentDir, "World", "Settings.md")

  if (!fs.existsSync(settingsPath)) {
    console.warn("[Age] Could not find World/Settings.md")
    return null
  }

  const settings = fs.readFileSync(settingsPath, "utf8")

  const match = settings.match(/^\s*CurrentYear\s*:\s*(\d+)\s*$/m)

  if (!match) {
    console.warn("[Age] Could not find CurrentYear in World/Settings.md")
    return null
  }

  currentYear = Number(match[1])

  return currentYear
}

function calculateAge(birth: number, death: number | null, year: number): string {
  if (year < birth) {
    return "Not born yet"
  }

  if (death !== null && year >= death) {
    const age = death - birth
    const yearsAgo = year - death

    return `died at age ${age}, ${yearsAgo} years ago`
  }

  return `${year - birth} y/o`
}

export const Age: QuartzTransformerPlugin = () => ({
  name: "Age",

  textTransform(ctx, src) {
    const filePath = ctx.argv.directory

    const normalizedPath = filePath.replaceAll("\\", "/")

    // Only process Family/People/*.md
    if (!normalizedPath.includes("/Family/People/")) {
      return src
    }

    if (!normalizedPath.endsWith(".md")) {
      return src
    }

    const year = getCurrentYear(ctx.argv.directory)

    if (year === null) {
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

    const frontmatterText = src.slice(4, end)

    let frontmatter: Record<string, unknown>

    try {
      frontmatter = YAML.parse(frontmatterText) ?? {}
    } catch {
      console.warn(`[Age] Could not parse YAML in ${filePath}`)
      return src
    }

    const birth = Number(frontmatter.Birth)

    if (!Number.isFinite(birth)) {
      return src
    }

    const deathValue = frontmatter.Death
    const death =
      deathValue !== undefined &&
      deathValue !== null &&
      deathValue !== ""
        ? Number(deathValue)
        : null

    if (death !== null && !Number.isFinite(death)) {
      return src
    }

    frontmatter.Age = calculateAge(birth, death, year)

    const newFrontmatter = YAML.stringify(frontmatter).trimEnd()

    return `---\n${newFrontmatter}\n---${src.slice(end + 4)}`
  },
})