import { graphql } from "gatsby"

export const fragment = graphql`
  fragment NavLinkFragment on NavLink {
    type
    value
    url
  }
`
