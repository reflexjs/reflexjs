import * as React from "react"
import { Layout, Seo, MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { Article, Container, H1, Div, P, Flexbox } from "@reflexjs/components"
import { Link, Image } from "@reflexjs/gatsby-theme-core"
import { PostMeta } from "./post-meta"

export const Post = ({
  title,
  excerpt,
  slug,
  body,
  image,
  caption,
  date,
  datetime,
  author,
  timeToRead,
  tags,
}) => (
  <Layout>
    <Seo
      title={title}
      description={excerpt}
      pathname={slug}
      image={image}
      type="article"
    />
    <Article py="8|12|14">
      <Container maxW="null|null|null|900px">
        <Div textAlign="center">
          {tags && (
            <Link to={tags[0].slug} textDecoration="none" color="text">
              {tags[0].name}
            </Link>
          )}
          {title && <H1 my="0">{title}</H1>}
          {excerpt && <P fontSize="2xl">{excerpt}</P>}

          <PostMeta
            author={author}
            timeToRead={timeToRead}
            date={date}
            datetime={datetime}
            alignItems="center"
            justifyContent="center"
            my="8"
          />
        </Div>
      </Container>

      {image && (
        <Container variant="lg">
          <Image
            src={image}
            title={title}
            alt={caption || title}
            caption={caption}
            mx="auto"
            my="4|8|10"
          />
        </Container>
      )}

      <Container maxW="null|null|null|900px">
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
                hoverBg="secondary"
                hoverColor="white"
              >
                {name}
              </Link>
            ))}
          </Flexbox>
        )}
      </Container>
    </Article>
  </Layout>
)
