import * as React from "react"
import { graphql } from "gatsby"
import { Tutorial } from "./tutorial"

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

export default ({ data, ...props }) => {
  return (
    <Tutorial
      {...data.tutorial}
      previousTutorial={data.prev}
      nextTutorial={data.next}
      {...props}
    />
  )
}
