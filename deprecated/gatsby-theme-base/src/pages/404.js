/** @jsx jsx */
import { jsx } from "reflexjs"
import { Link, Icon } from "@reflexjs/gatsby-theme-core"

export default () => (
  <div variant="container" textAlign="center">
    <h1>404 - Page not found</h1>
    <Link to="/">
      <Icon name="arrow-left" mr="2" />
      Back home
    </Link>
  </div>
)
