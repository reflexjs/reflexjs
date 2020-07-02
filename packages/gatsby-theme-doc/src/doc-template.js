import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Doc } from "./doc"

export default ({ data }) => (
  <Layout pathname={data.doc.slug}>
    <Doc {...data.doc} />
  </Layout>
)

export const query = graphql`
  query($id: String) {
    doc(id: { eq: $id }) {
      ...DocFragment
    }
  }
`
