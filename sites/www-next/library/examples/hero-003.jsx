import * as React from "react"
import Block from "../blocks/hero-003"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Build something amazing"
      text="Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus temporibus."
      image={{
        src: "/images/placeholder.jpg",
        alt: "Hero image",
      }}
    />
  )
}
