import * as React from "react"
import { Helmet } from "react-helmet"
import { absoluteUrl } from "@reflexjs/utils"
import { useImage } from "@reflexjs/gatsby-plugin-image"

export const MetatagImage = ({ imagePath, property, site }) => {
  const [image] = useImage(imagePath)

  if (!image) return null

  return (
    <Helmet>
      <meta
        property={property}
        content={absoluteUrl(image.childImageSharp?.fluid?.src, site.siteUrl)}
      />
    </Helmet>
  )
}
