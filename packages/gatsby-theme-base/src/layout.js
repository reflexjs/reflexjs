import * as React from "react"
import { Main } from "@reflexjs/components"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"

export const Layout = ({
  header = "header",
  footer = "footer",
  children,
  pathname,
}) => (
  <React.Fragment>
    <Metatags pathname={pathname} />
    <MDXProvider>
      {header && <Block src={header} />}
      <Main>{children}</Main>
      {footer && <Block src={footer} />}
    </MDXProvider>
  </React.Fragment>
)
