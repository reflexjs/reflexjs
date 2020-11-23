/** @jsx jsx */
import { jsx } from "reflexjs"

export const ButtonLink = ({ href, to, children, ...props }) => (
  <a variant="button" href={href || to} {...props}>
    {children}
  </a>
)
