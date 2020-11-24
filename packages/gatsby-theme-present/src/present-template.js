import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Present } from "./present"

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    present(id: { eq: $id }) {
      ...PresentFragment
    }
    prev: present(id: { eq: $prev }) {
      ...PresentFragment
    }
    next: present(id: { eq: $next }) {
      ...PresentFragment
    }
  }
`

export default ({ data, ...props }) => {
  props = {
    ...data.present,
    previous: data.prev,
    next: data.next,
    ...props,
  }
  return (
    <Layout pathname={data.present.slug}>
      <Block src="present-header" {...props} />
      {data.present ? <Present {...props} /> : null}
      <Block src="present-header" {...props} />
    </Layout>
  )
}
