import * as React from "react"
import { ThemeProvider } from "reflexjs"
import useThemeConfig from "./use-theme-config"
import legacyTheme from "./index"

const Root = ({ children }) => {
  const themeUiConfig = useThemeConfig()
  const { theme } = themeUiConfig

  return (
    <ThemeProvider theme={Object.keys(theme).length ? theme : legacyTheme}>
      {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
