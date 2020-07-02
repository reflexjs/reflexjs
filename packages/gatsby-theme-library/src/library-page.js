import * as React from "react"
import { Preview } from "./preview"

export const LibraryPage = (page) => (
  <Preview component={page} libraryUrl={`/library/pages`} withWrapper={false} />
)
