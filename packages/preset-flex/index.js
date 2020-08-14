import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    text: "#010e14",
    background: "#fff",
    heading: "#011d27",
    primary: "#02a27f",
    primaryHover: "#01795f",
    secondary: "#044862",
    secondaryHover: "#022b3b",
    accent: "#e15514",
    accentHover: "#bc4710",
    muted: "#fbfcee",
    mutedHover: "#f7f9dc",
    border: "#011d27",
    borderHover: "#010e14",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        heading: "#fff",
        primary: "#02a27f",
        primaryHover: "#01795f",
        secondary: "#05668d",
        secondaryHover: "#044862",
        accent: "#e15514",
        accentHover: "#bc4710",
        muted: "#013940",
        mutedHover: "#01353c",
        border: "#023b50",
        borderHover: "#022c3c",
      },
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Prata, serif",
  },
  heading: {
    letterSpacing: "wide",
  },
  button: {
    borderRadius: "none",
    px: 6,
    py: 4,

    sm: {
      px: 5,
      py: 3,
    },

    lg: {
      px: 7,
      py: 5,
    },
  },
  input: {
    borderRadius: "none",
    px: 6,
    py: 4,

    sm: {
      py: 3,
    },

    lg: {
      py: 5,
    },
  },
  select: {
    borderRadius: "none",
    pl: 6,
    py: 4,

    sm: {
      py: 3,
    },

    lg: {
      py: 5,
    },
  },

  fieldset: {
    borderRadius: "none",
  },
}
