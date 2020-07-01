import * as React from "react"
import { MDXProvider } from "./mdx-provider"

export const Layout = ({ children, pathname }) => (
  <React.Fragment>
    <MDXProvider>{children}</MDXProvider>
  </React.Fragment>
)
