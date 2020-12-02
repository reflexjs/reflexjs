import Link from "next/link"
import { Box, Icon } from "reflexjs"
import { CodeBlock, LinkedCard, LinkedHeading, Callout } from "."

export const mdxComponents = {
  a: (props) => (
    <a color="primary" _hover={{ textDecoration: "underline" }} {...props} />
  ),
  h1: (props) => <LinkedHeading is="h1" {...props} />,
  h2: (props) => (
    <LinkedHeading
      is="h2"
      borderTopWidth="1px"
      pt="4"
      mt="10"
      mb="1"
      {...props}
    />
  ),
  div: (props) => <div {...props} />,
  h3: (props) => <LinkedHeading is="h3" mt="8" {...props} />,
  h4: (props) => <LinkedHeading is="h4" {...props} />,
  h5: (props) => <LinkedHeading is="h5" {...props} />,
  h6: (props) => <LinkedHeading is="h6" {...props} />,
  p: (props) => <p variant="text.paragraph" {...props} />,
  ul: (props) => <ul variant="list.unordered" {...props} />,
  ol: (props) => <ol variant="list.ordered" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  inlineCode: (props) => <code variant="text.code" {...props} />,
  table: (props) => <table variant="table" {...props} />,
  Callout,
  Link,
  LinkedCard,
  Box,
  Icon,
}
