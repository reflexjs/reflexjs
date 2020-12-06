import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  image,
  buttons,
  children,
  ...props
}) {
  return (
    <section pt="6|8|12|20" {...props}>
      <div variant="container">
        <div
          display="flex"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
        >
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
        {image && (
          <img
            display="block"
            w="full"
            h="40|56|80"
            mt="12|14|16"
            roundedTop="xl"
            overflow="hidden"
            {...image}
          />
        )}
      </div>
    </section>
  )
}
