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
export { CalculateCharacterAge } from "./characterAge"
