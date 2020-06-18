import React from "react"
import GithubSlugger from "github-slugger"
import * as Reflex from "@reflexjs/components"

const Slugger = new GithubSlugger()

export const Heading = ({ as, children, ...props }) => {
  Slugger.reset()
  const Tag = Reflex[as]
  const id = Slugger.slug(children)
  return (
    <Tag id={id} {...props}>
      <Reflex.A href={`#${id}`}>{children}</Reflex.A>
    </Tag>
  )
}
