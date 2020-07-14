import * as React from "react"
import GatsbyImg from "gatsby-image"
import { isRelativeUrl } from "@reflexjs/utils"
import { Img, Figure, Figcaption } from "@reflexjs/components"
import { useImage } from "./use-image"

export const Image = ({ src, alt, title, caption, aspectRatio, ...props }) => {
  const [image] = useImage(src)

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
        fontSize="md"
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

  return image ? (
    <Figure {...props}>
      {aspectRatio ? (
        <GatsbyImg
          sizes={{
            ...image.childImageSharp.fluid,
            aspectRatio,
          }}
          alt={alt}
          title={title}
        />
      ) : (
        <GatsbyImg
          fluid={image.childImageSharp.fluid}
          alt={alt}
          title={title}
        />
      )}
      <Caption />
    </Figure>
  ) : null
}
