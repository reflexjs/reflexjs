import * as React from "react"
import Block from "../blocks/header-002"

export default function Example() {
  return (
    <Block
      minH="500|0"
      branding={{
        name: "Reflex",
      }}
      links={[
        {
          title: "Features",
          href: "#",
        },
        {
          title: "Pricing",
          href: "#",
        },
        {
          title: "Learn",
          href: "#",
        },
        {
          title: "Support",
          href: "#",
        },
      ]}
      buttonLink={{
        title: "Get Started",
        href: "#",
      }}
    />
  )
}
