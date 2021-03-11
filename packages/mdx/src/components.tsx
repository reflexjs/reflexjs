/** @jsx jsx */
import { jsx } from "reflexjs"
import { CodeBlock } from "./code-block"

export const components = {
  h1: (props) => <h1 variant="heading.h1" {...props} />,
  h2: (props) => <h2 variant="heading.h2" my="8" {...props} />,
  h3: (props) => <h3 variant="heading.h3" my="8" {...props} />,
  h4: (props) => <h4 variant="heading.h4" my="6" {...props} />,
  h5: (props) => <h5 variant="heading.h5" my="6" {...props} />,
  h6: (props) => <h6 variant="heading.h6" my="6" {...props} />,
  hr: (props) => <hr my="10" {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  p: (props) => <p variant="text.paragraph" {...props} />,
  ul: (props) => <ul variant="list.unordered" {...props} />,
  ol: (props) => <ol variant="list.ordered" {...props} />,
  a: (props) => (
    <a color="primary" _hover={{ textDecoration: "underline" }} {...props} />
  ),
  blockquote: (props) => <blockquote variant="text.blockquote" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  inlineCode: (props) => <code {...props} />,
  figure: (props) => <figure mt="6" {...props} />,
  figcaption: (props) => <figcaption variant="text.caption" {...props} />,
  table: (props) => <table variant="table" my="6" {...props} />,
}
