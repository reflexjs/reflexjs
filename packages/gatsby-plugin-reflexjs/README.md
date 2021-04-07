# gatsby-plugin-reflexjs

A Gatsby plugin for adding Reflexjs context.

## Installation

```sh
npm i reflexjs gatsby-plugin-reflexjs
```

> For Reflexjs v1, use gatsby-plugin-reflexjs `^0.1.2`.

## Usage

### Enable the plugin

```js
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-plugin-reflexjs`],
}
```

### Add theme

Create the following file `src/gatsby-plugin-reflexjs/index.js` and add your theme to it

```js
// src/gatsby-plugin-reflexjs/index.js
const theme = {
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
}

export default theme
```
