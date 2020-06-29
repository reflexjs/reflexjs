import * as React from "react"
import { Article, H2, P, Div, Grid } from "@reflexjs/components"
import { Link, Image } from "@reflexjs/gatsby-theme-core"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  // Filter out example posts.
  posts = posts.filter((post) => post.tags?.indexOf("Example") !== -1)
  return posts.length ? (
    <Grid col="1" gap="10|20" maxW="800px" mx="auto">
      {posts &&
        posts.map((post, index) => (
          <Div key={index}>
            <PostTeaser {...post} />
          </Div>
        ))}
    </Grid>
  ) : null
}

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
    {image && (
      <Link href={slug} d="block">
        <Image src={image} title={title} alt={title} />
      </Link>
    )}
    <Div mt="4">
      {title && (
        <Link href={slug}>
          <H2 mt="0" mb="4" fontSize="2xl|2xl|3xl|4xl" hoverColor="primary">
            {title}
          </H2>
        </Link>
      )}
      <PostMeta
        author={author}
        timeToRead={timeToRead}
        date={date}
        datetime={datetime}
        fontSize="md"
      />
      {excerpt && <P mt="4">{excerpt}</P>}
    </Div>
  </Article>
)
