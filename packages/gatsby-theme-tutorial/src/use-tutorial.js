import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useTutorial = (filters) => {
  const data = useStaticQuery(graphql`
    query {
      allTutorial(sort: { fields: weight, order: ASC }) {
        nodes {
          ...TutorialFragment
        }
      }
    }
  `)

  return filterNodes(data, filters)
}
