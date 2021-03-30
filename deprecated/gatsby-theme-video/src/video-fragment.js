import { graphql } from "gatsby"

export const fragment = graphql`
  fragment VideoFragment on Video {
    id
    title
    url
    date(formatString: "MMMM DD, YYYY")
    datetime: date(formatString: "YYYY-MM-DD")
    videoId
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
