import * as React from "react"
import { Grid } from "reflexjs"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const Videos = ({ videos }) => {
  return videos.length ? (
    <Grid col="1|1|2" gap="6|8|10|14">
      {videos &&
        videos.map((video, index) => (
          <div key={index} mb="8">
            <VideoTeaser
              title={video.title}
              excerpt={video.excerpt}
              slug={video.slug}
              thumbnail={video.thumbnail}
              data={video.data}
            />
          </div>
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
  <article position="relative" {...props}>
    {data.duration && (
      <span
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
      </span>
    )}
    {thumbnail && (
      <Link href={slug} display="block">
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
        <h2
          variant="heading.h2"
          mt="4"
          mb="0"
          fontSize="2xl"
          _hover={{
            color: "primary",
          }}
        >
          {title}
        </h2>
      </Link>
    )}
    {excerpt && (
      <p mt="2" fontSize="md">
        {excerpt}
      </p>
    )}
  </article>
)
