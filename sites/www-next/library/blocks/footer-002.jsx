import * as React from "react"
import { Icon, VisuallyHidden } from "reflexjs"

export default function Block({
  name,
  copyright,
  links,
  iconLinks,
  children,
  ...props
}) {
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
          <div maxW="none|300">
            {name && <h2 variant="heading.h2">{name}</h2>} {children}
          </div>
          {links?.length && (
            <div
              display="grid"
              col={`2|repeat(${links.length}, auto)`}
              gap="4|8|16|20"
              mt="4|4|0"
              w="full|auto"
            >
              {links.map((link, index) => (
                <div
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <a
                    key={index}
                    variant="text"
                    href={link.href}
                    textAlign="center"
                    variant="heading.h5"
                    _hover={{
                      color: "primary",
                    }}
                  >
                    {link.title}
                  </a>
                  {link.items.map((item) => (
                    <a href={item.href} variant="text" display="flex" mt="2">
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        {copyright && (
          <div
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderTopWidth={1}
            textAlign="center"
            pt="4|5|6"
            mt="4|5|6"
          >
            <p variant="text.sm" my="0">
              {copyright}
            </p>
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
        )}
      </div>
    </section>
  )
}
