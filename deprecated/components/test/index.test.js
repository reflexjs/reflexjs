import React from "react"
import renderer from "react-test-renderer"
import { matchers } from "jest-emotion"
import { ThemeProvider } from "theme-ui"

import { Div, A, Button } from "../dist"

expect.extend(matchers)

const renderJSON = (el) => renderer.create(el).toJSON()

const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#03f",
    secondary: "#2f3",
  },
  button: {
    bg: "primary",
    color: "background",
    fontSize: "16px",
    px: [1, 2, 3],

    secondary: {
      bg: "secondary",
    },

    lg: {
      fontSize: "20px",
    },
  },
}

describe("Div", () => {
  test("renders", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Div />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test("renders with style props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Div bg="primary" color="text" />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)"
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-text,#000)")
  })

  test("renders with custom props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <A href="#" textDecoration="underline" d="flex" />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("text-decoration", "underline")
    expect(json).toHaveStyleRule("display", "flex")
  })

  test("renders with component styles", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)"
    )
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-background,#fff)"
    )
  })

  test("renders with variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Button variant="secondary">Button</Button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)"
    )
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-background,#fff)"
    )
  })

  test("renders with multiple variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Button variant="secondary lg">Button</Button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)"
    )
    expect(json).toHaveStyleRule("font-size", "20px")
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-background,#fff)"
    )
  })

  test("variants style can be overriden", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Button variant="secondary lg" color="#930" px="10">
          Button
        </Button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)"
    )
    expect(json).toHaveStyleRule("font-size", "20px")
    expect(json).toHaveStyleRule("color", "#930")
    expect(json).toHaveStyleRule("padding-left", "10px")
  })

  test("renders with pseudo props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <A
          href="#"
          color="primary"
          hoverColor="background"
          hoverBg="secondary"
          focusBg="#f83"
        />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-primary,#03f)")
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-background,#fff)",
      { target: ":hover" }
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)",
      { target: ":hover" }
    )
    expect(json).toHaveStyleRule("background-color", "#f83", {
      target: ":focus",
    })
  })
})
