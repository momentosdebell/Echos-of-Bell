import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children, fileData }: QuartzComponentProps) => {
  const rawImg = fileData.frontmatter?.img
  const cleanImgName = rawImg ? String(rawImg).replace(/[\[\]"]/g, "").trim() : null

  return (
    <div id="quartz-body">
      {cleanImgName && (
        <div style="float: right; margin: 0 0 1rem 1.5rem; max-width: 300px;">
          <img src={`/static/${cleanImgName}`} alt="" style="border-radius: 6px; width: 100%; display: block;" />
        </div>
      )}
      {children}
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor