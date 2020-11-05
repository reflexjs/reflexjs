import * as React from "react"
import { jsx as themeUIJSX, css, ThemeUIStyleObject } from "theme-ui"
import { InterpolationWithTheme } from "@emotion/core"
import styleProps from "./style-props"
import { StyleProps, SxProps } from "./types"
import deepmerge from "deepmerge"

// Helper to omit props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
const omit = (props) => {
  const next = {}
  for (let key in props) {
    if (regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

// Helper to pick props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
const pick = (props) => {
  const next = {}
  for (let key in props) {
    if (!regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

const split = (props) => [pick(props), omit(props)]

const RESPONSIVE_SEPARATOR = "|"

const regex = new RegExp(`^(${Object.keys(styleProps).join("|")})$`)

const makeResponsive = (prop) => {
  if (typeof prop !== "string") {
    return prop
  }

  // Allow responsive values to be written as "foo|bar|baz".
  return prop.split(RESPONSIVE_SEPARATOR).map((value) => {
    if (value === "null") {
      return null
    }
    return value.match(/^\d+$/) ? parseInt(value) : value
  })
}

export function transformProps(
  props: StyleProps,
  result = {}
): ThemeUIStyleObject {
  if (props !== null && typeof props === "object") {
    Object.entries(props).forEach(([key, value]) => {
      if (!Array.isArray(value) && typeof value === "object") {
        return (result[key.replace(/^_/, ":")] = transformProps(value))
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

function parseProps(props) {
  if (!props) return null
  const { variant, sx = {}, ..._props } = props
  const [styleProps, otherProps] = split(_props)
  const sxProps = transformProps(deepmerge(styleProps, sx))

  let next: typeof props & {
    css?: InterpolationWithTheme<any>
    sx: SxProps
  } = {
    ...otherProps,
  }

  if (!variant) {
    next.sx = sxProps
    return next
  }

  next.css = (theme) => {
    const variants = variant.split(" ")
    let __themeKeyFailed = false
    let variantStyles = {}
    variants.map((variant) => {
      const [__themeKey, ...nestedVariants] = variant.split(".")
      if (!theme[__themeKey]) {
        __themeKeyFailed = true
        return
      }

      // Handle nested variants.
      let styles = theme[__themeKey]
      nestedVariants.forEach((v) => {
        if (theme[__themeKey][v]) {
          const vStyles = theme[__themeKey][v]
          styles = deepmerge(styles, vStyles)
        }
      })

      variantStyles = deepmerge(variantStyles, styles)
    })

    if (__themeKeyFailed) {
      return sxProps ? css(sxProps)(theme) : null
    }

    return css(
      transformProps({
        ...variantStyles,
        ...sxProps,
      })
    )(theme)
  }

  return next
}

export const jsx: typeof React.createElement = (type, props, ...children) => {
  return themeUIJSX.apply(undefined, [type, parseProps(props), ...children])
}
