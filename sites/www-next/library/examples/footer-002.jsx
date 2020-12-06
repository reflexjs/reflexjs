import * as React from "react"
import { Icon } from "reflexjs"
import Block from "../blocks/footer-002"

export default function Example() {
  return (
    <Block
      name="Reflex"
      links={[
        {
          title: "Features",
          href: "#",
          items: [
            {
              title: "For developers",
              href: "#",
            },
            {
              title: "For marketers",
              href: "#",
            },
          ],
        },
        {
          title: "Pricing",
          href: "#",
          items: [
            {
              title: "Basic",
              href: "#",
            },
            {
              title: "Professional",
              href: "#",
            },
            {
              title: "Business",
              href: "#",
            },
          ],
        },
        {
          title: "Learn",
          href: "#",
          items: [
            {
              title: "Docs",
              href: "#",
            },
            {
              title: "GitHub",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          href: "#",
          items: [
            {
              title: "Forum",
              href: "#",
            },
            {
              title: "Discord",
              href: "#",
            },
          ],
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
    >
      <p variant="text" my="4">
        Perspiciatis doloribus dignissimos delectus exercitationem ipsum
        voluptates.
      </p>
      <a
        href="mailto:#"
        variant="text"
        display="inline-flex"
        alignItems="center"
        _hover={{
          color: "primary",
        }}
      >
        <Icon name="mail" size="6" mr="2" /> hey@reflexjs.org
      </a>
    </Block>
  )
}
