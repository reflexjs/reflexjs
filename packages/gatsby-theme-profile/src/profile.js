import * as React from "react"
import { MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { H1, Container } from "@reflexjs/components"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const Profile = ({ name, body, picture }) => {
  return (
    <Container py="10">
      {picture && <Image src={picture} />}
      <H1>{name}</H1>
      <MDXRenderer>{body}</MDXRenderer>
    </Container>
  )
}
