import React from "react"
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
  const Tag = ReflexComponents[as]
  const id = Slugger.slug(children)
  return (
    <Tag id={id} {...props}>
      <ReflexComponents.A href={`#${id}`}>{children}</ReflexComponents.A>
    </Tag>
  )
}

export const MDXComponents = {
  ...ReflexComponents,
  pre: CodeBlock,
  h1: (props) => <Heading as={`H1`} {...props} />,
  h2: (props) => <Heading as={`H2`} {...props} />,
  h3: (props) => <Heading as={`H3`} {...props} />,
  h4: (props) => <Heading as={`H4`} {...props} />,
  h5: (props) => <Heading as={`H5`} {...props} />,
  h6: (props) => <Heading as={`H6`} {...props} />,
  p: ReflexComponents.P,
  ul: ReflexComponents.Ul,
  ol: ReflexComponents.Ol,
  li: ReflexComponents.Li,
  blockquote: ReflexComponents.Blockquote,
  Link,
  ButtonLink,
  Pager,
  Icon,
}
