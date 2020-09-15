import * as React from "react"
import { Link } from "@reflexjs/gatsby-theme-core"
import Image from "gatsby-image"
import { VisuallyHidden } from "@reflexjs/components"
import { useCloudinaryImage } from "./use-cloudinary-image"

export const Thumbnail = ({ screenshots, slug, mode, name, ...props }) => {
  const image = useCloudinaryImage(screenshots[mode])
  return (
    <Link
      to={slug}
      d="inline-flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      overflow="hidden"
      borderWidth="1px"
      borderColor="border"
      rounded="xl"
      mt="5px"
      transition="all .15s ease-in"
      boxShadow="xl"
      hoverTransform="translateY(-5px)"
      hoverBoxShadow="2xl"
      minH="60px"
      {...props}
    >
      {image && <Image fluid={image.fluid} w="100%" alt={name} />}
      <VisuallyHidden>View {name}</VisuallyHidden>
    </Link>
  )
}
