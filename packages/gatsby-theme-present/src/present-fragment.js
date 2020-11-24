import { graphql } from "gatsby"

export const fragment = graphql`
  fragment PresentFragment on Present {
    id
    title
    url
    date(formatString: "MMMM DD, YYYY")
    datetime: date(formatString: "YYYY-MM-DD")
    presentId
    embedUrl
    excerpt
    slug
    body
    thumbnail
    featured
    published
    provider
    data
  }
`
