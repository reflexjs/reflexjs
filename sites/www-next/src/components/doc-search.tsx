import * as React from "react"
import { VisuallyHidden } from "./visually-hidden"

export function DocSearch({ ...props }) {
  React.useEffect(() => {
    if (window.docsearch) {
      try {
        window.docsearch({
          apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
          indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
          inputSelector: "#docsearch-input",
        })
      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  return (
    <div {...props}>
      <VisuallyHidden>
        <label htmlFor="docsearch-input">Search</label>
      </VisuallyHidden>
      <input
        type="search"
        variant="input.sm"
        h="12|9"
        id="docsearch-input"
        placeholder="Search reflexjs.org"
        rounded="md"
        fontSize="lg|sm"
        w="180|275px"
        bg="muted"
        flex="1"
      />
    </div>
  )
}
