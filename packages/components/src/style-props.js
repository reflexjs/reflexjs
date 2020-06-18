import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  system,
} from "styled-system"
import { customProps } from "./custom-props"

export const styleProps = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  system(customProps)
)
