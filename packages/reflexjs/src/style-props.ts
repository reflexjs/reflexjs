import CSSProps from "./css-props"

const styleProps = {}
CSSProps.forEach((key) => {
  styleProps[key] = [key]
})

export default {
  ...styleProps,

  // Custom/Aliased props.
  bg: ["backgroundColor"],
  col: ["gridTemplateColumns"],
  colEnd: ["gridColumnEnd"],
  colGap: ["gridColumnGap"],
  colStart: ["gridColumnStart"],
  h: ["height"],
  m: ["margin"],
  maxH: ["maxHeight"],
  maxW: ["maxWidth"],
  mb: ["marginBottom"],
  minH: ["minHeight"],
  minW: ["minWidth"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  mt: ["marginTop"],
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  p: ["padding"],
  pb: ["paddingBottom"],
  pl: ["paddingLeft"],
  pr: ["paddingRight"],
  pt: ["paddingTop"],
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
  rounded: ["borderRadius"],
  roundedBottom: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  roundedLeft: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  roundedRight: ["borderTopRightRadius", "borderBottomRightRadius"],
  roundedTop: ["borderTopLeftRadius", "borderTopRightRadius"],
  row: ["gridTemplateRows"],
  rowEnd: ["gridRowEnd"],
  rowGap: ["gridRowGap"],
  rowStart: ["gridRowStart"],
  size: ["width", "height"],
  w: ["width"],
  z: ["zIndex"],

  // Theme UI props.
  variant: ["variant"],

  // Pseudo props.
  _hover: [":hover"],
  _focus: [":focus"],
}
