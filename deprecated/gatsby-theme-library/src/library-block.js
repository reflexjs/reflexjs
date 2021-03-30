import * as React from "react"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Preview } from "./preview"

export const LibraryBlock = (block) => (
  <Preview
    component={block}
    libraryUrl={`/library/blocks#${block.category.slug}`}
  >
    <Block src="library/block-footer" block={block} />
  </Preview>
)
