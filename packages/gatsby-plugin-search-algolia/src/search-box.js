import * as React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Form, Input, VisuallyHidden, Label } from "@reflexjs/components"
import { SearchContext } from "./search-context"

export const SearchBox = connectSearchBox(
  ({ currentRefinement, refine, placeholder = "Type to search..." }) => {
    const [, setHasRefinement] = React.useContext(SearchContext)
    return (
      <Form novalidate role="search">
        <VisuallyHidden>
          <Label htmlFor="keywords">Search</Label>
        </VisuallyHidden>
        <Input
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
      </Form>
    )
  }
)
