import * as React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import { Div } from "@reflexjs/components"
import { SearchContext } from "./search-context"
import { SearchBox } from "./search-box"
import { Hits } from "./hits"

export const Search = ({ placeholder, ...props }) => {
  const [hasRefinement, setHasRefinement] = React.useState(false)
  const [focusedIndex, setFocusedIndex] = React.useState(0)

  React.useEffect(() => {
    const handler = ({ keyCode }) => {
      if (keyCode === 38) console.log("up")
      if (keyCode === 40) console.log("down")
    }

    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <SearchContext.Provider value={[hasRefinement, setHasRefinement]}>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={algoliasearch(
          process.env.GATSBY_ALGOLIA_APP_ID,
          process.env.GATSBY_ALGOLIA_SEARCH_KEY
        )}
      >
        <Configure distinct hitsPerPage={5} />
        <Div position="relative" {...props}>
          <SearchBox placeholder={placeholder} />
          {hasRefinement && <Hits />}
        </Div>
      </InstantSearch>
    </SearchContext.Provider>
  )
}
