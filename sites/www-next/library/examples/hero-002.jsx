import * as React from "react"
import { Icon } from "reflexjs"
import Block from "../blocks/hero-002"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Build something amazing"
      text="Dicta minus iusto quisquam doloribus temporibus."
      image={{
        src: "/images/placeholder.jpg",
        alt: "Hero image",
      }}
      buttons={
        <div display="flex" justifyContent="center" gap="4" mt="6">
          <a variant="button.primary.lg" href="#">
            Get started <Icon name="arrow-right" ml="2" size="4" />
          </a>
          <a variant="button.secondary.lg" href="#">
            Learn more
          </a>
        </div>
      }
    />
  )
}
