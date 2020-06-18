import { css, get } from "@theme-ui/css"
import styled from "@emotion/styled"
import {
  createShouldForwardProp,
  props,
} from "@styled-system/should-forward-prop"
import { styleProps } from "./style-props"
import { customProps } from "./custom-props"
import { pseudoProps } from "./pseudo-props"

const shouldForwardProp = createShouldForwardProp([
  ...props,
  ...Object.keys(customProps),
  ...Object.keys(pseudoProps),
])

const base = ({ theme, __themeKey, ...props }) => {
  let styles = {
    ...get(theme, __themeKey),
  }

  // Allow style props to override theme styles.
  if (styles) {
    Object.keys(styles).forEach((styleProp) => {
      if (props[styleProp]) {
        styles = {
          ...styles,
          [styleProp]: props[styleProp],
        }
      }
    })
  }

  return css(styles)
}

const variant = ({ theme, variant = " ", __themeKey = "variants" }) => {
  let styles = {}

  variant.split(" ").forEach((_variant) => {
    styles = {
      ...styles,
      ...get(theme, __themeKey + "." + _variant),
    }
  })

  return css(styles)
}

export const pseudo = (props) => {
  const _pseudoProps = Object.keys(props).filter((propName) =>
    Object.keys(pseudoProps).includes(propName)
  )

  if (!_pseudoProps.length) return {}

  const pseudoStyles = {}
  _pseudoProps.forEach((pseudoProp) => {
    const { pseudoClass, name } = pseudoProps[pseudoProp]
    pseudoStyles[`&:${pseudoClass}`] = {
      ...pseudoStyles[`&:${pseudoClass}`],
      [name]: props[pseudoProp],
    }
  })

  return css(pseudoStyles)
}

export const Box = styled(`div`, {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  base,
  variant,
  styleProps,
  pseudo,
  (props) => css(props.sx)(props.theme),
  (props) => props.css
)
