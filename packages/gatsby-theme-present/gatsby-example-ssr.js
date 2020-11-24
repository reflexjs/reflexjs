import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    const { slideCodeTheme } = defaultSlide.codeTheme || 'monokai'
    const defaultSlide = pageContext.themeOptions.slide
    // const slide = theme.slide Used for options in frontmatters
    const slideTheme = defaultSlide.theme || "black"
  setHeadComponents([
      <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reveal.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reset.css" />
    <link rel="stylesheet" href={"https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/theme/" + slideTheme + ".css"} />
    <link rel="stylesheet" href={"https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/highlight/"+ slideCodeTheme + ".css"} />
      </div>
  ])
}