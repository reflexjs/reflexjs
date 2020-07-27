import * as React from "react"
import { MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { H1, Container, Div, Iframe } from "@reflexjs/components"

export const Video = ({ title, body, embedUrl }) => (
  <Container py="10">
    <H1>{title}</H1>
    <MDXRenderer>{body}</MDXRenderer>
    {embedUrl && (
      <Div position="relative" pb="56.25%" h="0" overflow="hidden" maxW="100%">
        <Iframe
          src={embedUrl}
          position="absolute"
          width="100%"
          height="100%"
          top="0"
          right="0"
          left="0"
          bottom="0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Div>
    )}
  </Container>
)
