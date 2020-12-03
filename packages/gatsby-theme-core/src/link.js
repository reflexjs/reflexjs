/** @jsx jsx */
import { jsx, Box } from "reflexjs"
import { Link as GatsbyLink } from "gatsby"
import { isRelativeUrl } from "@reflexjs/utils"

export const Link = ({ to, href, activeStyle, children, ...props }) => {
  const url = to || href

  if (typeof url !== "string") return null

  return isRelativeUrl(url) ? (
    <Box
      as={GatsbyLink}
      to={url}
      sx={{
        "&[aria-current=page]": activeStyle,
        ...props,
      }}
    >
      {children}
    </Box>
  ) : (
    <a href={url} {...props}>
      {children}
    </a>
  )
}
