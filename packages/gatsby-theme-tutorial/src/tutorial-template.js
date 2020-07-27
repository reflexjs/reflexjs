import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Tutorial } from "./tutorial"

export default ({ data, ...props }) => (
  <Layout pathname={data.tutorial.slug}>
    <Tutorial
      {...data.tutorial}
      previousTutorial={data.prev}
      nextTutorial={data.next}
      {...props}
    />
  </Layout>
)

export const query = graphql`
  query($id: String, $prev: String, $next: String) {
    tutorial(id: { eq: $id }) {
      ...TutorialFragment
    }
    prev: tutorial(id: { eq: $prev }) {
      ...TutorialFragment
    }
    next: tutorial(id: { eq: $next }) {
      ...TutorialFragment
    }
  }
`
