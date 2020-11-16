import * as React from "react"
import { ThemeProvider } from "reflexjs"
import theme from "../theme"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
