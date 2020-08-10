import * as React from "react"
import { connectHits, PoweredBy } from "react-instantsearch-dom"
import { Div, Ul, Li, Flexbox, P, Span } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Highlight } from "./highlight"

export const Hits = connectHits(({ hits, focusedIndex, ...props }) => {
  return (
    <Div
      bg="background"
      boxShadow="xl"
      rounded="lg"
      w="500px"
      right="0"
      position="absolute"
      top="100%"
      mt="2"
    >
      {hits.length ? (
        <Ul listStyle="none outside none" m="0" p="0" {...props}>
          {hits.map((hit) => (
            <Li borderBottomWidth="1px" key={hit.objectID}>
              <Link
                to={hit.slug}
                color="text"
                textDecoration="none"
                px="4"
                py="3"
                d="block"
                focusBg="muted"
                hoverTextDecoration="none"
                focusTextDecoration="none"
              >
                <Flexbox flexDirection="column" alignItems="flex-start">
                  <P fontWeight="semibold" fontSize="md" m="0">
                    <Highlight hit={hit} />
                  </P>
                  {hit.excerpt && (
                    <P fontSize="sm" mt="1" mb="0">
                      <Highlight hit={hit} attribute="excerpt" />
                    </P>
                  )}
                  <Span fontSize="sm">{hit.type}</Span>
                </Flexbox>
              </Link>
            </Li>
          ))}
        </Ul>
      ) : (
        <Div
          px="4"
          py="3"
          borderBottomWidth="1px"
          textAlign="center"
          fontSize="sm"
        >
          No results found.
        </Div>
      )}
      <Flexbox
        px="4"
        py="2"
        justifyContent="flex-end"
        fontSize="sm"
        sx={{
          "> div": {
            display: "flex",
            alignItems: "center",
          },
          a: {
            display: "flex",
            ml: 2,
          },
          svg: {
            width: "auto",
            height: "20px",
          },
        }}
      >
        <PoweredBy />
      </Flexbox>
    </Div>
  )
})
