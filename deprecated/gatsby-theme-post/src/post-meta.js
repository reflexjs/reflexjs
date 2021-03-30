/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const PostMeta = ({ author, datetime, date, timeToRead, ...props }) => (
  <Flexbox {...props}>
    {author && (
      <Flexbox alignItems="center" mr="2">
        <Image
          src={author.picture}
          display="inline-block"
          m="0"
          mr="2"
          size="10"
          rounded="full"
          overflow="hidden"
        />
        <span fontWeight="semibold">{author.name}</span>
      </Flexbox>
    )}
    {date && <time dateTime={datetime}> - {date}</time>}
    {timeToRead && <span ml="2"> - {timeToRead} min read</span>}
  </Flexbox>
)
