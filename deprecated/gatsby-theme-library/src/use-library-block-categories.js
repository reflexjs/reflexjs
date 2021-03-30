import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useLibraryBlockCategories = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allLibraryBlockCategory(sort: { fields: weight }) {
        nodes {
          name
          slug
          display
          weight
          blocks {
            ...LibraryBlockFragment
          }
        }
      }
    }
  `)

  const nodes = filterNodes(data, filters, "name")

  if (!nodes.length) return null

  nodes.map(
    (node) =>
      node.blocks &&
      node.blocks.sort((a, b) =>
        a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
      )
  )

  return nodes
}
