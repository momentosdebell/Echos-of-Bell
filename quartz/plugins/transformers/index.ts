```ts
import { QuartzTransformerPlugin } from "../types"

const SETTINGS_PATH = "World/Settings.md"
const PEOPLE_PATH = "Family/People/"

export default Age: QuartzTransformerPlugin = () => {
  return {
    name: "Age",

    textTransform(ctx, src) {
      // We only need the source text here.
      // The actual frontmatter modification happens below in markdownPlugins.
      return src
    },

    markdownPlugins(ctx) {
      return [
        () => {
          return (tree: any, file: any) => {
            const filePath = file.path ?? ""

            // Only process characters inside Family/People
            if (!filePath.startsWith(PEOPLE_PATH)) {
              return
            }

            // Settings.md is handled separately.
            if (filePath === SETTINGS_PATH) {
              return
            }

            const frontmatter = file.data?.frontmatter

            if (!frontmatter) {
              return
            }

            const birth = Number(frontmatter.Birth)
            const death =
              frontmatter.Death !== undefined &&
              frontmatter.Death !== null &&
              frontmatter.Death !== ""
                ? Number(frontmatter.Death)
                : undefined

            // No valid Birth = nothing to calculate
            if (!Number.isFinite(birth)) {
              return
            }

            // Find CurrentYear from all processed files
            const currentYear = findCurrentYear(ctx)

            if (currentYear === undefined) {
              console.warn(
                `[Age] Could not find CurrentYear in ${SETTINGS_PATH}`,
              )
              return
            }

            let age: string

            // Character has not been born yet
            if (currentYear < birth) {
              age = "Not born yet"
            }
            // Character is dead
            else if (death !== undefined && currentYear >= death) {
              const ageAtDeath = death - birth
              const yearsAgo = currentYear - death

              age = `died at age ${ageAtDeath}, ${yearsAgo} years ago`
            }
            // Character is alive
            else {
              const currentAge = currentYear - birth
              age = `${currentAge} y/o`
            }

            // Add calculated Age to the frontmatter data.
            frontmatter.Age = age
          }
        },
      ]
    },
  }
}

function findCurrentYear(ctx: any): number | undefined {
  const settingsFile = ctx.allFiles?.find(
    (file: string) => file === SETTINGS_PATH,
  )

  if (!settingsFile) {
    return undefined
  }

  // CurrentYear is retrieved from the Settings page during processing.
  const settingsData = ctx.trie?.findNode(["World", "Settings", "index"])?.data

  const currentYear = settingsData?.frontmatter?.CurrentYear

  if (currentYear === undefined || currentYear === null || currentYear === "") {
    return undefined
  }

  const year = Number(currentYear)

  return Number.isFinite(year) ? year : undefined
}
```
