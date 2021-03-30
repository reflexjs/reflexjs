import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useProfile = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allProfile {
        nodes {
          ...ProfileFragment
        }
      }
    }
  `)

  return filterNodes(data, filters, "name")
}
