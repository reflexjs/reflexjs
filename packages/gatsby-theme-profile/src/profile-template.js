import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Profile } from "./profile"

export default ({ data, ...props }) => (
  <Layout pathname={props.location.pathname}>
    {data.profile ? <Profile {...data.profile} /> : null}
  </Layout>
)

export const query = graphql`
  query($id: String) {
    profile(id: { eq: $id }) {
      ...ProfileFragment
    }
  }
`
