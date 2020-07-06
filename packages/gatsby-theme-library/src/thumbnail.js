import * as React from "react"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { VisuallyHidden } from "@reflexjs/components"

export const Thumbnail = ({ screenshots, slug, mode, name, ...props }) => (
  <Link
    to={slug}
    d="inline-flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    overflow="hidden"
    borderWidth="2px"
    borderColor="border"
    rounded="md"
    mt="5px"
    transition="all .15s ease-in"
    hoverTransform="translateY(-5px)"
    hoverBoxShadow="xl"
    minH="10"
    {...props}
  >
    {screenshots[mode] && <Image src={screenshots[mode]} w="100%" />}
    <VisuallyHidden>View {name}</VisuallyHidden>
  </Link>
)
