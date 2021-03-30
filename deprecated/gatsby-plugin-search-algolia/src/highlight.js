/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { connectHighlight } from "react-instantsearch-dom"

export const Highlight = connectHighlight(
  ({ highlight, attribute = "title", hit }) => {
    const parsedHit = highlight({
      highlightProperty: "_highlightResult",
      attribute,
      hit,
    })

    return (
      <>
        {parsedHit.map((part, index) =>
          part.isHighlighted ? (
            <strong key={index} color="primary">
              {part.value}
            </strong>
          ) : (
            <span key={index}>{part.value}</span>
          )
        )}
      </>
    )
  }
)
