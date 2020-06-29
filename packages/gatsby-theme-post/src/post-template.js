import * as React from "react"
import { graphql } from "gatsby"
import { Post } from "./post"

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    post(id: { eq: $id }) {
      ...PostFragment
    }
    prev: post(id: { eq: $prev }) {
      ...PostFragment
    }
    next: post(id: { eq: $next }) {
      ...PostFragment
    }
  }
`

export default ({ data, ...props }) => (
  <Post
    {...data.post}
    previousPost={data.prev}
    nextPost={data.next}
    {...props}
  />
)
