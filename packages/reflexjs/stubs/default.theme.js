module.exports = {
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  colors: {
    text: "#111",
    background: "#fff",
    primary: "#06f",
    modes: {
      dark: {
        text: "#ededee",
        background: "#1a202c",
        primary: "#fb3640",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    global: {
      "*": {
        m: 0,
        p: 0,
      },
    },
  },
}
