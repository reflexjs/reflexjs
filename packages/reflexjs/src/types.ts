import * as React from "react"
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
  Property,
  Pseudos,
} from "csstype"
import {
  ColorModesScale,
  Scale,
  ThemeStyles,
  ThemeUICSSProperties,
  TLengthStyledSystem,
} from "@theme-ui/core"

export interface CssProps
  extends StandardLonghandProperties,
    StandardShorthandProperties {}

export interface AliasProps {
  /**
   * **`bg`** is a shorthand property for the **`backgroundColor`** CSS property.
   */
  bg?: Property.BackgroundColor
  /**
   * **`m`** is a shorthand property for the **`margin`** CSS property.
   */
  m?: Property.Margin
  /**
   * **`mt`** is a shorthand property for the **`marginTop`** CSS property.
   */
  mt?: Property.MarginTop
  /**
   * **`mr`** is a shorthand property for the **`marginRight`** CSS property.
   */
  mr?: Property.MarginRight
  /**
   * **`mb`** is a shorthand property for the **`marginBottom`** CSS property.
   */
  mb?: Property.MarginBottom
  /**
   * **`ml`** is a shorthand property for the **`marginLeft`** CSS property.
   */
  ml?: Property.MarginLeft
  /**
   * **`mx`** is a shorthand property for the **`marginX`** CSS property.
   */
  mx?: Property.MarginLeft
  /**
   * **`my`** is a shorthand property for the **`marginY`** CSS property.
   */
  my?: Property.MarginTop
  /**
   * **`p`** is a shorthand property for the **`padding`** CSS property.
   */
  p?: Property.Padding
  /**
   * **`pt`** is a shorthand property for the **`paddingTop`** CSS property.
   */
  pt?: Property.PaddingTop
  /**
   * **`pr`** is a shorthand property for the **`paddingRight`** CSS property.
   */
  pr?: Property.PaddingRight
  /**
   * **`pb`** is a shorthand property for the **`paddingBottom`** CSS property.
   */
  pb?: Property.PaddingBottom
  /**
   * **`pl`** is a shorthand property for the **`paddingLeft`** CSS property.
   */
  pl?: Property.PaddingLeft
  /**
   * **`px`** is a shorthand property for the **`paddingX`** CSS property.
   */
  px?: Property.PaddingLeft
  /**
   * **`py`** is a shorthand property for the **`paddingY`** CSS property.
   */
  py?: Property.PaddingTop
  /**
   * **`maxW`** is a shorthand property for the **`maxWidth`** CSS property.
   */
  maxW?: Property.MaxWidth
  /**
   * **`minW`** is a shorthand property for the **`minWidth`** CSS property.
   */
  minW?: Property.MinWidth
  /**
   * **`w`** is a shorthand property for the **`width`** CSS property.
   */
  w?: Property.Width
  /**
   * **`h`** is a shorthand property for the **`height`** CSS property.
   */
  h?: Property.Height
  /**
   * **`maxH`** is a shorthand property for the **`maxHeight`** CSS property.
   */
  maxH?: Property.MaxHeight
  /**
   * **`minH`** is a shorthand property for the **`minHeight`** CSS property.
   */
  minH?: Property.MinHeight
  /**
   * **`col`** is a shorthand property for the **`gridTemplateColumns`** CSS property.
   */
  col?: Property.GridTemplateColumns
  /**
   * **`colStart`** is a shorthand property for the **`gridColumnStart`** CSS property.
   */
  colStart?: Property.GridColumnStart
  /**
   * **`colEnd`** is a shorthand property for the **`gridColumnEnd`** CSS property.
   */
  colEnd?: Property.GridColumnEnd
  /**
   * **`colGap`** is a shorthand property for the **`gridColumnGap`** CSS property.
   */
  colGap?: Property.GridColumnGap
  /**
   * **`row`** is a shorthand property for the **`gridTemplateRows`** CSS property.
   */
  row?: Property.GridTemplateRows
  /**
   * **`rowStart`** is a shorthand property for the **`gridRowStart`** CSS property.
   */
  rowStart?: Property.GridRowStart
  /**
   * **`rowEnd`** is a shorthand property for the **`gridRowEnd`** CSS property.
   */
  rowEnd?: Property.GridRowEnd
  /**
   * **`rounded`** is a shorthand property for the **`borderRadius`** CSS property.
   */
  rounded?: Property.BorderRadius
  /**
   * **`rounded`** is a shorthand property for the **`borderTopLeftRadius`** and **`borderTopRightRadius`** CSS properties.
   */
  roundedTop?: Property.BorderTopLeftRadius
  /**
   * **`roundedRight`** is a shorthand property for the **`borderTopRightRadius`** and **`borderBottomRightRadius`** CSS properties.
   */
  roundedRight?: Property.BorderTopRightRadius
  /**
   * **`roundedBottom`** is a shorthand property for the **`borderBottomLeftRadius`** and **`borderBottomRightRadius`** CSS properties.
   */
  roundedBottom?: Property.BorderBottomLeftRadius
  /**
   * **`roundedLeft`** is a shorthand property for the **`borderTopLeftRadius`** and **`borderBottomLeftRadius`** CSS properties.
   */
  roundedLeft?: Property.BorderTopLeftRadius
  /**
   * **`size`** is a shorthand property for the **`width`** and **`height`** CSS properties.
   */
  size?: Property.Width
}

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

