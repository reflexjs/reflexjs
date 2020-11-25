import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({
  subheading,
  heading,
  text,
  image,
  features,
  ...props
}) {
  return (
    <section py="4|6|12|20" position="relative" {...props}>
      <div variant="container">
        <div display="grid" col="1|1|480px 1fr" gap="6|6|10">
          <div>
            {subheading && <p variant="subheading">{subheading}</p>}
            {heading && (
              <h2 variant="heading.h1" lineHeight="1">
                {heading}
              </h2>
            )}
            {text && (
              <p variant="text.lead" mt="2">
                {text}
              </p>
            )}
            {image && (
              <img
                position="relative||absolute"
                w="full||half"
                h="auto||full"
                top="0"
                right="0"
                rounded="lg||none"
                mt="4|6|0"
                {...image}
              />
            )}
            {features && (
              <div display="grid" gap="4|6|8" mt="8|10|12">
                {features.map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Feature({ heading, text, icon = { name: "check" }, ...props }) {
  return (
    <div display="flex" alignItems="flex-start" {...props}>
      {icon && (
        <div
          display="flex"
          alignItems="center"
          justifyContent="center"
          size="18"
          rounded="full"
          mb="4"
          mx="auto"
          bg={icon.bg || "primary"}
        >
          <Icon size="8" color="background" {...icon} />
        </div>
      )}
      <div flex="1" ml="4">
        <h4 variant="heading.h4">{heading}</h4>
        {text && (
          <p variant="text.paragraph text.small" mt="1">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
