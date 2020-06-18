import * as React from "react"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Seo } from "@reflexjs/gatsby-theme-core"
import { Preview } from "./preview"

export const LibraryBlock = (block) => (
  <React.Fragment>
    <Seo title={block.category.name} />
    <Preview
      component={block}
      libraryUrl={`/library/blocks#${block.category.slug}`}
    >
      <Block src="library/block-footer" block={block} />
    </Preview>
  </React.Fragment>
)
