import * as React from "react"
import { VisuallyHidden } from "reflexjs"

export default function Block({ subheading, heading, text, image, ...props }) {
  return (
    <section py="6|8|12|20" position="relative" {...props}>
      <div variant="container">
        <div display="grid" col="1|2" gap="8|12|16">
          {image && (
            <img
              position="static|absolute"
              top="0"
              right="0"
              w="full|half"
              h="40|full"
              {...image}
            />
          )}
          <div
            display="flex"
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
            py="0|12|16"
          >
            {subheading && (
              <p color="primary" textTransform="uppercase" m="0">
                {subheading}
              </p>
            )}
            {heading && (
              <h1 variant="heading.h1" fontWeight="bolder" lineHeight="1">
                {heading}
              </h1>
            )}
            {text && (
              <p variant="text.lead" mt="2">
                {text}
              </p>
            )}
            <form display="grid" mt="4" col="auto auto" gap="2" w="full|auto">
              <div flex="1">
                <VisuallyHidden>
                  <label htmlFor="email">Email</label>
                </VisuallyHidden>
                <input
                  variant="input.lg"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email"
                />
              </div>
              <button type="submit" variant="button.secondary.lg">
                Join now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
