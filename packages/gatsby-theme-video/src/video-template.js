import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Video } from "./video"

export default ({ data, ...props }) => (
  <Layout pathname={props.location.pathname}>
    {data.video ? <Video {...data.video} /> : null}
  </Layout>
)

export const query = graphql`
  query($id: String) {
    video(id: { eq: $id }) {
      ...VideoFragment
    }
  }
`
