/** @jsx jsx */
import { jsx } from "reflexjs"

export const ButtonLink = ({ href, to, variant, children, ...props }) => {
  const variants = variant ? `.${variant.split(" ").join(".")}` : null
  return (
    <a variant={`button${variants}`} href={href || to} {...props}>
      {children}
    </a>
  )
}
