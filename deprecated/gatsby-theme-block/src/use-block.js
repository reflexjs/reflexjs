import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useBlock = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allBlock {
        nodes {
          ...BlockFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "src")
}
