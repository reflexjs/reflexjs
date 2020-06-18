import * as React from "react"
import { Heading } from "./heading"
import { Callout } from "./callout"

export const MDXComponents = {
  h1: (props) => <Heading as={`H1`} {...props} />,
  h2: (props) => <Heading as={`H2`} {...props} />,
  h3: (props) => <Heading as={`H3`} {...props} />,
  h4: (props) => <Heading as={`H4`} {...props} />,
  h5: (props) => <Heading as={`H5`} {...props} />,
  h6: (props) => <Heading as={`H6`} {...props} />,
  Callout,
}
