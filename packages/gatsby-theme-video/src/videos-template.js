/** @jsx jsx */
import { jsx } from "reflexjs"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
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
        <section py="8|12|14">
          <div variant="container">
            <Videos {...data.allVideo} {...props} />
            <Pager
              previousPagePath={previousPagePath}
              nextPagePath={nextPagePath}
            />
          </div>
        </section>
      ) : null}
      <Block src="videos-footer" videos={data.allVideo.videos} />
    </Layout>
  )
}
