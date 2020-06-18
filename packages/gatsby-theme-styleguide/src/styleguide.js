import * as React from "react"
import { MDXProvider, MDXRenderer, Layout } from "@reflexjs/gatsby-theme-core"
import { H1, Container, Main, Grid } from "@reflexjs/components"
import { StyleguideHeader } from "./styleguide-header"
import { Palette } from "./palette"

export const Styleguide = ({ title, body }) => (
  <Layout>
    <Container py="6">
      <Grid row="50px 1fr" alignItems="flex-start" gap="10">
        <StyleguideHeader position="sticky" top="0" bg="background" />
        <Main>
          <H1 mt="0" borderBottom="1px solid" borderColor="border" pb="4">
            {title}
          </H1>
          <MDXProvider
            components={{
              Palette,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Main>
      </Grid>
    </Container>
  </Layout>
)
