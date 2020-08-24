import * as React from "react"
import { Image } from "@reflexjs/gatsby-plugin-image"

export default () => (
  <div>
    <div data-cy="local-image">
      <Image src="placeholder.jpg" alt="This is a local image" />
    </div>

    <div data-cy="external-image">
      <Image
        src="https://via.placeholder.com/150"
        alt="This is an external image"
      />
    </div>

    <div data-cy="no-image">
      <Image src="does-not-exit.jpg" />
    </div>

    <div data-cy="svg-image">
      <Image src="placeholder.svg" alt="This is a SVG image" />
    </div>
  </div>
)
