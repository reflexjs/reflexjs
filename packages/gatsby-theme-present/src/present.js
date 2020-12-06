import * as React from "react"
import { MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { Div } from "@reflexjs/components"
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.js'
import Math from 'reveal.js/plugin/math/math.esm.js'
import Hightlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

export const Present = ({
  body,
  pageContext,
}) => {
  const slideOptions = pageContext.themeOptions.slide
  const slideConfig = slideOptions.config
  const separator = slideOptions.separator || "---"
  const verticalSeparator = slideOptions.verticalSeparator || "--"
  React.useEffect(() => {
    let present = new Reveal({
      slideConfig,
      plugins: [ 
        Markdown,
        Notes,
        Zoom,
        Math,
        Hightlight,
       ]
     })
     present.initialize();
},[])
   return(
  <Div className="slides" data-separator={separator} data-separator-vertical={verticalSeparator}>
    <MDXRenderer><Section data-markdown><Textarea data-template>{body}</Textarea></Section></MDXRenderer>
  </Div>
)}

