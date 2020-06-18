import * as React from "react"
import { Layout, Seo, MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { H1, Container } from "@reflexjs/components"
import { Image } from "@reflexjs/gatsby-theme-core"

export const Profile = ({ name, excerpt, body, picture }) => {
  return (
    <Layout>
      <Seo title={name} description={excerpt} />
      <Container py="10">
        {picture && <Image src={picture} />}
        <H1>{name}</H1>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  )
}
