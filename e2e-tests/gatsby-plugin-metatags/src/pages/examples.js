import * as React from "react"
import { Layout } from "@reflexjs/gatsby-theme-core"

export default ({ location }) => {
  return <Layout pathname={location.pathname}>Example</Layout>
}
