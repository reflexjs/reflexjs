import base from "@reflexjs/preset-base"
import "typeface-open-sans"
import "typeface-prata"

export default {
  preset: base,

  colors: {
    black: "#191924",
    text: "#191924",
    background: "#fff",
    heading: "#07070a",
    primary: "#fee440",
    primaryHover: "#F4D301",
    secondary: "#07070a",
    secondaryHover: "#191924",
    accent: "#2B59C3",
    accentHover: "#253C78",
    muted: "#f6f6f6",
    mutedHover: "#ebebeb",
    border: "#ebece9",
    borderHover: "#b9bdb3",
    modes: {
      dark: {
        black: "#191924",
        text: "#fff",
        background: "#191924",
        heading: "#fff",
        primary: "#fee440",
        primaryHover: "#F4D301",
        secondary: "#07070a",
        secondaryHover: "#191924",
        accent: "#2B59C3",
        accentHover: "#253C78",
        muted: "#2a2a3c",
        mutedHover: "#212130",
        border: "#2a2a3c",
        borderHover: "#434360",
      },
    },
  },

  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Prata, serif",
    monospace:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },

  styles: {
    root: {
      fontSize: ["sm", "md", "lg", "xl"],
    },
  },

  heading: {
    fontFamily: "body",
    letterSpacing: "normal",
  },

  h1: {
    fontFamily: "heading",
    fontWeight: 400,
  },

  h2: {
    fontFamily: "heading",
    fontWeight: 400,
  },

  a: {
    "&:hover, &:focus, &:active, &[aria-current=page]": {
      color: "text",
      textDecoration: "underline",
    },
  },

  button: {
    borderRadius: "4xl",
    fontSize: ["sm", "md"],

    sm: {
      px: 3,
      py: 2,
      fontSize: ["xs", "sm"],
    },

    lg: {
      px: 7,
      py: 4,
      fontSize: ["md", "lg"],
    },

    primary: {
      color: "black",

      "&:hover, &:focus": {
        color: "black",
      },
    },

    link: {
      "&:hover, &:focus": {
        bg: "transparent",
      },
    },
  },
}
