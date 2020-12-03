/** @jsx jsx */
import { jsx } from "reflexjs"
import { MDXRenderer, Icon, Link } from "@reflexjs/gatsby-theme-core"

export const Video = ({
  title,
  excerpt,
  body,
  embedUrl,
  date,
  datetime,
  pageContext,
}) => (
  <article py="8|12|14">
    <div variant="container" maxW="null|null|null|900px">
      <Link
        to={pageContext.themeOptions.basePath}
        variant="button.link."
        mb="4"
      >
        <Icon name="arrow-left" mr="4" /> See all videos
      </Link>
      <h1 variant="heading.h1" fontWeight="extrabold" my="0">
        {title}
      </h1>
      {excerpt && (
        <p fontSize="2xl" maxW="700px">
          {excerpt}
        </p>
      )}
      {date && <time dateTime={datetime}>{date}</time>}
      {embedUrl && (
        <div
          position="relative"
          pb="56.25%"
          h="0"
          overflow="hidden"
          maxW="100%"
          my="10"
        >
          <iframe
            src={embedUrl}
            title={title}
            position="absolute"
            width="100%"
            height="100%"
            top="0"
            right="0"
            left="0"
            bottom="0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </article>
)
