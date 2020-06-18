import * as React from "react"
import { graphql } from "gatsby"
import { Tag } from "./tag"

export const query = graphql`
  query($name: String!) {
    postTag(name: { eq: $name }) {
      name
      slug
    }
    allPost(
      filter: { tags: { elemMatch: { name: { eq: $name } } } }
      sort: { fields: [date], order: DESC }
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`

export default ({ data }) => {
  return <Tag posts={data.allPost.posts} {...data.postTag} />
}
