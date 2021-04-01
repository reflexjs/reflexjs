import { jsx as themeUIJSX, jsxs as themeUIJSXS } from "theme-ui/jsx-runtime"

import { parseProps } from "./react-jsx"
export { Fragment } from "react"

export const jsx = <P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): JSX.Element => themeUIJSX(type, parseProps(type, props), key)

export const jsxs = <P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): JSX.Element => themeUIJSXS(type, parseProps(type, props), key)
