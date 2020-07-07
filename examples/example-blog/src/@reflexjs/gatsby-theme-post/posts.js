import * as React from "react"
import { Article, H2, P, Div, Grid } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  return posts.length ? (
    <Grid col="1|1|2" gap="6|8|10|14">
      {posts &&
        posts.map((post, index) => (
          <Div key={index} mb="8">
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
    {title && (
      <Link href={slug}>
        <H2 my="4" fontSize="2xl" fontFamily="body" fontWeight="bold">
          {title}
        </H2>
      </Link>
    )}
    {excerpt && <P mt="1">{excerpt}</P>}
    <PostMeta
      author={author}
      timeToRead={timeToRead}
      date={date}
      datetime={datetime}
      fontSize="md"
    />
  </Article>
)
