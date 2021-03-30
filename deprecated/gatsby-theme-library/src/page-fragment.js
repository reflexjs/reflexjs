import { graphql } from "gatsby"

export const fragment = graphql`
  fragment LibraryPageFragment on LibraryPage {
    id
    name
    code
    slug
    body
    screenshots
  }
`
