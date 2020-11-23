import * as React from "react"
import { Grid } from "reflexjs"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  return posts.length ? (
    <Grid col="1|1|2" gap="6|8|10|14">
      {posts &&
        posts.map((post, index) => (
          <div key={index} mb="8">
            <PostTeaser {...post} />
          </div>
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
  <article {...props}>
    {image && (
      <Link href={slug} display="block">
        <Image src={image} title={title} alt={title} />
      </Link>
    )}
    {title && (
      <Link href={slug}>
        <h2
          variant="heading.h2"
          my="4"
          fontSize="2xl"
          fontFamily="body"
          fontWeight="bold"
        >
          {title}
        </h2>
      </Link>
    )}
    {excerpt && <p mt="1">{excerpt}</p>}
    <PostMeta
      author={author}
      timeToRead={timeToRead}
      date={date}
      datetime={datetime}
      fontSize="md"
    />
  </article>
)
