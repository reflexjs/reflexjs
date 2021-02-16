import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    text: "#141d2a",
    background: "#fff",
    heading: "#1a2737",
    primary: "#e56b6f",
    primaryHover: "#e05256",
    secondary: "#355070",
    secondaryHover: "#273b53",
    accent: "#108a93",
    accentHover: "#0a565c",
    muted: "#fcf3ee",
    mutedHover: "#f6dacb",
    border: "#0d131c",
    borderHover: "#1a2638",
    modes: {
      dark: {
        text: "#fff",
        background: "#141d2a",
        heading: "#fff",
        primary: "#e56b6f",
        primaryHover: "#e05256",
        secondary: "#355070",
        secondaryHover: "#273b53",
        accent: "#108a93",
        accentHover: "#0a565c",
        muted: "#33191e",
        mutedHover: "#522831",
        border: "#fcf3ee",
        borderHover: "#f6dacb",
      },
    },
  },
  fonts: {
    body: "Merriweather, serif",
    heading: "Lora, serif",
  },
  heading: {
    letterSpacing: "normal",
  },
  button: {
    borderRadius: "3xl",
  },
  input: {
    borderRadius: "3xl",
  },
  select: {
    borderRadius: "3xl",
  },
  fieldset: {
    borderRadius: "3xl",
  },
}
