import { styleProps } from "./style-props"
import { customProps } from "./custom-props"
import { pseudoProps } from "./pseudo-props"

export const allPropsName = [
  ...styleProps.propNames,
  ...Object.keys(customProps),
  ...Object.keys(pseudoProps),
]
