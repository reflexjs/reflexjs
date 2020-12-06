import * as React from "react"
import { VisuallyHidden } from "reflexjs"

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
        <div display="grid" col="1|2" gap="8|12|16" alignItems="center">
          <div>
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
          <form
            display="grid"
            col="1|repeat(2, auto)"
            gap="4"
            mt="4"
            w="full|auto"
          >
            <div>
              <VisuallyHidden>
                <label htmlFor="name">Name</label>
              </VisuallyHidden>
              <input
                variant="input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div>
              <VisuallyHidden>
                <label htmlFor="email">Email</label>
              </VisuallyHidden>
              <input
                variant="input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <VisuallyHidden>
                <label htmlFor="phone">Phone</label>
              </VisuallyHidden>
              <input
                variant="input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div>
              <VisuallyHidden>
                <label htmlFor="subject">Subject</label>
              </VisuallyHidden>
              <select variant="select" id="subject" name="subject">
                <option value="">Select</option>
                <option value="one">Option One</option>
                <option value="two">Option Two</option>
              </select>
            </div>
            <div colStart="span 2">
              <VisuallyHidden>
                <label htmlFor="message">Message</label>
              </VisuallyHidden>
              <textarea
                variant="textarea"
                placeholder="Message"
                id="message"
                name="message"
                rows="5"
              />
            </div>
            <button type="submit" variant="button.primary" colStart="span 2">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
