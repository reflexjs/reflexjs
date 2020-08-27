import * as React from "react"
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
  Property,
} from "csstype"

export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never
}

export type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>

export interface CssProps
  extends StandardLonghandProperties,
    StandardShorthandProperties {}

export type ComponentProps<T extends keyof JSX.IntrinsicElements> = Assign<
  React.ComponentProps<T>,
  BoxProps
>

export type ComponentWithRef<
  T,
  P extends keyof JSX.IntrinsicElements
> = ForwardRef<T, ComponentProps<P>>

export interface AliasProps {
  /**
   * Th/**e **d``** is a shorthand property for the **`display`** CSS property.
   */
  d?: Property.Display
  /**
   * The **`bg`** is a shorthand property for the **`backgroundColor`** CSS property.
   */
  bg?: Property.BackgroundColor
  /**
   * The **m``** is a shorthand property for the **`margin`** CSS property.
   */
  m?: Property.Margin
  /**
   * The **`mt`** is a shorthand property for the **`marginTop`** CSS property.
   */
  mt?: Property.MarginTop
  /**
   * The **`mr`** is a shorthand property for the **`marginRight`** CSS property.
   */
  mr?: Property.MarginRight
  /**
   * The **`mb`** is a shorthand property for the **`marginBottom`** CSS property.
   */
  mb?: Property.MarginBottom
  /**
   * The **`ml`** is a shorthand property for the **`marginLeft`** CSS property.
   */
  ml?: Property.MarginLeft
  /**
   * The **`mx`** is a shorthand property for the **`marginX`** CSS property.
   */
  mx?: Property.MarginLeft
  /**
   * The **`my`** is a shorthand property for the **`marginY`** CSS property.
   */
  my?: Property.MarginTop
  /**
   * The **p``** is a shorthand property for the **`padding`** CSS property.
   */
  p?: Property.Padding
  /**
   * The **`pt`** is a shorthand property for the **`paddingTop`** CSS property.
   */
  pt?: Property.PaddingTop
  /**
   * The **`pr`** is a shorthand property for the **`paddingRight`** CSS property.
   */
  pr?: Property.PaddingRight
  /**
   * The **`pb`** is a shorthand property for the **`paddingBottom`** CSS property.
   */
  pb?: Property.PaddingBottom
  /**
   * The **`pl`** is a shorthand property for the **`paddingLeft`** CSS property.
   */
  pl?: Property.PaddingLeft
  /**
   * The **`px`** is a shorthand property for the **`paddingX`** CSS property.
   */
  px?: Property.PaddingLeft
  /**
   * The **`py`** is a shorthand property for the **`paddingY`** CSS property.
   */
  py?: Property.PaddingTop
  /**
   * The **`maxW`** is a shorthand property for the **`maxWidth`** CSS property.
   */
  maxW?: Property.MaxWidth
  /**
   * The **`minW`** is a shorthand property for the **`minWidth`** CSS property.
   */
  minW?: Property.MinWidth
  /**
   * The **w``** is a shorthand property for the **`width`** CSS property.
   */
  w?: Property.Width
  /**
   * The **h``** is a shorthand property for the **`height`** CSS property.
   */
  h?: Property.Height
  /**
   * The **`maxH`** is a shorthand property for the **`maxHeight`** CSS property.
   */
  maxH?: Property.MaxHeight
  /**
   * The **`minH`** is a shorthand property for the **`minHeight`** CSS property.
   */
  minH?: Property.MinHeight
  /**
   * The **`col`** is a shorthand property for the **`gridTemplateColumns`** CSS property.
   */
  col?: Property.GridTemplateColumns
  /**
   * The **`colStart`** is a shorthand property for the **`gridColumnStart`** CSS property.
   */
  colStart?: Property.GridColumnStart
  /**
   * The **`colEnd`** is a shorthand property for the **`gridColumnEnd`** CSS property.
   */
  colEnd?: Property.GridColumnEnd
  /**
   * The **`colGap`** is a shorthand property for the **`gridColumnGap`** CSS property.
   */
  colGap?: Property.GridColumnGap
  /**
   * The **`row`** is a shorthand property for the **`gridTemplateRows`** CSS property.
   */
  row?: Property.GridTemplateRows
  /**
   * The **`rowStart`** is a shorthand property for the **`gridRowStart`** CSS property.
   */
  rowStart?: Property.GridRowStart
  /**
   * The **`rowEnd`** is a shorthand property for the **`gridRowEnd`** CSS property.
   */
  rowEnd?: Property.GridRowEnd
  /**
   * The **``** is a shorthand property for the **`gridRowGap`** CSS property.
   */
  rowGap?: Property.GridRowGap
  /**
   * The **`rounded`** is a shorthand property for the **`borderRadius`** CSS property.
   */
  rounded?: Property.BorderRadius
  /**
   * The **`rounded`** is a shorthand property for the **`borderTopLeftRadius`** and **`borderTopRightRadius`** CSS properties.
   */
  roundedTop?: Property.BorderTopLeftRadius
  /**
   * The **`roundedRight`** is a shorthand property for the **`borderTopRightRadius`** and **`borderBottomRightRadius`** CSS properties.
   */
  roundedRight?: Property.BorderTopRightRadius
  /**
   * The **`roundedBottom`** is a shorthand property for the **`borderBottomLeftRadius`** and **`borderBottomRightRadius`** CSS properties.
   */
  roundedBottom?: Property.BorderBottomLeftRadius
  /**
   * The **`roundedLeft`** is a shorthand property for the **`borderTopLeftRadius`** and **`borderBottomLeftRadius`** CSS properties.
   */
  roundedLeft?: Property.BorderTopLeftRadius
  /**
   * The **`size`** is a shorthand property for the **`width`** and **`height`** CSS properties.
   */
  size?: Property.Width
}

