/** @jsx jsx */
import { jsx } from "./jsx-runtime"
import { ThemeProvider as ThemeUIProvider, ThemeStyles } from "theme-ui"

import { makeResponsive } from "./react-jsx"
import { Theme } from "./types"
import styleProps from "./style-props"

export interface MDXProviderComponents {
  /*eslint @typescript-eslint/no-explicit-any: "off" */
  [key: string]: React.ComponentType<any> | string | undefined
}

export interface ThemeProviderProps {
  theme: Theme | ((outerTheme: Theme) => Theme)
  children?: React.ReactNode
  components?: MDXProviderComponents
}

export function ThemeProvider({ theme, ...props }: ThemeProviderProps) {
  let _theme = theme
  if (typeof theme !== "function") {
    _theme = {
      ...theme,
      styles: transformStyles(theme.styles),
    }
  }

  return <ThemeUIProvider theme={_theme} {...props} />
}

const conflictingProps = ["p"]

function transformStyles(styles, result = {}, tree = 0): ThemeStyles {
  if (styles !== null && typeof styles === "object") {
    Object.entries(styles).forEach(([key, value]) => {
      if (!Array.isArray(value) && typeof value === "object") {
        return (result[key.replace(/^_/, ":")] = transformStyles(
          value,
          {},
          tree + 1
        ))
      }

      if (tree === 1 && conflictingProps.includes(key)) {
        return
      }

      if (typeof styleProps[key] !== "undefined") {
        const names = styleProps[key]
        names.forEach((name) => {
          result[name] = makeResponsive(value)
        })
      }
    })
  }

  return result
}
