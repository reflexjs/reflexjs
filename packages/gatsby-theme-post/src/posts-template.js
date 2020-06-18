import * as React from "react"
import { graphql } from "gatsby"
import { Posts } from "./posts"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPost(sort: { fields: [date], order: DESC }, skip: $skip, limit: $limit) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`

export default ({ data, ...props }) => {
  return <Posts {...data.allPost} {...props} />
}
