import * as React from "react"
import { Icon } from "reflexjs"

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  features,
  columns = 3,
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
          <div display="grid" col={`1|2|${columns}`} gap="4|8" my="8|12">
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

export function Feature({
  heading,
  text,
  icon = { name: "check" },
  link,
  ...props
}) {
  return (
    <div
      display="flex"
      flexDirection="column"
      textAlign="center"
      borderWidth="1"
      rounded="lg"
      p="8"
      {...props}
    >
      {icon && (
        <div
          display="flex"
          alignItems="center"
          justifyContent="center"
          size="18"
          rounded="full"
          mb="4"
          mx="auto"
          bg={icon.bg || "secondary"}
        >
          <Icon size="10" color="white" {...icon} />
        </div>
      )}
      <div flex="1">
        <h4 variant="heading.h4">{heading}</h4>
        {text && (
          <p variant="text.paragraph text.sm" mt="1">
            {text}
          </p>
        )}
        {link}
      </div>
    </div>
  )
}
