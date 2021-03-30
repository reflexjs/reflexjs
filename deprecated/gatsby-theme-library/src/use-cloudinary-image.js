import { useStaticQuery, graphql } from "gatsby"

export const useCloudinaryImage = (name) => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryAsset {
        nodes {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  `)

  const [image] = data.allCloudinaryAsset.nodes.filter((node) => {
    return `library/images/${node.parent.relativePath}` === name
  })

  return image
}
