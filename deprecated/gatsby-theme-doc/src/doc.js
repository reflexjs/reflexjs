/** @jsx jsx */
import { jsx, Container, Grid, Flexbox } from "reflexjs"
import * as React from "react"
import {
  MDXRenderer,
  MDXProvider,
  ThemeProvider,
  Icon,
} from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { MDXComponents } from "./mdx-components"
import { DocNav } from "./doc-nav"
import docTheme from "./doc-theme"

export const Doc = ({ title, excerpt, body, previousDoc, nextDoc }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <ThemeProvider theme={docTheme}>
      <MDXProvider components={MDXComponents}>
        <div variant="container" pb="8">
          <button
            variant="button"
            display="inline-flex|none"
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
          </button>
          <Grid
            col="1|180px 1fr|180px 1fr|250px 1fr"
            gap="null|6|6|20"
            alignItems="flex-start"
          >
            <div
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
            </div>
            <div mt={[10, 0]} pt="8" className="DocSearch-content">
              <Block src="docs-header" my="6" />

              {title && (
                <h1 variant="heading.h1" mt="0" mb="2" fontWeight="extrabold">
                  {title}
                </h1>
              )}

              {excerpt && (
                <p fontSize="xl|2xl" mt="2" mb="0">
                  {excerpt}
                </p>
              )}

              {body && <MDXRenderer>{body}</MDXRenderer>}

              <Flexbox justifyContent="space-between" mt="10">
                {previousDoc && (
                  <a variant="button.link" href={previousDoc.slug}>
                    <Icon name="arrow-left" mr="2" />
                    {previousDoc.title}
                  </a>
                )}
                {nextDoc && (
                  <a variant="button.primary" ml="auto" href={nextDoc.slug}>
                    {nextDoc.title}
                    <Icon name="arrow-right" ml="2" />
                  </a>
                )}
              </Flexbox>
            </div>
          </Grid>
        </div>
      </MDXProvider>
    </ThemeProvider>
  )
}
