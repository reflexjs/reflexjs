import { ThemeUIJSX } from "@theme-ui/core"
import { jsxDEV as themeUIJsxDEV } from "theme-ui/jsx-dev-runtime"
import { parseProps } from "./react-jsx"

export { Fragment } from "react"

export const jsxDEV = <P>(
  type: React.ElementType<P>,
  props: P,
  key: string | undefined,
  isStaticChildren: boolean,
  source: {
    filename: string
    lineNumber: number
    columnNumber: number
  },
  self: any
): ThemeUIJSX.Element =>
  themeUIJsxDEV(
    type,
    parseProps(type, props),
    key,
    isStaticChildren,
    source,
    self
  )
