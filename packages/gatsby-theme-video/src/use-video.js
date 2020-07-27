import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useVideo = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allVideo(sort: { fields: date, order: DESC }) {
        nodes {
          ...VideoFragment
        }
      }
    }
  `)

  return filterNodes(data, filters)
}
