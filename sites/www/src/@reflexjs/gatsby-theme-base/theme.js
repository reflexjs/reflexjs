import { merge } from "reflexjs"
import base from "@reflexjs/preset-base"

export default merge(base, {
  colors: {
    primary: "#4361ee",
  },
  pre: {
    ...base.styles.pre,
  },
  container: {
    maxWidth: 1100,
  },
  heading: {
    h2: {
      a: {
        color: "primary",
        textDecoration: "underline",
      },
    },
  },
})
