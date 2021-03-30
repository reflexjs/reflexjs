import * as React from "react"
import { graphql } from "gatsby"
import { LibraryPage } from "./library-page"

export const query = graphql`
  query($id: String!) {
    libraryPage(id: { eq: $id }) {
      ...LibraryPageFragment
    }
  }
`

export default ({ data }) => <LibraryPage {...data.libraryPage} />
