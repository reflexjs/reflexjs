import * as React from "react"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"

export const Layout = ({ header = "header", footer = "footer", children }) => {
  return (
    <MDXProvider>
      {header && <Block src={header} />}
      {children}
      {footer && <Block src={footer} />}
    </MDXProvider>
  )
}
