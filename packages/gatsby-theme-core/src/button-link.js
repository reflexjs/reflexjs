/** @jsx jsx */
import { jsx } from "reflexjs"

export const ButtonLink = ({ href, to, variant, children, ...props }) => (
  <a
    variant={`button.${variant.split(" ").join(".")}`}
    href={href || to}
    {...props}
  >
    {children}
  </a>
)
