import * as React from "react"
import { VisuallyHidden } from "reflexjs"

export default function Block({ subheading, heading, text, ...props }) {
  return (
    <section py="6|8|12|20" {...props}>
      <div variant="container">
        <div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
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
          <form display="grid" col="1|auto auto" mt="6" gap="4" w="full|auto">
            <VisuallyHidden>
              <label htmlFor="email">Email</label>
            </VisuallyHidden>
            <input
              variant="input"
              type="email"
              id="form-04-email"
              name="email"
              placeholder="Type your email"
            />
            <button type="submit" variant="button.primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
