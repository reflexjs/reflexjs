/** @jsx jsx */
import { jsx } from "reflexjs"
import GatsbyImg from "gatsby-image"
import { isRelativeUrl } from "@reflexjs/utils"
import { useImage } from "./use-image"

export const Image = ({ src, alt, title, caption, aspectRatio, ...props }) => {
  const [image] = useImage(src)

  props = {
    m: 0,
    ...props,
  }

  const Caption = () =>
    caption ? (
      <figcaption
        dangerouslySetInnerHTML={{ __html: caption }}
        mt="2"
        textAlign="center"
        fontSize="md"
      />
    ) : null

  // Return Gatsby image if fixed or fluid is passed.
  if (props.fixed || props.fluid) {
    return (
      <figure {...props}>
        <GatsbyImg {...props} alt={alt} title={title} />
        <Caption />
      </figure>
    )
  }

  if (!src) return null

  // Return default image tag if absolute src.
  if (!isRelativeUrl(src)) {
    return (
      <figure {...props}>
        <img src={src} alt={alt} title={title} {...props} />
        <Caption />
      </figure>
    )
  }

  // Determine if image is svg using extension.
  if (image && image.extension === "svg") {
    return (
      <figure {...props}>
        <img src={image.publicURL} alt={alt} title={title} {...props} />
        <Caption />
      </figure>
    )
  }

  return image ? (
    <figure {...props}>
      {aspectRatio ? (
        <GatsbyImg
          fluid={{
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
    </figure>
  ) : null
}
