import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/folderCounter.inline"

export default (() => {
  const FolderCounter: QuartzComponent = () => {
    return null
  }
  FolderCounter.afterDOMLoad = script
  return FolderCounter
}) satisfies QuartzComponentConstructor