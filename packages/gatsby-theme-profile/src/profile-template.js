import React from "react"
import { graphql } from "gatsby"
import { Profile } from "./profile"

export default ({ data }) => <Profile {...data.profile} />

export const query = graphql`
  query($id: String) {
    profile(id: { eq: $id }) {
      ...ProfileFragment
    }
  }
`
