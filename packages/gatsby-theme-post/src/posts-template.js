import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Container, Section } from "@reflexjs/components"
import { Posts } from "./posts"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPost(
      sort: { fields: [date], order: DESC }
      filter: { published: { eq: true } }
      skip: $skip
      limit: $limit
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`

export default ({ data, ...props }) => {
  const { previousPagePath, nextPagePath } = props.pageContext
  return (
    <Layout pathname={props.location.pathname}>
      <Block src="posts-header" posts={data.allPost.posts} />
      {data.allPost ? (
        <Section py="8|12|14">
          <Container>
            <Posts {...data.allPost} {...props} />
            <Pager
              previousPagePath={previousPagePath}
              nextPagePath={nextPagePath}
            />
          </Container>
        </Section>
      ) : null}
      <Block src="posts-footer" videos={data.allPost.posts} />
    </Layout>
  )
}
