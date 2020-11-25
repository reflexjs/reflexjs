import * as React from "react"
import { Icon, VisuallyHidden } from "reflexjs"

export default function Block({ name, copyright, links, iconLinks, ...props }) {
  return (
    <section py={[8, 10, 12]} {...props}>
      <div variant="container">
        <div
          display="flex"
          alignItems="center"
          flexDirection="column|row"
          alignItems="center"
          justifyContent="space-between"
        >
          {name && <h2 variant="heading.h2">{name}</h2>}
          {links?.length && (
            <div
              display="grid"
              col={`1|repeat(${links.length}, auto)`}
              gap="4|4|8"
              mt="4|4|0"
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  variant="text"
                  href={link.href}
                  textAlign="center"
                  _hover={{
                    color: "primary",
                  }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
          {iconLinks?.length && (
            <div display="grid" col="2" gap="4" mt="4|0">
              {iconLinks.map((iconLink, index) => (
                <a key={index} href={iconLink.href} color="text">
                  <Icon name={iconLink.name} size={5} />
                  <VisuallyHidden>{iconLink.title}</VisuallyHidden>
                </a>
              ))}
            </div>
          )}
        </div>
        {copyright && (
          <div borderTopWidth={1} textAlign="center" pt="4|5|6" mt="4|5|6">
            <p variant="text.sm" my="0">
              {copyright}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
