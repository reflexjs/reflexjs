import * as React from "react"
import { MDXProvider as CoreMDXProvider } from "@mdx-js/react"
import { MDXComponents } from "./mdx-components"

export const MDXProvider = ({ components, ...props }) => (
  <CoreMDXProvider
    components={{
      ...MDXComponents,
      ...components,
    }}
    {...props}
  />
)
