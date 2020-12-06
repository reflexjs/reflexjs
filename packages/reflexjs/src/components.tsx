/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/core"
import { ComponentWithStyleProps } from "./types"
import {
  jsx,
  get,
  css,
  useTheme,
  Theme,
  ThemeUIProvider,
  merge,
} from "./react-jsx"
import mdxComponents from "./mdx-components"

export interface GlobalStylesProps {
  theme: Theme
}

export const GlobalStyles = ({ theme }) => {
  const globalStyles = get(theme, "styles.global")
  if (!globalStyles) return null
  return (
    <Global
      styles={() => {
        return css(globalStyles)(theme)
      }}
    />
  )
}

export interface MDXProviderComponents {
  /*eslint @typescript-eslint/no-explicit-any: "off" */
  [key: string]: React.ComponentType<any> | string | undefined
}

export interface ThemeProviderProps {
  theme: Theme
  children?: React.ReactNode
  components?: MDXProviderComponents
}

// Temp preset handling.
// TODO: Remove when theme-ui 0.4.0 is released.
export function mergeThemePreset(theme) {
  if (!("preset" in theme)) return theme
  const { preset, ...rest } = theme
  let baseTheme = preset.preset ? {} : preset
  if (preset.preset) {
    const { preset: childPreset, ...childTheme } = preset
    baseTheme = merge(childPreset, childTheme)
  }
  return merge(baseTheme, rest)
}

export const ThemeProvider = ({
  children,
  theme,
  components,
  ...props
}: ThemeProviderProps) => {
  components = {
    ...mdxComponents,
    ...components,
  }

  // Handle theme preset.
  // TODO: Figure out if we still want to support this.
  theme = mergeThemePreset(theme)

  return (
    <ThemeUIProvider theme={theme} components={components} {...props}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeUIProvider>
  )
}

export const Box = React.forwardRef(
  ({ as = "div", ...props }: ComponentWithStyleProps<"div">, ref) => {
    return jsx(as, {
      ref,
      ...props,
    })
  }
)

export const Container = React.forwardRef(
  (props: ComponentWithStyleProps<"div">, ref) => {
    return <Box ref={ref} variant="container" {...props} />
  }
)

export const Flexbox = React.forwardRef(
  (props: ComponentWithStyleProps<"div">, ref) => (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      {...props}
    />
  )
)

export const Flex = Flexbox

export const Grid = React.forwardRef(
  (props: ComponentWithStyleProps<"div">, ref) => (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridAutoFlow: "dense",
      }}
      {...props}
    />
  )
)

export const VisuallyHidden = React.forwardRef(
  (props: ComponentWithStyleProps<"div">, ref) => (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        top: "auto",
        overflow: "hidden",
        clipPath: "rect(1px, 1px, 1px, 1px)",
        width: "1px",
        height: "1px",
        whiteSpace: "nowrap",
      }}
      {...props}
    />
  )
)

export type IconProps = ComponentWithStyleProps<"svg">

export const Icon = ({ name, size = 4, ...props }: IconProps) => {
  const { theme } = useTheme()
  return theme.icons && theme.icons[name] ? (
    <svg
      fill="currentColor"
      dangerouslySetInnerHTML={{
        __html: theme.icons[name],
      }}
      size={size}
      {...props}
    />
  ) : null
}
