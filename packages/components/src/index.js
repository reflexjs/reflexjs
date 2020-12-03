/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import isPropValid from "@emotion/is-prop-valid"
import { forwardRef } from "react"
import { styleProps } from "./style-props"

const RESPONSIVE_SEPARATOR = "|"

const regex = new RegExp(`^(${Object.keys(styleProps).join("|")})$`)

// Object.fromEntries ponyfill.
export const fromEntries = (iterable) => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})
}

// Helper to omit props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
export const omit = (props) => {
  const next = {}
  for (let key in props) {
    if (regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

// Helper to pick props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
export const pick = (props) => {
  const next = {}
  for (let key in props) {
    if (!regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

export const split = (props) => [pick(props), omit(props)]

export const propsToSxProps = (props) => {
  const [_styleProps, otherProps] = split(props)
  const sxProps = {}

  Object.entries(_styleProps).forEach(([propName, propValue]) => {
    // Handle responsive values.
    if (typeof propValue === "string") {
      // Allow responsive values to be written as "foo|bar|baz".
      propValue = propValue.split(RESPONSIVE_SEPARATOR).map((value) => {
        if (value === "null") {
          return null
        }
        return value.match(/^\d+$/) ? parseInt(value) : value
      })
    }

    const { pseudoClass, names } = styleProps[propName]
    return names.forEach((name) => {
      if (!pseudoClass) return (sxProps[name] = propValue)

      const pseudoSelector = `&:${pseudoClass}`
      if (typeof sxProps[pseudoSelector] === "undefined")
        sxProps[pseudoSelector] = {}

      return (sxProps[pseudoSelector][name] = propValue)
    })
  })

  const validProps = fromEntries(
    Object.entries(otherProps).filter(([prop, _]) => isPropValid(prop))
  )

  return [sxProps, validProps]
}

export const Box = forwardRef(({ as = "div", __themeKey, ...props }, ref) => {
  let sx = {}
  const { theme } = useThemeUI()
  const [{ variant, ...sxProps }, otherProps] = propsToSxProps(props)

  // Handle variants.
  if (theme) {
    sx = { ...theme[__themeKey] }
    if (variant) {
      variant.forEach((variants) =>
        variants.split(" ").map((v) => {
          return (sx = {
            ...sx,
            ...theme[__themeKey][v],
          })
        })
      )
    }
  }

  sx = {
    ...sx,
    ...sxProps,
  }

  return jsx(as, {
    ref,
    sx,
    ...otherProps,
  })
})

export const getTag = (tag, componentProps, __themeKey) =>
  forwardRef((props, ref) => {
    props = {
      ...componentProps,
      ...props,
    }

    return <Box __themeKey={__themeKey || tag} ref={ref} as={tag} {...props} />
  })

export const A = getTag("a")
export const Abbr = getTag("abbr")
export const Address = getTag("address")
export const Area = getTag("area")
export const Article = getTag("article")
export const Aside = getTag("aside")
export const Audio = getTag("audio")
export const B = getTag("b")
export const Base = getTag("base")
export const Bdi = getTag("bdi")
export const Bdo = getTag("bdo")
export const Blockquote = getTag("blockquote")
export const Body = getTag("body")
export const Br = getTag("br")
export const Button = getTag("button")
export const Canvas = getTag("canvas")
export const Caption = getTag("caption")
export const Cite = getTag("cite")
export const Code = getTag("code")
export const Col = getTag("col")
export const Colgroup = getTag("colgroup")
export const Data = getTag("data")
export const Datalist = getTag("datalist")
export const Dd = getTag("dd")
export const Del = getTag("del")
export const Details = getTag("details")
export const Dfn = getTag("dfn")
export const Dialog = getTag("dialog")
export const Div = getTag("div")
export const Dl = getTag("dl")
export const Dt = getTag("dt")
export const Em = getTag("em")
export const Embed = getTag("embed")
export const Fieldset = getTag("fieldset")
export const Figcaption = getTag("figcaption")
export const Figure = getTag("figure")
export const Footer = getTag("footer")
export const Form = getTag("form")
export const H1 = getTag("h1")
export const H2 = getTag("h2")
export const H3 = getTag("h3")
export const H4 = getTag("h4")
export const H5 = getTag("h5")
export const H6 = getTag("h6")
export const Head = getTag("head")
export const Header = getTag("header")
export const Hr = getTag("hr")
export const Html = getTag("html")
export const I = getTag("i")
export const Iframe = getTag("iframe")
export const Img = getTag("img")
export const Input = getTag("input")
export const Ins = getTag("ins")
export const Kbd = getTag("kbd")
export const Label = getTag("label")
export const Legend = getTag("legend")
export const Li = getTag("li")
export const Main = getTag("main")
export const Map = getTag("map")
export const Mark = getTag("mark")
export const Meta = getTag("meta")
export const Meter = getTag("meter")
export const Nav = getTag("nav")
export const Ol = getTag("ol")
export const Optgroup = getTag("optgroup")
export const Option = getTag("option")
export const Output = getTag("output")
export const P = getTag("p")
export const Param = getTag("param")
export const Path = getTag("path")
export const Picture = getTag("picture")
export const Pre = getTag("pre")
export const Progress = getTag("progress")
export const Q = getTag("q")
export const Rp = getTag("rp")
export const Rt = getTag("rt")
export const Ruby = getTag("ruby")
export const S = getTag("s")
export const Samp = getTag("samp")
export const Section = getTag("section")
export const Select = getTag("select")
export const Small = getTag("small")
export const Source = getTag("source")
export const Span = getTag("span")
export const Strong = getTag("strong")
export const Style = getTag("style")
export const Sub = getTag("sub")
export const Summary = getTag("summary")
export const Sup = getTag("sup")
export const Svg = getTag("svg")
export const Table = getTag("table")
export const Tbody = getTag("tbody")
export const Td = getTag("td")
export const Template = getTag("template")
export const Textarea = getTag("textarea")
export const Tfoot = getTag("tfoot")
export const Th = getTag("th")
export const Thead = getTag("thead")
export const Time = getTag("time")
export const Title = getTag("title")
export const Tr = getTag("tr")
export const Track = getTag("track")
export const U = getTag("u")
export const Ul = getTag("ul")
export const Video = getTag("video")
export const Wbr = getTag("wbr")

// Additionl components.
export const Container = getTag(
  "div",
  {
    mx: "auto",
    px: [4, 6, 6, 4],
    maxWidth: 1110,

    sm: {
      maxWidth: 640,
    },

    md: {
      maxWidth: 768,
    },

    lg: {
      maxWidth: 1024,
    },

    xl: {
      maxWidth: 1280,
    },
  },
  "container"
)

export const Flexbox = getTag(
  "div",
  {
    display: "flex",
    alignItems: "center",
  },
  "flexbox"
)

export const Grid = getTag(
  "div",
  {
    display: "grid",
    gridAutoFlow: "dense",
  },
  "grid"
)

export const VisuallyHidden = getTag("span", {
  position: "absolute",
  top: "auto",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)",
  width: "1px",
  height: "1px",
  whiteSpace: "nowrap",
})
