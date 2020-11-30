import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({ branding, links, ...props }) {
  return (
    <header py="2" {...props}>
      <div variant="container">
        <div display="flex" alignItems="center">
          {branding && (
            <a
              href="/"
              display="flex"
              alignItems="center"
              _hover={{
                color: "primary",
              }}
            >
              {branding.icon && <Icon name={branding.icon} size="5" mr="2" />}
              <span fontWeight="semibold" fontSize="2xl">
                {branding.name}
              </span>
            </a>
          )}
          {links?.length && (
            <div
              display="grid"
              col={`1|repeat(${links.length}, auto)`}
              gap="4|4|8"
              mt="4|4|0"
              ml="auto"
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
          <button variant="button.icon" bg="red">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}
