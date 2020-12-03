import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  ...props
}) {
  return (
    <section py="6|8|12|20" {...props}>
      <div variant="container">
        {subheading && (
          <p color="primary" textTransform="uppercase" m="0">
            {subheading}
          </p>
        )}
        {heading && (
          <h1 variant="heading.h1" fontWeight="bolder" lineHeight="tight">
            {heading}
          </h1>
        )}
        {text && (
          <p variant="text.lead" mt="2">
            {text}
          </p>
        )}
        {buttons}
      </div>
    </section>
  )
}
