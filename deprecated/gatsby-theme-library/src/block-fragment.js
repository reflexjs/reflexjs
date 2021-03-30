import { graphql } from "gatsby"

export const fragment = graphql`
  fragment LibraryBlockFragment on LibraryBlock {
    id
    name
    code
    slug
    body
    doc
    screenshots
    category {
      name
      slug
    }
  }
`
