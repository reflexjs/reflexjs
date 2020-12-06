/** @jsx jsx */
import { jsx } from "reflexjs"
import { MDXRenderer } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"

export const Profile = ({ name, body, picture }) => {
  return (
    <div variant="container" py="10">
      {picture && <Image src={picture} />}
      <h1 variant="heading.h1">{name}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}
