import * as React from "react"
import {
  MDXRenderer,
  MDXProvider,
  ThemeProvider,
  Layout,
  Icon,
} from "@reflexjs/gatsby-theme-core"
import {
  H1,
  Container,
  Grid,
  Div,
  Aside,
  Button,
  P,
} from "@reflexjs/components"
import { Block } from "@reflexjs/gatsby-theme-block"
import { MDXComponents } from "./mdx-components"
import { DocNav } from "./doc-nav"
import docTheme from "./doc-theme"

export const Doc = ({ title, excerpt, body }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <Layout footer={false}>
      <ThemeProvider theme={docTheme}>
        <MDXProvider components={MDXComponents}>
          <Container pb="8">
            <Button
              d={["inline-flex", "none"]}
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
              Menu{" "}
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
              <Aside
                position={["fixed", "sticky"]}
                top={[showMenu ? "116px" : "-100vh", 0]}
                transition="all .15s ease-in"
                left="0"
                width={["100%", "auto"]}
                h="100vh"
                borderRightWidth={[0, 1]}
                overflow="scroll"
                bg="background"
                zIndex="90"
                pl={[4, 0]}
                pt={[4, 8]}
                pb="32"
              >
                <DocNav onClick={() => setShowMenu(false)} />
              </Aside>
              <Div mt={[10, 0]} pt="8">
                <Block src="docs-header" my="6" />

                {title && (
                  <H1 mt="0" mb="4" fontWeight="extrabold">
                    {title}
                  </H1>
                )}

                {excerpt && (
                  <P fontSize="xl|2xl" mt="2" mb="0">
                    {excerpt}
                  </P>
                )}

                {body && <MDXRenderer>{body}</MDXRenderer>}
              </Div>
            </Grid>
          </Container>
        </MDXProvider>
      </ThemeProvider>
    </Layout>
  )
}
