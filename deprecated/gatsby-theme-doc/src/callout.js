/** @jsx jsx */
import { jsx } from "reflexjs"

export const Callout = ({ level = "accent", ...props }) => (
  <div
    bg="muted"
    rounded="md"
    borderTop="4"
    borderColor={level}
    p="4"
    {...props}
  />
)
