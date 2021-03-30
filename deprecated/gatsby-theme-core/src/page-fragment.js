import { graphql } from "gatsby"

export const fragment = graphql`
  fragment PageFragment on Page {
    id
    title
    slug
    excerpt
    body
    image
    data
  }
`
