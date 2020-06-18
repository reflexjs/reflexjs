import * as React from "react"
import { Layout } from "@reflexjs/gatsby-theme-core"
import { Container, Div, Section, Grid } from "@reflexjs/components"
import { Pager } from "@reflexjs/gatsby-theme-core"
import { PostTeaser } from "./post-teaser"

export const Posts = ({ posts, pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Layout>
      <Section py="8|12|14">
        <Container>
          <Grid col="1|2" gap="10|14">
            {posts &&
              posts.map((post, index) => (
                <Div key={index} mb="8">
                  <PostTeaser {...post} />
                </Div>
              ))}
          </Grid>

          <Pager
            previousPagePath={previousPagePath}
            nextPagePath={nextPagePath}
          />
        </Container>
      </Section>
    </Layout>
  )
}
