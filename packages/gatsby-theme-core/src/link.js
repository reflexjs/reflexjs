/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { A } from "@reflexjs/components"
import { isRelativeUrl } from "@reflexjs/utils"

export const Link = ({ to, href, activeStyle, ...props }) => {
  const url = to || href

  if (typeof url !== "string") return null

  return isRelativeUrl(url) ? (
    <A
      as={GatsbyLink}
      to={url}
      {...props}
      sx={{
        "&[aria-current=page]": activeStyle,
      }}
    />
  ) : (
    <A href={url} {...props} />
  )
}
