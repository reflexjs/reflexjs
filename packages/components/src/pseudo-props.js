import { styleProps } from "./style-props"
import { customProps } from "./custom-props"

// Supported pseudo classes.
export const pseudoClasses = ["active", "focus", "hover"]

const propNames = [...styleProps.propNames, ...Object.keys(customProps)]

export const pseudoProps = {}
propNames.forEach((propName) =>
  pseudoClasses.forEach(
    (pseudoClass) =>
      (pseudoProps[
        `${pseudoClass}${propName.charAt(0).toUpperCase() + propName.slice(1)}`
      ] = {
        pseudoClass,
        name: propName,
      })
  )
)
