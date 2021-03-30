/** @jsx jsx */
import { jsx, Container, Grid } from "reflexjs"
import { Layout, useColorMode } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Thumbnail } from "../../thumbnail"
import { useLibraryPage } from "../../use-library-page"

export default ({ location }) => {
  const [colorMode] = useColorMode()
  const pages = useLibraryPage()

  return (
    <Layout pathname={location && location.pathname}>
      <section pt="8|12|16">
        <div variant="container">
          <Block src="library/header-pages" />
          <Grid col="1|2|3" gap="4|6|8" mt="10" alignItems="flex-start">
            {pages.map((page, index) => (
              <Thumbnail key={index} {...page} mb="6" mode={colorMode} />
            ))}
          </Grid>
        </div>
      </section>
    </Layout>
  )
}
