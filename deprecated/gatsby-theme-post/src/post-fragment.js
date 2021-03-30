import { graphql } from "gatsby"

export const fragment = graphql`
  fragment PostFragment on Post {
    title
    date(formatString: "MMMM DD, YYYY")
    datetime: date(formatString: "YYYY-MM-DD")
    excerpt
    body
    slug
    featured
    published
    tags {
      name
      slug
    }
    caption
    author {
      ...ProfileFragment
    }
    image
    timeToRead
    data
  }
`
