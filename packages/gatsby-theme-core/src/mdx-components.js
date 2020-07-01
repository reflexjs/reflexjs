import * as ReflexComponents from "@reflexjs/components"
import { CodeBlock } from "./code-block"
import { Link } from "./link"
import { Pager } from "./pager"
import { Icon } from "./icon"
import { ButtonLink } from "./button-link"

export const MDXComponents = {
  ...ReflexComponents,
  pre: CodeBlock,
  h1: ReflexComponents.H1,
  h2: ReflexComponents.H2,
  h3: ReflexComponents.H3,
  h4: ReflexComponents.H4,
  h5: ReflexComponents.H5,
  h6: ReflexComponents.H6,
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
