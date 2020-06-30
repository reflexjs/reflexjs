import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useImage = (filters) => {
  filters = typeof filters === "string" && filters.replace(/^.?\//, "")

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "Image" }
          extension: { ne: "svg" }
        }
      ) {
        nodes {
          src: relativePath
          childImageSharp {
            fluid(cropFocus: CENTER, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `)

  return filterNodes(data, filters, "src")
}
