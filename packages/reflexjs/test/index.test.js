/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import * as React from "react"
import renderer from "react-test-renderer"
import { matchers } from "jest-emotion"
import { jsx, transformProps, ThemeProvider } from "../dist"

expect.extend(matchers)

const renderJSON = (el) => renderer.create(el).toJSON()

const theme = {
  breakpoints: ["500px", "1000px"],
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#03f",
    secondary: "#2f3",
    muted: "#f7f7f7",
  },
  styles: {
    root: {
      a: {
        color: "blue",
        bg: "primary",
        textDecoration: "underline",
      },
    },
  },
  text: {
    color: "text",

    caps: {
      textTransform: "uppercase",
      bg: "primary",
    },
  },
  heading: {
    color: "primary",

    ":hover": {
      color: "secondary",
    },

    a: {
      bg: "red",
    },

    h1: {
      fontSize: 42,
      bg: "secondary",
    },

    h2: {
      fontSize: 32,
    },

    h3: {
      fontSize: 24,
    },
  },
  buttons: {
    color: "background",
    fontSize: "16px",
    px: [1, 2, 3],
    size: "16px",
    maxW: "250px",
    rounded: "5|6|7",

    primary: {
      bg: "primary",
    },

    secondary: {
      bg: "secondary",
    },

    lg: {
      fontSize: "20px",
    },

    sm: {
      fontSize: "12px",
    },
  },
}

describe("style props", () => {
  test("renders with style props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <div bg="primary" color="text" />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)"
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-text,#000)")
  })

  test("renders without style props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    )
    expect(json.props.className).toBeUndefined()
  })

  test("renders fragment", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <>
          <div bg="primary" color="text" />
        </>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)"
    )
  })

  test("renders with aliased props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <button
          size="16px"
          maxW="250px"
          rounded="5|6|7"
          sx={{
            borderColor: "red|blue",
            maxH: 50,
          }}
        >
          Button
        </button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("width", "16px")
    expect(json).toHaveStyleRule("height", "16px")
    expect(json).toHaveStyleRule("max-width", "250px")
    expect(json).toHaveStyleRule("max-height", "50px")
    expect(json).toHaveStyleRule("border-radius", "5px")
    expect(json).toHaveStyleRule("border-radius", "6px", {
      media: "screen and (min-width: 500px)",
    })
    expect(json).toHaveStyleRule("border-radius", "7px", {
      media: "screen and (min-width: 1000px)",
    })
    expect(json).toHaveStyleRule("border-color", "red")
    expect(json).toHaveStyleRule("border-color", "blue", {
      media: "screen and (min-width: 500px)",
    })
  })
})

describe("sx", () => {
  test("sx can override style props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <button
          color="blue"
          sx={{
            color: "green",
          }}
        >
          Button
        </button>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("color", "green")
  })
})

describe("variant", () => {
  test("renders with variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <h1 variant="heading.h1">Button</h1>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-primary,#03f)")
    expect(json).toHaveStyleRule("font-size", "42px")
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)"
    )
  })

  test("renders with multiple variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <h1 variant="heading.h1 text.caps">Button</h1>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-text,#000)")
    expect(json).toHaveStyleRule("text-transform", "uppercase")
    expect(json).toHaveStyleRule("font-size", "42px")
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)"
    )
  })

  test("renders with nested variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <button variant="buttons.secondary.lg">Button</button>
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

  describe("renders with nested styles inside variants", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <h1 variant="heading.h1">
          Heading with a <a>link</a>
        </h1>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-secondary,#2f3)"
    )
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-secondary,#2f3)",
      {
        target: ":hover",
      }
    )
  })

  test("variants style can be overridden", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <button variant="buttons.secondary.lg" color="#930" px="10">
          Button
        </button>
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
})

describe("pseudo props", () => {
  test("renders with _hover and _focus props", () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <a
          href="#"
          color="primary"
          _hover={{
            color: "secondary",
            div: {
              bg: "primary",
            },
          }}
          _focus={{
            boxShadow: "0 0 1px black",
          }}
        >
          <div />
        </a>
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule("color", "var(--theme-ui-colors-primary,#03f)")
    expect(json).toHaveStyleRule(
      "color",
      "var(--theme-ui-colors-secondary,#2f3)",
      { target: ":hover" }
    )
    expect(json).toHaveStyleRule(
      "background-color",
      "var(--theme-ui-colors-primary,#03f)",
      { target: ":hover div" }
    )
    expect(json).toHaveStyleRule("box-shadow", "0 0 1px black", {
      target: ":focus",
    })
  })
})

describe("transformProps", () => {
  test("it transform reflexjs sx to theme-ui sx", () => {
    expect(
      transformProps({
        bg: "red|blue",
        fontSize: "red",
        width: "4|5|6",
        height: "4|5|6",
        color: () => {},
        h1: {
          color: "red",
          px: "1|2|3",
          _hover: {
            color: "red|blue",
          },
          a: {
            size: "4|5|6",
          },
        },
        ":hover": {
          a: {
            color: "yellow|green",
            h: "1|2|3",
            _focus: {
              maxW: 100,
            },
          },
        },
        "&:hover, &:focus": {
          "> a": {
            w: "sm|md|lg",
          },
        },
      })
    ).toMatchSnapshot()
  })
})
