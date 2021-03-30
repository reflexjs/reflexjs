/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { connectHits, PoweredBy } from "react-instantsearch-dom"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Highlight } from "./highlight"

export const Hits = connectHits(({ hits, ...props }) => {
  return (
    <div
      bg="background"
      boxShadow="none|none|xl"
      rounded="lg"
      minW="0|0|500px"
      right="0"
      position="relative|relative|absolute"
      top="100%"
      mt="2"
    >
      {hits.length ? (
        <ul listStyle="none outside none" m="0" p="0" {...props}>
          {hits.map((hit) => (
            <li borderBottomWidth="1px" key={hit.objectID}>
              <Link
                to={hit.slug}
                color="text"
                textDecoration="none"
                px="4"
                py="3"
                display="block"
                _hover={{
                  textDecoration: "none",
                }}
                _focus={{
                  bg: "muted",
                  textDecoration: "none",
                  color: "text",
                }}
              >
                <Flexbox flexDirection="column" alignItems="flex-start">
                  <p fontWeight="semibold" fontSize="md" m="0">
                    <Highlight hit={hit} />
                  </p>
                  {hit.excerpt && (
                    <p fontSize="sm" mt="1" mb="0">
                      <Highlight hit={hit} attribute="excerpt" />
                    </p>
                  )}
                  <span fontSize="sm">{hit.type}</span>
                </Flexbox>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div
          px="4"
          py="3"
          borderBottomWidth="1px"
          textAlign="center"
          fontSize="sm"
        >
          No results found.
        </div>
      )}
      <Flexbox
        px="4"
        py="2"
        justifyContent="center|center|flex-end"
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
    </div>
  )
})
