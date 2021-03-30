import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useLibraryPage = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allLibraryPage(sort: { fields: name }) {
        nodes {
          ...LibraryPageFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "name")
}