export interface BoxProps extends CssProps, AliasProps {
  as?: string
  variant?: string
}

export const A: ComponentWithRef<HTMLAnchorElement, "a">
export const Abbr: ComponentWithRef<HTMLElement, "abbr">
export const Address: ComponentWithRef<HTMLElement, "address">
export const Area: ComponentWithRef<HTMLAreaElement, "area">
export const Article: ComponentWithRef<HTMLElement, "article">
export const Aside: ComponentWithRef<HTMLElement, "aside">
export const Audio: ComponentWithRef<HTMLAudioElement, "audio">
export const B: ComponentWithRef<HTMLElement, "b">
export const Base: ComponentWithRef<HTMLBaseElement, "base">
export const Bdi: ComponentWithRef<HTMLElement, "bdi">
export const Bdo: ComponentWithRef<HTMLElement, "bdo">
export const Blockquote: ComponentWithRef<HTMLElement, "blockquote">
export const Body: ComponentWithRef<HTMLBodyElement, "body">
export const Br: ComponentWithRef<HTMLBRElement, "br">
export const Button: ComponentWithRef<HTMLButtonElement, "button">
export const Canvas: ComponentWithRef<HTMLCanvasElement, "canvas">
export const Caption: ComponentWithRef<HTMLTableCaptionElement, "caption">
export const Cite: ComponentWithRef<HTMLElement, "cite">
export const Code: ComponentWithRef<HTMLElement, "code">
export const Col: ComponentWithRef<HTMLTableColElement, "col">
export const Colgroup: ComponentWithRef<HTMLElement, "colgroup">
export const Data: ComponentWithRef<HTMLDataElement, "data">
export const Datalist: ComponentWithRef<HTMLDataListElement, "datalist">
export const Dd: ComponentWithRef<HTMLElement, "dd">
export const Del: ComponentWithRef<HTMLElement, "del">
export const Details: ComponentWithRef<HTMLDetailsElement, "details">
export const Dfn: ComponentWithRef<HTMLElement, "dfn">
export const Dialog: ComponentWithRef<HTMLDialogElement, "dialog">
export const Div: ComponentWithRef<HTMLDivElement, "div">
export const Dl: ComponentWithRef<HTMLElement, "dl">
export const Dt: ComponentWithRef<HTMLElement, "dt">
export const Em: ComponentWithRef<HTMLElement, "em">
export const Embed: ComponentWithRef<HTMLEmbedElement, "embed">
export const Fieldset: ComponentWithRef<HTMLFieldSetElement, "fieldset">
export const Figcaption: ComponentWithRef<HTMLElement, "figcaption">
export const Figure: ComponentWithRef<HTMLElement, "figure">
export const Footer: ComponentWithRef<HTMLElement, "footer">
export const Form: ComponentWithRef<HTMLFormElement, "form">
export const H1: ComponentWithRef<HTMLHeadingElement, "h1">
export const H2: ComponentWithRef<HTMLHeadingElement, "h2">
export const H3: ComponentWithRef<HTMLHeadingElement, "h3">
export const H4: ComponentWithRef<HTMLHeadingElement, "h4">
export const H5: ComponentWithRef<HTMLHeadingElement, "h5">
export const H6: ComponentWithRef<HTMLHeadingElement, "h6">
export const Head: ComponentWithRef<HTMLHeadElement, "head">
export const Header: ComponentWithRef<HTMLElement, "header">
export const Hr: ComponentWithRef<HTMLHRElement, "hr">
export const Html: ComponentWithRef<HTMLHtmlElement, "html">
export const I: ComponentWithRef<HTMLElement, "i">
export const Iframe: ComponentWithRef<HTMLIFrameElement, "iframe">
export const Img: ComponentWithRef<HTMLImageElement, "img">
export const Input: ComponentWithRef<HTMLInputElement, "input">
export const Ins: ComponentWithRef<HTMLElement, "ins">
export const Kbd: ComponentWithRef<HTMLElement, "kbd">
export const Label: ComponentWithRef<HTMLLabelElement, "label">
export const Legend: ComponentWithRef<HTMLLegendElement, "legend">
export const Li: ComponentWithRef<HTMLLIElement, "li">
export const Main: ComponentWithRef<HTMLElement, "main">
export const Map: ComponentWithRef<HTMLMapElement, "map">
export const Mark: ComponentWithRef<HTMLElement, "mark">
export const Meta: ComponentWithRef<HTMLMetaElement, "meta">
export const Meter: ComponentWithRef<HTMLMeterElement, "meter">
export const Nav: ComponentWithRef<HTMLElement, "nav">
export const Ol: ComponentWithRef<HTMLOListElement, "ol">
export const Optgroup: ComponentWithRef<HTMLOptGroupElement, "optgroup">
export const Option: ComponentWithRef<HTMLOptionElement, "option">
export const Output: ComponentWithRef<HTMLOutputElement, "output">
export const P: ComponentWithRef<HTMLParagraphElement, "p">
export const Param: ComponentWithRef<HTMLParamElement, "param">
export const Path: ComponentWithRef<HTMLElement, "path">
export const Picture: ComponentWithRef<HTMLPictureElement, "picture">
export const Pre: ComponentWithRef<HTMLPreElement, "pre">
export const Progress: ComponentWithRef<HTMLProgressElement, "progress">
export const Q: ComponentWithRef<HTMLElement, "q">
export const Rp: ComponentWithRef<HTMLElement, "rp">
export const Rt: ComponentWithRef<HTMLElement, "rt">
export const Ruby: ComponentWithRef<HTMLElement, "ruby">
export const S: ComponentWithRef<HTMLElement, "s">
export const Samp: ComponentWithRef<HTMLElement, "samp">
export const Section: ComponentWithRef<HTMLElement, "section">
export const Select: ComponentWithRef<HTMLSelectElement, "select">
export const Small: ComponentWithRef<HTMLElement, "small">
export const Source: ComponentWithRef<HTMLSourceElement, "source">
export const Span: ComponentWithRef<HTMLSpanElement, "span">
export const Strong: ComponentWithRef<HTMLElement, "strong">
export const Style: ComponentWithRef<HTMLStyleElement, "style">
export const Sub: ComponentWithRef<HTMLElement, "sub">
export const Summary: ComponentWithRef<HTMLElement, "summary">
export const Sup: ComponentWithRef<HTMLElement, "sup">
export const Svg: ComponentWithRef<HTMLOrSVGElement, "svg">
export const Table: ComponentWithRef<HTMLTableElement, "table">
export const Tbody: ComponentWithRef<HTMLElement, "tbody">
export const Td: ComponentWithRef<HTMLTableDataCellElement, "td">
export const Template: ComponentWithRef<HTMLTemplateElement, "template">
export const Textarea: ComponentWithRef<HTMLTextAreaElement, "textarea">
export const Tfoot: ComponentWithRef<HTMLTableSectionElement, "tfoot">
export const Th: ComponentWithRef<HTMLTableHeaderCellElement, "th">
export const Thead: ComponentWithRef<HTMLTableSectionElement, "thead">
export const Time: ComponentWithRef<HTMLTimeElement, "time">
export const Title: ComponentWithRef<HTMLTitleElement, "title">
export const Tr: ComponentWithRef<HTMLTableRowElement, "tr">
export const Track: ComponentWithRef<HTMLTrackElement, "track">
export const U: ComponentWithRef<HTMLElement, "u">
export const Ul: ComponentWithRef<HTMLUListElement, "ul">
export const Video: ComponentWithRef<HTMLVideoElement, "video">
export const Wbr: ComponentWithRef<HTMLElement, "wbr">
export const Container: ComponentWithRef<HTMLDivElement, "div">
export const Flexbox: ComponentWithRef<HTMLDivElement, "div">
export const Grid: ComponentWithRef<HTMLDivElement, "div">
export const VisuallyHidden: ComponentWithRef<HTMLSpanElement, "span">
export const Icon: ComponentWithRef<HTMLOrSVGElement, "svg">
