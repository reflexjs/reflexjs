import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "./seo"
import { Layout } from "./layout"
import { Page } from "./page"

export const query = graphql`
  query($id: String) {
    page(id: { eq: $id }) {
      ...PageFragment
    }
  }
`

export default ({ data }) => {
  const page = data?.page
  return (
    page && (
      <Layout>
        <Seo {...page.metatags} />
        <Page {...page} />
      </Layout>
    )
  )
}
