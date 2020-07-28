import * as React from "react"
import { MDXRenderer, Icon, ButtonLink } from "@reflexjs/gatsby-theme-core"
import { Article, H1, Container, Div, Iframe, P } from "@reflexjs/components"

export const Video = ({
  title,
  excerpt,
  body,
  embedUrl,
  date,
  datetime,
  pageContext,
}) => (
  <Article py="8|12|14">
    <Container maxW="null|null|null|900px">
      <ButtonLink
        to={pageContext.themeOptions.basePath}
        variant="link sm"
        mb="4"
      >
        <Icon name="arrow-left" mr="4" /> See all videos
      </ButtonLink>
      <H1 fontWeight="extrabold" my="0">
        {title}
      </H1>
      {excerpt && (
        <P fontSize="2xl" maxW="700px">
          {excerpt}
        </P>
      )}
      {date && <time dateTime={datetime}>{date}</time>}
      {embedUrl && (
        <Div
          position="relative"
          pb="56.25%"
          h="0"
          overflow="hidden"
          maxW="100%"
          my="10"
        >
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

      <MDXRenderer>{body}</MDXRenderer>
    </Container>
  </Article>
)
