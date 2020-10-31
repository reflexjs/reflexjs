<h1 align="center">
@reflexjs/ui
</h1>

<p align="center">
  A tiny library for creating and styling UI components with <strong>Theme UI</strong>. It combines the flexibility of Theme UI with the comfort of style props.
</p>

<p align="center">
  <a href="https://github.com/reflexjs/reflex/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@arshad/gatsby-theme-phoenix.svg" alt="License"></a>
  <a href="https://github.com/reflexjs/reflex/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>
  <a href="https://twitter.com/arshadcn"><img src="https://img.shields.io/badge/Follow-%40arshadcn-1da1f2" alt="Follow @arshadcn" /></a>
</p>

<p align="center">
<img src="https://i.imgur.com/wGPg1zq.jpg" width="650" />
</p>

## Documentation

- [Installation](#installation)
  - [Create React App](#create-react-app)
  - [Next](#next)
  - [Gatsby](#gatsby)
  - [RedwoodJS](#redwoodjs)
- [Usage](#usage)
- [Responsive styles](#responsive-styles)
- [Pseudo-classes](#pseudo-classes)
- [Variants](#variants)
- [Icons](#icons)

## Installation

### Create React App

Step 1: Install dependencies

```sh
npm i theme-ui @reflexjs/ui @reflexjs/preset-base
```

Step 2: Wrap your `<App />` in a `ThemeProvider`.

```jsx
// src/index.js
import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "theme-ui"
import theme from "@reflexjs/preset-base"
import App from "./App"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
)
```

### Next

Step 1: Install dependencies

```sh
npm i theme-ui @reflexjs/ui @reflexjs/preset-base
```

Step 2: Create `src/pages/_app.js` with the following code:

```jsx
// src/pages/_app.js
import * as React from "react"
import NextApp from "next/app"
import { ThemeProvider } from "theme-ui"
import theme from "@reflexjs/preset-base"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
```

Step 3: Add `InitializeColorMode` to `src/pages/_document.js`

```jsx
// src/pages/_document.js
import Document, { Main, Html, Head, NextScript } from "next/document"
import { InitializeColorMode } from "theme-ui"

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

### Gatsby

Step 1: Install dependencies

```sh
npm i theme-ui @reflexjs/ui @reflexjs/preset-base gatsby-plugin-theme-ui
```

Step 2: Enable `gatsby-plugin-theme-ui` in `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-plugin-theme-ui`],
}
```

Step 3: Create `src/gatsby-plugin-theme-ui/index.js` with the following code.

```js
// src/gatsby-plugin-theme-ui/index.js
import theme from "@reflexjs/preset-base"
export default {
  ...theme,
}
```

### RedwoodJS

Step 1: Install dependencies

```sh
yarn workspace web add theme-ui @reflexjs/ui @reflexjs/preset-base
```

Step 2: Add `ThemeProvider` to `web/src/index.js`

```jsx
// web/src/index.js

import ReactDOM from "react-dom"
import { RedwoodProvider, FatalErrorBoundary } from "@redwoodjs/web"
import FatalErrorPage from "src/pages/FatalErrorPage"

// import './index.css'
import { ThemeProvider } from "theme-ui"
import theme from "@reflexjs/preset-base"

import Routes from "src/Routes"

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById("redwood-app")
)
```

## Usage

```jsx
import {
  Section,
  Container,
  Grid,
  Flexbox,
  H1,
  P,
  Button,
  Img,
} from "@reflexjs/ui"

export default () => (
  <Section py="8|12|16|24">
    <Container>
      <Grid col="1|2" gap="8|12|16" alignItems="center">
        <Flexbox flexDirection="column" alignItems="center|flex-start">
          <H1 m="0" fontWeight="black" lineHeight="tight">
            Experiences that sell.
          </H1>
          <P fontSize="xl|2xl" mt="2">
            We connect you to the exclusive works from top artists around the
            world.
          </P>
          <Button as="a" href="#" variant="primary">
            Try it for free
          </Button>
        </Flexbox>
        <Img src="/placeholder.jpg" w="full" rounded="lg" />
      </Grid>
    </Container>
  </Section>
)
```

## Responsive styles

Use a pipe `|` to separate responsive values. Example: The following `<Div />` will have a `margin-top` of `2` in mobile, `4` for tablet and `6` for larger devices.

```jsx
<Div mt="2|4|6" />
```

Array-like syntax is also supported.

```jsx
<Div mt={[2, 4, 5]} />
```

Learn more about responsive styles in the Theme UI [docs](https://theme-ui.com/getting-started#responsive-styles).

## Pseudo-classes

For pseudo-classes such as hover, focus and active, prefix the style prop with the class name.

```jsx
<Button bg="primary" hoverBg="accent" focusColor="secondary">
  Button
</Button>
```

## Variants

If you find yourself repeating a lot of style props and would prefer abstracting this, you can do so using `variant`.

```jsx
// theme.js
export default {
  button: {
    primary: {
      // Place styles for primary button here.
      bg: "primary"
      color: "white",
    },

    lg: {
      px: 4,
      py: 3
    },

    sm: {
      px: 2,
      py: 1,
    }
  }
}
```

You can then use variant with your `Button`.

```jsx
<Button variant="primary lg" />
```

## Icons

You can add custom icons to your theme and display them using the `Icon` component.

```js
// theme.js
export default {
  ...theme,

  icons: {
    // Place all icons here.
    check:
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>',
  },
}
```

Then using `Icon`.

```jsx
import { Icon } from "@reflexjs/ui"

export default () => <Icon name="check" color="primary" size="4" />
```
