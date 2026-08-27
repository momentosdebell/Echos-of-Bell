import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const CharacterPortrait: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // Hämtar värdet från Img i din YAML
    const imgValue = fileData.frontmatter?.Img || fileData.frontmatter?.image
    if (!imgValue) return null

    // Renodlar om det är skrivet som [[Bild.png]] till en ren sträng
    const cleanPath = String(imgValue).replace(/\[\[|\]\]/g, "").trim()

    return (
      <div class={classNames(displayClass, "character-portrait-box")}>
        <img src={`/${cleanPath}`} alt="Character Portrait" style="width: 100%; border-radius: 6px; object-fit: cover;" />
      </div>
    )
  }

  return CharacterPortrait
}) satisfies QuartzComponentConstructor