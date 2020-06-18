import { merge } from "@theme-ui/core"
import theme from "../theme.js"

// Temp preset handling.
// TODO: Remove when theme-ui 0.4.0 is released.
const mergeTheme = (theme) => {
  const { preset, ...rest } = theme
  let baseTheme = preset.preset ? {} : preset
  if (preset.preset) {
    const { preset: childPreset, ...childTheme } = preset
    baseTheme = merge(childPreset, childTheme)
  }
  return merge(baseTheme, rest)
}

export default mergeTheme(theme)
