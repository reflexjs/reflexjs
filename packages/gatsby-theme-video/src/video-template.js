import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Video } from "./video"

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    video(id: { eq: $id }) {
      ...VideoFragment
    }
    prev: video(id: { eq: $prev }) {
      ...VideoFragment
    }
    next: video(id: { eq: $next }) {
      ...VideoFragment
    }
  }
`

export default ({ data, ...props }) => {
  props = {
    ...data.video,
    previous: data.prev,
    next: data.next,
    ...props,
  }
  return (
    <Layout pathname={data.video.slug}>
      <Block src="video-header" {...props} />
      {data.video ? <Video {...props} /> : null}
      <Block src="video-header" {...props} />
    </Layout>
  )
}
