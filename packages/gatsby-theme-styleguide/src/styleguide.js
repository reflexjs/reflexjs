/** @jsx jsx */
import { jsx } from "reflexjs"
import { MDXProvider, MDXRenderer, Layout } from "@reflexjs/gatsby-theme-core"
import { StyleguideHeader } from "./styleguide-header"
import { Palette } from "./palette"

export const Styleguide = ({ title, body }) => (
  <Layout>
    <div variant="container" py="6">
      <div display="grid" row="50px 1fr" alignItems="flex-start" gap="10">
        <StyleguideHeader position="sticky" top="0" bg="background" />
        <main>
          <h1
            variant="heading.h1"
            mt="0"
            borderBottom="1px solid"
            borderColor="border"
            pb="4"
          >
            {title}
          </h1>
          <MDXProvider
            components={{
              Palette,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </main>
      </div>
    </div>
  </Layout>
)
