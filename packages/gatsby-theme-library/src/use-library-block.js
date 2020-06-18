import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useLibraryBlock = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allLibraryBlock(sort: { fields: name }) {
        nodes {
          ...LibraryBlockFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "name")
}
