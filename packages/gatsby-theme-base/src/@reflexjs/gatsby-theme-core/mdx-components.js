import { MDXComponents as CoreMDXComponents } from "@reflexjs/gatsby-theme-core/src/mdx-components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { NavMenu } from "@reflexjs/gatsby-theme-nav"

export const MDXComponents = {
  ...CoreMDXComponents,
  Block,
  Image,
  NavMenu,
  img: Image,
}
