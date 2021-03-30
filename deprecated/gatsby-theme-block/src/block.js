import * as React from "react"
import { MDXProvider, MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { useBlock } from "./use-block"
import { Wrapper } from "./wrapper"

export const Block = ({ src, children, ...props }) => {
  const [block] = useBlock(src)
  if (!block) return null

  // Customize the MDX wrapper for block so that props can
  // be passed down.
  const blockMDXComponents = {
    wrapper: (props) => {
      props = {
        children,
        ...props,
      }
      return <Wrapper {...props} />
    },
  }

  return block && block.body ? (
    <MDXProvider components={blockMDXComponents}>
      <MDXRenderer {...props}>{block.body}</MDXRenderer>
    </MDXProvider>
  ) : null
}
