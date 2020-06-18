import * as React from "react"
import { Article, H2, P, Span, Grid } from "@reflexjs/components"
import { Link, Image } from "@reflexjs/gatsby-theme-core"

export const PostTeaser = ({
  title,
  excerpt,
  slug,
  image,
  date,
  datetime,
  author,
  timeToRead,
  ...props
}) => (
  <Article {...props}>
    <Grid>
      {image && <Image src={image} title={title} alt={title} />}
      {title && (
        <Link href={slug}>
          <H2 my="4" fontSize="3xl" hoverColor="primary">
            {title}
          </H2>
        </Link>
      )}
      {excerpt && <P mt="1">{excerpt}</P>}
      <P mt="4" fontSize="md">
        {author && <Span fontWeight="semibold">{author.name}</Span>}
        {date && <time dateTime={datetime}> - {date}</time>}
        {timeToRead && <Span> - {timeToRead} min read</Span>}
      </P>
    </Grid>
  </Article>
)
