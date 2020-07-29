import * as React from "react"
import { Article, H2, P, Div, Grid, Span } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const Videos = ({ videos }) => {
  return videos.length ? (
    <Grid col="1|1|2" gap="6|8|10|14">
      {videos &&
        videos.map((video, index) => (
          <Div key={index} mb="8">
            <VideoTeaser {...video} />
          </Div>
        ))}
    </Grid>
  ) : null
}

export const VideoTeaser = ({
  title,
  excerpt,
  slug,
  thumbnail,
  data,
  ...props
}) => (
  <Article position="relative" {...props}>
    {data.duration && (
      <Span
        color="white"
        bg="primary"
        rounded="md"
        position="absolute"
        top="4"
        right="4"
        zIndex="100"
        px="2"
        py="1"
        fontSize="sm"
      >
        {data.duration}
      </Span>
    )}
    {thumbnail && (
      <Link href={slug} d="block">
        <Image
          src={thumbnail}
          title={title}
          alt={title}
          aspectRatio={16 / 9}
          rounded="lg"
          overflow="hidden"
        />
      </Link>
    )}
    {title && (
      <Link href={slug}>
        <H2 mt="4" mb="0" fontSize="2xl" hoverColor="primary">
          {title}
        </H2>
      </Link>
    )}
    {excerpt && (
      <P mt="2" fontSize="md">
        {excerpt}
      </P>
    )}
  </Article>
)
