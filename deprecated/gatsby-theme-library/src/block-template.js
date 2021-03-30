import * as React from "react"
import { graphql } from "gatsby"
import { LibraryBlock } from "./library-block"

export const query = graphql`
  query($id: String!) {
    libraryBlock(id: { eq: $id }) {
      ...LibraryBlockFragment
    }
  }
`

export default ({ data }) => <LibraryBlock {...data.libraryBlock} />
