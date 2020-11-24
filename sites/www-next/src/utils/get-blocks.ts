import { parse } from "path"
import glob from "fast-glob"
import { Block } from "types"
import { humanize, getSources } from "@utils"
import { blocks } from "@config"

export async function getBlocks(): Promise<Block[]> {
  const paths = await glob(`${blocks.contentPath}/**/*.{jsx,tsx}`, {
    ignore: ["index.js"],
  })

  return await Promise.all(
    paths.map(async (filepath) => {
      const { name } = parse(filepath)
      const sources = await getSources(name)
      const categoryId = name.replace(/-(\d*)$/, "")

      return {
        id: name,
        name: humanize(name),
        slug: `/blocks/${name}`,
        category: blocks.categories.find(
          (category) => category.id === categoryId
        ),
        thumbnail: `${blocks.imagePath}/${name}.jpeg`,
        sources,
      }
    })
  )
}
