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

export default ({ data, ...props }) => {
  props = {
    ...data.post,
    previous: data.prev,
    next: data.next,
    ...props,
  }
  return (
    <Layout pathname={data.post.slug}>
      <Block src="post-header" {...props} />
      {data.post ? <Post {...props} /> : null}
      <Block src="post-footer" {...props} />
    </Layout>
  )
}
