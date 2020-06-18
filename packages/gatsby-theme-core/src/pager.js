import * as React from "react"
import { Flexbox } from "@reflexjs/components"
import { Link } from "./link"

export const Pager = ({ previousPagePath, nextPagePath, ...props }) => (
  <Flexbox justifyContent="space-between" alignItems="center" {...props}>
    {previousPagePath && (
      <Link to={previousPagePath} textDecoration="none">
        Previous
      </Link>
    )}
    {nextPagePath && (
      <Link to={nextPagePath} textDecoration="none" ml="auto">
        Next
      </Link>
    )}
  </Flexbox>
)
