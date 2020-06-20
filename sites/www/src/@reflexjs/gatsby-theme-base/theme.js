import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    primary: "#4361ee",
  },
  pre: {
    ...base.styles.pre,
  },
  container: {
    maxWidth: 1100,
  },
  h2: {
    a: {
      color: "primary",
      textDecoration: "underline",
    },
  },
}
