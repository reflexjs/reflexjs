import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ProfileFragment on Profile {
    id
    name
    excerpt
    slug
    body
    picture
    links {
      title
      url
    }
    data
  }
`
