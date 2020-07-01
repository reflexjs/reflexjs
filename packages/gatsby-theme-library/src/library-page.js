import * as React from "react"
import { Preview } from "./preview"

export const LibraryPage = (page) => (
  <React.Fragment>
    <Preview
      component={page}
      libraryUrl={`/library/pages`}
      withWrapper={false}
    />
  </React.Fragment>
)
