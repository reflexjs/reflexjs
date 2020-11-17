import { Box } from "reflexjs"
import { CodeBlock, LinkedCard, LinkedHeading, Callout } from "."

export const mdxComponents = {
  a: (props) => (
    <a color="primary" _hover={{ textDecoration: "underline" }} {...props} />
  ),
  h1: (props) => <LinkedHeading is="h1" {...props} />,
  h2: (props) => <LinkedHeading is="h2" mt="10" mb="1" {...props} />,
  h3: (props) => <LinkedHeading is="h3" mt="8" {...props} />,
  h4: (props) => <LinkedHeading is="h4" {...props} />,
  h5: (props) => <LinkedHeading is="h5" {...props} />,
  h6: (props) => <LinkedHeading is="h6" {...props} />,
  p: (props) => <p my="4" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  inlineCode: (props) => <code color="primary" {...props} />,
  table: (props) => (
    <table
      mt="6"
      w="full"
      fontSize="sm"
      borderCollapse="collapse"
      sx={{
        "tr:hover": {
          bg: "muted",
        },
        "td, th": {
          borderBottomWidth: 1,
          p: 2,
        },
        th: {
          textAlign: "left",
          fontWeight: "semibold",
          bg: "muted",
        },
      }}
      {...props}
    />
  ),
  Callout,
  LinkedCard,
  Box,
}
