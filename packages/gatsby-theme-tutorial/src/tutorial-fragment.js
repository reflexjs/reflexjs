import { graphql } from "gatsby"

export const fragment = graphql`
  fragment TutorialFragment on Tutorial {
    id
    title
    excerpt
    body
    slug
    weight
    data
  }
`
