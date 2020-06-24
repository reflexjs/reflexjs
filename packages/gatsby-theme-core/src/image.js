import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImg from "gatsby-image"
import { isRelativeUrl } from "@reflexjs/utils"
import { Img, Figure, Figcaption } from "@reflexjs/components"

export const Image = ({ src, alt, title, caption, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "Image" }
          extension: { ne: "svg" }
        }
      ) {
        images: nodes {
          relativePath
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

  props = {
    m: 0,
    ...props,
  }

  const Caption = () =>
    caption ? (
      <Figcaption
        dangerouslySetInnerHTML={{ __html: caption }}
        mt="2"
        textAlign="center"
        fontSize="2"
      />
    ) : null

  // Return Gatsby image if fixed or fluid is passed.
  if (props.fixed || props.fluid) {
    return (
      <Figure {...props}>
        <GatsbyImg {...props} alt={alt} title={title} />
        <Caption />
      </Figure>
    )
  }

  if (!src) return null

  // Return default image tag if absolute src.
  if (!isRelativeUrl(src)) {
    return (
      <Figure {...props}>
        <Img src={src} alt={alt} title={title} {...props} />
        <Caption />
      </Figure>
    )
  }

  const { images } = data.allFile
  const path = src.replace(/^.?\//, "")
  const image = images.find(({ relativePath }) => relativePath === path)

  return image ? (
    <Figure {...props}>
      <GatsbyImg fluid={image.childImageSharp.fluid} alt={alt} title={title} />
      <Caption />
    </Figure>
  ) : null
}
