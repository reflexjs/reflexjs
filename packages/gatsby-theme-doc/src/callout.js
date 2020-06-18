import * as React from "react"
import { Div } from "@reflexjs/components"

export const Callout = ({ level = "accent", ...props }) => (
  <Div
    bg="muted"
    rounded="md"
    borderTop="4"
    borderColor={level}
    p="4"
    {...props}
  />
)
