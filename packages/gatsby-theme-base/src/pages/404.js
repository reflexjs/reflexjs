import * as React from "react"
import { Container, H1 } from "@reflexjs/components"
import { Link, Icon } from "@reflexjs/gatsby-theme-core"

export default () => (
  <Container textAlign="center">
    <H1>404 - Page not found</H1>
    <Link to="/">
      <Icon name="arrow-left" mr="2" />
      Back home
    </Link>
  </Container>
)
