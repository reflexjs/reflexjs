import * as React from "react"
import { MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { Div, Script } from "@reflexjs/components"
import { Helmet } from "react-helmet"

export const Present = ({
  body,
  pageContext,
}) => {
  const slideCodeTheme = defaultSlide.codeTheme || 'monokai'
  const defaultSlide = pageContext.themeOptions.slide
  // const slide = theme.slide Used for options in frontmatters
  const slideTheme = defaultSlide.theme || "black"
  const slidePlugin = slideTheme.plugin
   return(
  <Div>
  <Helmet>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reveal.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reset.css" />
  <link rel="stylesheet" href={"https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/theme/" + {slideTheme} + ".css"} />
  <link rel="stylesheet" href={"https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/highlight/"+ {slideCodeTheme} + ".css"} />
  </Helmet>
  <Div className="reveal"><Div className="slides">
      <MDXRenderer><Section data-markdown><Textarea data-template>{body}</Textarea></Section></MDXRenderer>
  </Div></Div> {/*Slide contents go here*/}
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reveal.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/zoom/zoom.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/notes/notes.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/math/math.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/markdown/markdown.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/highlight/highlight.js"></Script>
  {slidePlugin} {/*Adding some reveal.js plugins*/}
  {/* <Script
  dangerouslySetInnerHTML={{
    __html: `
    Reveal.initialize({
      mouseWheel: {mouseWheel},
      transition: '!{transition}',
      transitionSpeed: '!{transitionSpeed}',
      parallaxBackgroundImage: '!{parallaxBackgroundImage}',
      parallaxBackgroundSize: '!{parallaxBackgroundSize}',
      parallaxBackgroundHorizontal: '!{parallaxBackgroundHorizontal}',
      parallaxBackgroundVertical: '!{parallaxBackgroundVertical}',
      autoSlide: !{autoSlide},
      loop: !{loop},
      controlsLayout: '!{controlsLayout}', // Determines where controls appear, "edges" or "bottom-right"
      controlsBackArrows: '!{controlsBackArrows}',
      progress: !{progress},
      showNotes: !{showNotes},
      autoPlayMedia: !{autoPlayMedia},
      backgroundTransition: '!{backgroundTransition}',
      markdown: {
        smartypants: true
      &rbrace;,
      plugins: [
      RevealMarkdown,
      // Markdown
      RevealHighlight
      // Search
      RevealSearch,
      // Speaker notes
      RevealNotes,
      // Zoom in and out with Alt+click
      RevealZoom,
      // MathJax
      RevealMath
      ]})
        `,
  }}/> */}
  <Script
  dangerouslySetInnerHTML={revealConfig()} />
  </Div>
)}

export const revealConfig = ({ pageContext }) => {
  __html: {pageContext.themeOptions.slide.config}
}
{/* Reveal.js Configs, may look like this
    Reveal.initialize({
      mouseWheel: true,
      autoSlide: true,
      loop: false,
      progress: false,
      showNotes: true,
      autoPlayMedia: true,
      markdown: {
        smartypants: true
      },
      plugins: [
      RevealMarkdown,
      // Markdown
      RevealHighlight
      // Search
      RevealSearch,
      // Speaker notes
      RevealNotes,
      // Zoom in and out with Alt+click
      RevealZoom,
      // MathJax
      RevealMath
      ]})*/}
