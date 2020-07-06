import * as React from "react"
import { Layout, useColorMode, Icon } from "@reflexjs/gatsby-theme-core"
import { Container, Div, H2, Grid, Button } from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Thumbnail } from "../../thumbnail"
import { useLibraryBlockCategories } from "../../use-library-block-categories"
import { BlockCategoriesNav } from "../../block-categories-nav"

export default ({ location }) => {
  const [colorMode] = useColorMode()
  const [showMenu, setShowMenu] = React.useState(false)
  const categories = useLibraryBlockCategories()

  return (
    <Layout pathname={location && location.pathname}>
      <Container pb="8">
        <Button
          d="inline-flex|none"
          w="100%"
          justifyContent="space-between"
          boxShadow="lg"
          border="0"
          position="fixed"
          top="55px"
          rounded="none"
          left="0"
          right="0"
          pt="17px"
          px="4"
          bg="background"
          zIndex="200"
          onClick={() => setShowMenu(!showMenu)}
        >
          Block categories{" "}
          <Icon
            name="chevron-down"
            transform={showMenu ? "rotate(180deg)" : "none"}
            transition="all .15s ease-in"
            mr="2"
          />
        </Button>
        <Grid
          col="1|180px 1fr|180px 1fr|250px 1fr"
          gap="null|6|6|20"
          alignItems="flex-start"
        >
          <Div
            position="fixed|sticky"
            top={[showMenu ? "116px" : "-100vh", 0]}
            transition="all .15s ease-in|none"
            left="0"
            width="100%|auto"
            h="100vh"
            borderRightWidth="0|1"
            overflow="scroll"
            bg="background"
            zIndex="90"
            pl="4|0"
            pt="4|8"
            pb="32"
          >
            <BlockCategoriesNav
              categories={categories}
              onClick={() => setShowMenu(false)}
            />
          </Div>
          <Div mt="10|0" pt="8">
            <Block src="library/header-blocks" />
            {categories.map(({ name, slug, display, blocks }, index) => {
              return (
                <React.Fragment key={index}>
                  <H2
                    id={slug}
                    pt="8"
                    mt="8"
                    borderTopWidth="1px"
                    scrollMarginTop="130px|40px"
                    fontSize="2xl"
                  >
                    {name}
                  </H2>
                  {display === "grid" ? (
                    <Grid
                      col={display === "grid" && "1|1|2"}
                      gap="8"
                      alignItems="flex-start"
                    >
                      <Grid gap="8">
                        {blocks
                          .slice(0, 1 + blocks.length / 2)
                          .map((block, index) => (
                            <Thumbnail
                              key={index}
                              mb={display !== "grid" && 4}
                              mode={colorMode}
                              {...block}
                            />
                          ))}
                      </Grid>
                      <Grid gap="8">
                        {blocks
                          .slice(blocks.length / 2 + 1, blocks.length)
                          .map((block, index) => (
                            <Thumbnail
                              key={index}
                              mb={display !== "grid" && 4}
                              mode={colorMode}
                              {...block}
                            />
                          ))}
                      </Grid>
                    </Grid>
                  ) : (
                    blocks.map((block, index) => (
                      <Thumbnail
                        key={index}
                        mb={display !== "grid" && 4}
                        mode={colorMode}
                        {...block}
                      />
                    ))
                  )}
                </React.Fragment>
              )
            })}
          </Div>
        </Grid>
      </Container>
    </Layout>
  )
}
