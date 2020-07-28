import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Container, Section } from "@reflexjs/components"
import { Videos } from "./videos"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allVideo(
      sort: { fields: [date], order: DESC }
      filter: { published: { eq: true } }
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
      <Block src="videos-header" videos={data.allVideo.videos} />
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
      <Block src="videos-footer" videos={data.allVideo.videos} />
    </Layout>
  )
}
