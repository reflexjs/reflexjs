import * as React from "react"
import { ThemeProvider } from "reflexjs"
import useThemeConfig from "./use-theme-config"

const Root = ({ children }) => {
  const themeUiConfig = useThemeConfig()
  const { theme } = themeUiConfig

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
