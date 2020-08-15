import * as React from "react"
import { connectHighlight } from "react-instantsearch-dom"
import { Strong, Span } from "@reflexjs/components"

export const Highlight = connectHighlight(
  ({ highlight, attribute = "title", hit }) => {
    const parsedHit = highlight({
      highlightProperty: "_highlightResult",
      attribute,
      hit,
    })

    return (
      <React.Fragment>
        {parsedHit.map((part, index) =>
          part.isHighlighted ? (
            <Strong key={index} color="primary">
              {part.value}
            </Strong>
          ) : (
            <Span key={index}>{part.value}</Span>
          )
        )}
      </React.Fragment>
    )
  }
)
