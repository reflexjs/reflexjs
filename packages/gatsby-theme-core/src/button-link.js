/** @jsx jsx */
import { jsx } from "reflexjs"

export const ButtonLink = ({ href, to, ...props }) => (
  <button variant="button" as="a" href={href || to} {...props} />
)
