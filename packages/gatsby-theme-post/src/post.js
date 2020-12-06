/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { MDXRenderer, Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"
import { PostMeta } from "./post-meta"

export const Post = ({
  title,
  excerpt,
  body,
  image,
  caption,
  date,
  datetime,
  author,
  timeToRead,
  tags,
}) => (
  <article py="8|12|14">
    <div variant="container" maxW="null|null|null|900px">
      <div textAlign="center">
        {tags && (
          <Link to={tags[0].slug} textDecoration="none" color="text">
            {tags[0].name}
          </Link>
        )}
        {title && (
          <h1 variant="heading.h1" my="0" fontWeight="extrabold">
            {title}
          </h1>
        )}
        {excerpt && (
          <p fontSize="2xl" maxW="700px" mx="auto">
            {excerpt}
          </p>
        )}

        <PostMeta
          author={author}
          timeToRead={timeToRead}
          date={date}
          datetime={datetime}
          alignItems="center"
          justifyContent="center"
          my="8"
        />
      </div>
    </div>

    {image && (
      <div variant="container.lg">
        <Image
          src={image}
          title={title}
          alt={caption || title}
          caption={caption}
          mx="auto"
          my="4|8|10"
          overflow="hidden"
          sx={{
            img: {
              borderRadius: "md",
            },
          }}
        />
      </div>
    )}

    <div variant="container" maxW="null|null|null|900px">
      <MDXRenderer>{body}</MDXRenderer>

      {tags && (
        <Flexbox alignItems="center" my="6" mx="auto">
          {tags.map(({ name, slug }, index) => (
            <Link
              key={name}
              to={slug}
              display="inline-block"
              bg="muted"
              px="2"
              py="1"
              rounded="md"
              color="text"
              textDecoration="none"
              fontSize="sm"
              ml={index !== 0 && 2}
              _hover={{
                bg: "secondary",
                color: "white",
              }}
            >
              {name}
            </Link>
          ))}
        </Flexbox>
      )}
    </div>
  </article>
)
