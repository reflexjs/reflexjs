/** @jsx jsx */
import { jsx, VisuallyHidden } from "reflexjs"
import * as React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { SearchContext } from "./search-context"

export const SearchBox = connectSearchBox(
  ({ currentRefinement, refine, placeholder = "Type to search..." }) => {
    const [, setHasRefinement] = React.useContext(SearchContext)
    return (
      <form noValidate role="search">
        <VisuallyHidden>
          <label htmlFor="keywords">Search</label>
        </VisuallyHidden>
        <input
          id="keywords"
          name="keywords"
          type="search"
          px="3"
          py="2"
          fontSize="sm"
          rounded="md"
          placeholder={placeholder}
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
          onKeyUp={(event) =>
            setHasRefinement(event.currentTarget.value !== "")
          }
        />
      </form>
    )
  }
)
