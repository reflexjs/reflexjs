import * as React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import { Div } from "@reflexjs/components"
import { SearchContext } from "./search-context"
import { SearchBox } from "./search-box"
import { Hits } from "./hits"
import { usePluginOptions } from "./use-plugin-options"

export const Search = ({ placeholder, ...props }) => {
  const [hasRefinement, setHasRefinement] = React.useState(false)
  const { appId, searchKey, indexName } = usePluginOptions()

  return (
    <SearchContext.Provider value={[hasRefinement, setHasRefinement]}>
      <InstantSearch
        indexName={indexName}
        searchClient={algoliasearch(appId, searchKey)}
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
