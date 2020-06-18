import * as React from "react"
import { Layout, Seo, useColorMode } from "@reflexjs/gatsby-theme-core"
import { Container, Section, Grid } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Thumbnail } from "../../thumbnail"
import { useLibraryPage } from "../../use-library-page"

export default () => {
  const [colorMode] = useColorMode()
  const pages = useLibraryPage()

  return (
    <Layout footer={false}>
      <Seo title="Examples" />
      <Section pt="8|12|16">
        <Container>
          <Block src="library/header-pages" />
          <Grid col="1|2|3" gap="4|6|8" mt="10" alignItems="flex-start">
            {pages.map((page, index) => (
              <Thumbnail key={index} {...page} mb="6" mode={colorMode} />
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}
