import * as React from "react"
import { graphql } from "gatsby"
import { Page } from "./page"

export const query = graphql`
  query($id: String) {
    page(id: { eq: $id }) {
      id
      title
      slug
      excerpt
      body
    }
  }
`

export default ({ data }) => <Page {...data.page} />
