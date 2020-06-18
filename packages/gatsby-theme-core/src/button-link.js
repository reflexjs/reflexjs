import * as React from "react"
import { Button } from "@reflexjs/components"

export const ButtonLink = ({ href, to, ...props }) => (
  <Button as="a" href={href || to} {...props} />
)
