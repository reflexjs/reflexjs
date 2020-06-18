import * as React from "react"
import { Container, Div, Section, Grid, H1 } from "@reflexjs/components"
import { Layout, Seo } from "@reflexjs/gatsby-theme-core"
import { PostTeaser } from "./post-teaser"

export const Tag = ({ name, posts }) => (
  <Layout>
    <Seo title={name} />
    <Section py="8|12|14">
      <Container>
        <H1 mt="0">{name}</H1>
        <Grid col="1|2" gap="10|14">
          {posts &&
            posts.map((post, index) => (
              <Div key={index} mb="8">
                <PostTeaser {...post} />
              </Div>
            ))}
        </Grid>
      </Container>
    </Section>
  </Layout>
)
