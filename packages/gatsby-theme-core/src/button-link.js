/** @jsx jsx */
import { jsx } from "reflexjs"

export const ButtonLink = ({ href, to, ...props }) => (
  <a variant="button" href={href || to} {...props} />
)
