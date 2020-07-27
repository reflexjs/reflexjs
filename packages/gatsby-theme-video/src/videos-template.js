import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Container, Section } from "@reflexjs/components"
import { Videos } from "./videos"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allVideo(
      sort: { fields: [date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      videos: nodes {
        ...VideoFragment
      }
    }
  }
`

export default ({ data, ...props }) => {
  const { previousPagePath, nextPagePath } = props.pageContext
  return (
    <Layout pathname={props.location.pathname}>
      {data.allVideo ? (
        <Section py="8|12|14">
          <Container>
            <Videos {...data.allVideo} {...props} />
            <Pager
              previousPagePath={previousPagePath}
              nextPagePath={nextPagePath}
            />
          </Container>
        </Section>
      ) : null}
    </Layout>
  )
}
