import * as React from "react"
import { Flexbox, Span } from "@reflexjs/components"
import { Image } from "@reflexjs/gatsby-theme-core"

export const PostMeta = ({ author, datetime, date, timeToRead, ...props }) => (
  <Flexbox {...props}>
    {author && (
      <Flexbox alignItems="center" mr="2">
        <Image
          src={author.picture}
          d="inline-block"
          m="0"
          mr="2"
          size="10"
          rounded="full"
          overflow="hidden"
        />
        <Span fontWeight="semibold">{author.name}</Span>
      </Flexbox>
    )}
    {date && <time dateTime={datetime}> - {date}</time>}
    {timeToRead && <Span ml="2"> - {timeToRead} min read</Span>}
  </Flexbox>
)
