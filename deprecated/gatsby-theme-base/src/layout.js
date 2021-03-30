/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"

export const Layout = ({
  header = "header",
  footer = "footer",
  children,
  pathname,
}) => (
  <>
    <Metatags pathname={pathname} />
    <MDXProvider>
      {header && <Block src={header} />}
      <main>{children}</main>
      {footer && <Block src={footer} />}
    </MDXProvider>
  </>
)
