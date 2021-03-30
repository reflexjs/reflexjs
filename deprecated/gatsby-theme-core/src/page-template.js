import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "./layout"
import { Page } from "./page"

export const query = graphql`
  query($id: String) {
    page(id: { eq: $id }) {
      ...PageFragment
    }
  }
`

export default ({ data }) => (
  <Layout pathname={data.page.slug}>
    {data.page ? <Page {...data.page} /> : null}
  </Layout>
)
