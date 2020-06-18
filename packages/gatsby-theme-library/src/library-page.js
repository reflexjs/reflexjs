import * as React from "react"
import { Seo } from "@reflexjs/gatsby-theme-core"
import { Preview } from "./preview"

export const LibraryPage = (page) => (
  <React.Fragment>
    <Seo title="Examples" />
    <Preview
      component={page}
      libraryUrl={`/library/pages`}
      withWrapper={false}
    />
  </React.Fragment>
)
