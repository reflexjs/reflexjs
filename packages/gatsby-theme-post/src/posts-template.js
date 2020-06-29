import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Container, Section } from "@reflexjs/components"
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

export default ({ data, pageContext, ...props }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <Layout>
      <Section py="8|12|14">
        <Container>
          <Posts {...data.allPost} {...props} />
          <Pager
            previousPagePath={previousPagePath}
            nextPagePath={nextPagePath}
          />
        </Container>
      </Section>
    </Layout>
  )
}
