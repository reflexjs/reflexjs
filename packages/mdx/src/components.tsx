/** @jsx jsx */
import { jsx, Icon } from "reflexjs"
import { CodeBlock } from "./code-block"

const headingStyles = {
  display: "inline-flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "flex-end",
  scrollMarginTop: (theme) => theme.space[26],
  width: "100%",
  "&::before": {
    display: "block",
    height: "6rem",
    marginTop: "-6rem",
    visibility: "hidden",
    content: "''",
  },
  "> a": {
    display: "none",
    position: "relative",
    ml: 2,
    "&::before": {
      content: "'#'",
      fontSize: "inherit",
    },
  },
  _hover: {
    "> a": {
      display: "inline-block",
    },
  },
}

export const components = {
  h1: (props) => (
    <h1 variant="heading.h1" sx={headingStyles} mt="8" mb="6" {...props} />
  ),
  h2: (props) => (
    <h2 variant="heading.h2" sx={headingStyles} mt="8" mb="4" {...props} />
  ),
  h3: (props) => (
    <h3 variant="heading.h3" sx={headingStyles} mt="6" mb="2" {...props} />
  ),
  h4: (props) => (
    <h4 variant="heading.h4" sx={headingStyles} mt="6" mb="2" {...props} />
  ),
  h5: (props) => (
    <h5 variant="heading.h5" sx={headingStyles} mt="6" mb="2" {...props} />
  ),
  h6: (props) => (
    <h6 variant="heading.h6" sx={headingStyles} mt="6" mb="2" {...props} />
  ),
  div: (props) => <div {...props} />,
  hr: (props) => <hr my="4" {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  p: (props) => <p variant="text.paragraph" my="4" {...props} />,
  ul: (props) => <ul variant="list.unordered" {...props} />,
  ol: (props) => <ol variant="list.ordered" {...props} />,
  a: (props) => <a variant="text.link" {...props} />,
  blockquote: (props) => <blockquote variant="text.blockquote" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  inlineCode: (props) => <code {...props} />,
  figure: (props) => <figure mt="6" {...props} />,
  figcaption: (props) => <figcaption variant="text.caption" {...props} />,
  table: (props) => (
    <div maxW="100%" overflow="scroll">
      <table variant="table" my="6" {...props} />
    </div>
  ),
  Icon,
}
