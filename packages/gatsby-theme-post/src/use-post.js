import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const usePost = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allPost(sort: { fields: date, order: DESC }) {
        nodes {
          ...PostFragment
        }
      }
    }
  `)

  return filterNodes(data, filters)
}
