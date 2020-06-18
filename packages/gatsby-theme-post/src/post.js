import * as React from "react"
import { Layout, Seo, MDXRenderer } from "@reflexjs/gatsby-theme-core"
import {
  Article,
  Container,
  H1,
  Div,
  P,
  Span,
  Flexbox,
} from "@reflexjs/components"
import { Link, Image } from "@reflexjs/gatsby-theme-core"

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
    <Seo title={title} description={excerpt} pathname={slug} />
    <Article py="8|12|14">
      <Container maxW="null|null|50%">
        <Div textAlign="center">
          {tags && (
            <Link to={tags[0].slug} textDecoration="none" color="text">
              {tags[0].name}
            </Link>
          )}
          {title && <H1 my="0">{title}</H1>}
          {excerpt && <P fontSize="2xl">{excerpt}</P>}

          <Flexbox
            alignItems="center"
            justifyContent="center"
            my="8"
            variant="small"
          >
            {author && (
              <Flexbox alignItems="center" mr="2">
                <Image
                  src={author.picture}
                  w="40px"
                  d="inline-block"
                  m="0"
                  mr="2"
                />
                <Span fontWeight="semi">{author.name}</Span>
              </Flexbox>
            )}
            {date && <time dateTime={datetime}> - {date}</time>}
            {timeToRead && <Span ml="2"> - {timeToRead} min read</Span>}
          </Flexbox>
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
            my="4"
          />
        </Container>
      )}

      <Container maxW="null|null|50%">
        <MDXRenderer>{body}</MDXRenderer>

        {tags && (
          <Flexbox alignItems="center" justifyContent="center" my="6" mx="auto">
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
                fontSize="1"
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
