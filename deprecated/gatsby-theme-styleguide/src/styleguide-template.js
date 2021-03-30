import React from "react"
import { graphql } from "gatsby"
import { Styleguide } from "./styleguide"

export default ({ data }) => <Styleguide {...data.styleguide} />

export const query = graphql`
  query($id: String) {
    styleguide(id: { eq: $id }) {
      ...StyleguideFragment
    }
  }
`
