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
    {screenshots[mode] && <Image src={screenshots[mode]} w="100%" />}
    <VisuallyHidden>View {name}</VisuallyHidden>
  </Link>
)
