import { graphql } from "gatsby"

export const fragment = graphql`
  fragment BlockFragment on Block {
    id
    src
    body
    data
  }
`
