import * as React from "react"
import { Icon } from "reflexjs"
import Block from "../blocks/call-to-action-003"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Start building today"
      text="Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus temporibus."
      buttons={
        <a variant="button.accent.lg" href="#" mt="6">
          Get started <Icon name="arrow-right" ml="2" size="4" />
        </a>
      }
    />
  )
}
