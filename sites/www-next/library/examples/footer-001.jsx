import * as React from "react"
import Block from "../blocks/footer-001"

export default function Example() {
  return (
    <Block
      name="Reflex"
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
        {
          title: "Contact Us",
          href: "#",
        },
      ]}
      iconLinks={[
        {
          title: "Follow on Twitter",
          href: "#",
          name: "twitter",
        },
        {
          title: "Follow on Instagram",
          href: "#",
          name: "instagram",
        },
      ]}
      copyright={`Copyright © ${new Date().getFullYear()} Reflex Inc. All rights reserved.`}
    />
  )
}
