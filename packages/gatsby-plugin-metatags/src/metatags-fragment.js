import { graphql } from "gatsby"

export const fragment = graphql`
  fragment MetatagFragment on Metatag {
    title
    description
    pathname
    image
  }

  fragment MetatagsFragment on Metatags {
    ...MetatagFragment
    og {
      ...MetatagFragment
      type
    }
    twitter {
      ...MetatagFragment
      card
    }
  }
`
