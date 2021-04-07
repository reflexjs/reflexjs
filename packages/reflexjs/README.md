# reflexjs

A styling library for building flexible and accessible components with speed.

## Quick Start

### Step 1

Start by installing the `reflexjs` package into your React app.

```sh
npm i reflexjs
```

### Step 2

Create a theme with your custom colors and typography.

```js title=theme.js
export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
}
```

### Step 3

Wrap your app with the `ThemeProvider` from reflexjs.

```jsx
import * as React from "react"
import theme from "./theme" // highlight-line
import { ThemeProvider } from "reflexjs" // highlight-line

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
```

## Styling

You are now ready to style your components using [style props](/docs/styling).

```jsx
/** @jsxImportSource "reflexjs" */

export default function CustomButton({ children }) {
  return (
    <button bg="primary" color="text" p="10px" rounded="5">
      {children}
    </button>
  )
}
```

## Docs

Read the docs at https://reflexjs.org/docs.
