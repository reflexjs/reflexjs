import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useNav = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allNav {
        nodes {
          ...NavFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "name")
}
