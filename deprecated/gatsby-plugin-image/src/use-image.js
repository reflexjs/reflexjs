import { useStaticQuery, graphql } from "gatsby"
import { filterNodes } from "@reflexjs/utils"

export const useImage = (filters) => {
  filters = typeof filters === "string" && filters.replace(/^.?\//, "")

  let data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "Image" }
          extension: { ne: "svg" }
        }
      ) {
        nodes {
          src: relativePath
          extension
          publicURL
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
      svgs: allFile(
        filter: {
          sourceInstanceName: { eq: "Image" }
          extension: { eq: "svg" }
        }
      ) {
        nodes {
          src: relativePath
          extension
          publicURL
        }
      }
    }
  `)

  return filterNodes(
    {
      allImages: {
        nodes: [...data.images?.nodes, ...data.svgs?.nodes],
      },
    },
    filters,
    "src"
  )
}
