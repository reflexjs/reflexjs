import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useMetatags = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allMetatags {
        nodes {
          ...MetatagsFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "pathname")
}
