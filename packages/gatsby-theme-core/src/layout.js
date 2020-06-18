import * as React from "react"
import { MDXProvider } from "./mdx-provider"

export const Layout = ({ children }) => <MDXProvider>{children}</MDXProvider>
