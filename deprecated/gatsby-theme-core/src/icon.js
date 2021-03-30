/** @jsx jsx */
import { jsx } from "reflexjs"
import icons from "./icons"

export const Icon = ({ name, size = ["20px", "22px", "24px"], ...props }) => {
  return (
    <svg
      fill="currentColor"
      dangerouslySetInnerHTML={{
        __html: icons[name] ? icons[name] : icons["default"],
      }}
      size={size}
      {...props}
    />
  )
}
