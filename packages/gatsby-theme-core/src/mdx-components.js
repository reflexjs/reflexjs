/** @jsx jsx */
import { jsx, Box, Flexbox, Grid, VisuallyHidden, Container } from "reflexjs"
import * as React from "react"
import GithubSlugger from "github-slugger"
import * as ReflexComponents from "@reflexjs/components"
import { CodeBlock } from "./code-block"
import { Link } from "./link"
import { Pager } from "./pager"
import { Icon } from "./icon"
import { ButtonLink } from "./button-link"

const Slugger = new GithubSlugger()

export const Heading = ({ as, children, ...props }) => {
  Slugger.reset()
  const Tag = as
  const id = Slugger.slug(children)
  return (
    <Tag id={id} variant={`heading.${as} ${as}`} {...props}>
      <a href={`#${id}`}>{children}</a>
    </Tag>
  )
}

const ReflexLegacyComponents = {}
Object.keys(ReflexComponents).forEach((as) => {
  ReflexLegacyComponents[as] = React.forwardRef((props, ref) => (
    <Box ref={ref} as={as.toLowerCase()} {...props} />
  ))
})

export const MDXComponents = {
  ...ReflexLegacyComponents,
  Flexbox: (props) => <Flexbox {...props} />,
  Container: (props) => <Container {...props} />,
  Grid: (props) => <Grid display="grid" {...props} />,
  VisuallyHidden,
  pre: CodeBlock,
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  Link,
  ButtonLink,
  Pager,
  Icon,
}
