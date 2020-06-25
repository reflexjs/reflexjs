/* eslint-disable react/display-name */
import * as React from "react"
import { Box } from "./box"
import { split } from "./helpers"

const RESPONSIVE_SEPARATOR = "|"

const getTag = (tag, componentProps, __themeKey) =>
  React.forwardRef(({ ...props }, ref) => {
    props = {
      ...componentProps,
      ...props,
    }

    const [styleProps, otherProps] = split(props)

    // Allow responsive values to be written as "foo|bar|baz".
    Object.keys(styleProps).forEach((propName) => {
      const prop = styleProps[propName]
      if (typeof prop !== "string") return

      styleProps[propName] = styleProps[propName]
        .split(RESPONSIVE_SEPARATOR)
        .map((value) => {
          if (value === "null") {
            return null
          }

          return value.match(/^\d+$/) ? parseInt(value) : value
        })
    })

    return (
      <Box
        __themeKey={__themeKey || tag}
        ref={ref}
        as={tag}
        {...styleProps}
        {...otherProps}
      />
    )
  })

// HTML components.
// TODO: Use commonjs export so that exports[NAME] can be in a loop?
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
  },
  "container"
)

export const Flexbox = getTag(
  "div",
  {
    d: "flex",
  },
  "flexbox"
)

export const Grid = getTag(
  "div",
  {
    d: "grid",
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
