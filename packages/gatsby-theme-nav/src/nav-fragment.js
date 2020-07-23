import { graphql } from "gatsby"

export const fragment = graphql`
  fragment NavFragment on Nav {
    name
    items {
      ...NavLinkFragment
      items {
        ...NavLinkFragment
        items {
          ...NavLinkFragment
        }
      }
    }
    data
  }
`
