import * as React from "react"
import { Svg } from "@reflexjs/components"
import icons from "./icons"

export const Icon = ({ name, ...props }) => {
  return (
    <Svg
      fill="currentColor"
      dangerouslySetInnerHTML={{
        __html: icons[name] ? icons[name] : icons["default"],
      }}
      {...props}
    />
  )
}