export type ResponsiveCssProps<T> = {
  /*eslint @typescript-eslint/ban-types: "off" */
  [P in keyof T]?: T[P] | {}
}

export type ResponsiveBoxProps = ResponsiveCssProps<CssProps & AliasProps>

export type SxProps =
  | Omit<StyleProps, "sx">
  | { [key: string]: SxProps }
  | { [K in Pseudos | keyof JSX.IntrinsicElements]: SxProps }

export interface StyleProps extends ResponsiveBoxProps {
  as?: keyof JSX.IntrinsicElements
  variant?: string
  sx?: SxProps
  children?: React.ReactNode
  /**
   * **`_hover`** is a shorthand property for **`":hover"`**
   */
  _hover?: SxProps
  /**
   * **`_focus`** is a shorthand property for **`":focus"`**
   */
  _focus?: SxProps
}

export type ComponentWithStyleProps<T extends React.ElementType> = Assign<
  React.ComponentPropsWithRef<T>,
  StyleProps
>

/* eslint-disable  @typescript-eslint/no-explicit-any */
// We allow for any here for expansion such as variants.
// TODO: Figure out how or if we should keep compatibility with Theme UI spec.
export interface Theme {
  useCustomProperties?: boolean
  initialColorModeName?: string
  printColorModeName?: string
  useRootStyles?: boolean
  useColorSchemeMediaQuery?: boolean
  useBorderBox?: boolean
  useLocalStorage?: boolean

  breakpoints?: Array<string>

  colors?: ColorModesScale
  rawColors?: ColorModesScale
  mediaQueries?: { [size: string]: string }
  space?: Scale<Property.Margin<number | string>>
  fontSizes?: Scale<Property.FontSize<number>>
  fonts?: Scale<Property.FontFamily>
  fontWeights?: Scale<Property.FontWeight>
  lineHeights?: Scale<Property.LineHeight<TLengthStyledSystem>>
  letterSpacings?: Scale<Property.LetterSpacing<TLengthStyledSystem>>
  sizes?: Scale<Property.Height<{}> | Property.Width<{}>>
  borders?: Scale<Property.Border<{}>>
  borderStyles?: Scale<Property.Border<{}>>
  borderWidths?: Scale<Property.BorderWidth<TLengthStyledSystem>>
  radii?: Scale<Property.BorderRadius<TLengthStyledSystem>>
  shadows?: Scale<Property.BoxShadow>
  zIndices?: Scale<Property.ZIndex>
  colorStyles?: Scale<ThemeUICSSProperties>
  textStyles?: Scale<ThemeUICSSProperties>
  opacities?: Scale<Property.Opacity>
  transitions?: Scale<Property.Transition>

  styles?: ThemeStyles

  icons?: {
    [key: string]: string
  }

  [key: string]: any
}

interface ReflexjsTheme extends Theme {}

/* eslint-disable  @typescript-eslint/no-explicit-any */
declare module "@theme-ui/css" {
  interface Theme extends ReflexjsTheme {}
  interface ThemeUICSSObject extends StyleProps {}
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
declare module "theme-ui" {
  interface Theme extends ReflexjsTheme {}
}

declare module "react" {
  // tslint:disable-next-line: no-empty-interface
  interface DOMAttributes<T> extends StyleProps {
    sx?: SxProps
  }
}
