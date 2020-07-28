import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
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
  <Layout pathname={data.post.slug}>
    <Block src="post-header" post={data.post} />
    {data.post ? (
      <Post
        {...data.post}
        previousPost={data.prev}
        nextPost={data.next}
        {...props}
      />
    ) : null}
    <Block src="post-footer" post={data.post} />
  </Layout>
)
