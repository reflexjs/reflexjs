import * as React from "react"
import Block from "../blocks/form-001"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Turn followers into customers"
      text="Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus temporibus."
      buttons={
        <a variant="button.muted" href="#" mt="6">
          Learn more
        </a>
      }
    />
  )
}
