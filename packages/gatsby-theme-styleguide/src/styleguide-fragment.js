import { graphql } from "gatsby"

export const fragment = graphql`
  fragment StyleguideFragment on Styleguide {
    id
    title
    slug
    excerpt
    body
    data
  }
`
