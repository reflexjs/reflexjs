import * as React from "react"
import { Article, H2, P, Div, Grid } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const Videos = ({ videos }) => {
  return videos.length ? (
    <Grid col="1|2" gap="10|14">
      {videos &&
        videos.map((video, index) => (
          <Div key={index} mb="8">
            <Link to={video.slug} d="block">
              <Image src={video.thumbnail} aspectRatio={2 / 3} />
            </Link>
            <H2>{video.title}</H2>
            {video.data.duration}
          </Div>
        ))}
    </Grid>
  ) : null
}
