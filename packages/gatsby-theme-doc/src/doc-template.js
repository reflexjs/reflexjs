import React from "react"
import { graphql } from "gatsby"
import { Doc } from "./doc"

export default ({ data }) => <Doc {...data.doc} />

export const query = graphql`
  query($id: String) {
    doc(id: { eq: $id }) {
      ...DocFragment
    }
  }
`
