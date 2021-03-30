import { graphql } from "gatsby"

export const fragment = graphql`
  fragment DocFragment on Doc {
    id
    title
    slug
    excerpt
    body
    tableOfContents
    timeToRead
    data
  }
`
