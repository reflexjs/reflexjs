import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "./seo"
import { Layout } from "./layout"
import { Page } from "./page"

export const query = graphql`
  query($id: String) {
    page(id: { eq: $id }) {
      id
      title
      slug
      excerpt
      body
      image
    }
  }
`

export default ({ data }) => {
  const page = data.page
  return (
    <Layout>
      <Seo
        title={page.title}
        description={page.excerpt}
        pathname={page.slug}
        image={page.image}
      />
      <Page {...page} />
    </Layout>
  )
}
