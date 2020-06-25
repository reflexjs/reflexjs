import * as React from "react"
import { MDXProvider, Icon, useColorMode } from "@reflexjs/gatsby-theme-core"
import { Main, Button, VisuallyHidden, Header } from "@reflexjs/components"

export const ModeToggle = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      data-cy="toggle-mode"
      variant="icon"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      ml={[2, 4]}
      hoverColor="primary"
      focusColor="text"
      {...props}
    >
      <Icon name={colorMode === "default" ? "sun" : "moon"} size="5" />
      <VisuallyHidden>Toggle mode</VisuallyHidden>
    </Button>
  )
}

export const Layout = ({ children }) => {
  return (
    <MDXProvider>
      <Header>
        <ModeToggle />
      </Header>
      <Main role="main">{children}</Main>
    </MDXProvider>
  )
}
