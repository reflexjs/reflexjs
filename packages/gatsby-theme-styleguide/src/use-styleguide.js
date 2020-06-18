import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useStyleguide = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allStyleguide(sort: { fields: weight }) {
        nodes {
          ...StyleguideFragment
        }
      }
    }
  `)

  return filterNodes(data, filters)
}
