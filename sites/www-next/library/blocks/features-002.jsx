import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  features,
  ...props
}) {
  return (
    <section py="4|6|12|20" {...props}>
      <div variant="container">
        <div textAlign="center">
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
        </div>
        {features && (
          <div display="grid" col={`1|2|2|3`} gap="4|8|10|12" my="8|12">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        )}
        {buttons}
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
          bg={icon.bg || "muted"}
        >
          <Icon size="8" color="text" {...icon} />
        </div>
      )}
      <div flex="1" ml="4">
        <h4 variant="heading.h4">{heading}</h4>
        {text && (
          <p variant="text.paragraph text.sm" mt="1">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
