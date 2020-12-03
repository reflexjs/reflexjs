import * as React from "react"
import { Grid } from "reflexjs"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  // Filter out example posts.
  posts = posts.filter((post) => post.tags?.indexOf("Example") !== -1)
  return posts.length ? (
    <Grid col="1" gap="10|20" maxW="800px" mx="auto">
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <PostTeaser post={post} />
          </div>
        ))}
    </Grid>
  ) : null
}

export function PostTeaser({ post, ...props }) {
  const {
    title,
    excerpt,
    slug,
    image,
    date,
    datetime,
    author,
    timeToRead,
  } = post
  return (
    <article {...props}>
      {image && (
        <Link href={slug} display="block">
          <Image
            src={image}
            title={title}
            alt={title}
            rounded="xl"
            overflow="hidden"
          />
        </Link>
      )}
      <div mt="4">
        {title && (
          <Link href={slug}>
            <h2
              variant="heading.h2"
              mt="0"
              mb="4"
              fontSize="2xl|2xl|3xl|4xl"
              _hover={{
                color: "primary",
              }}
            >
              {title}
            </h2>
          </Link>
        )}
        <PostMeta
          author={author}
          timeToRead={timeToRead}
          date={date}
          datetime={datetime}
          fontSize="md"
        />
        {excerpt && <p mt="4">{excerpt}</p>}
      </div>
    </article>
  )
}
