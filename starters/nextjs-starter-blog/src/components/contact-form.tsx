import { Icon, VisuallyHidden } from "reflexjs"

export function ContactForm() {
  return (
    <form display="grid" col="1|repeat(2, auto)" gap="4" mt="4" w="full|auto">
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
          rows={10}
        />
      </div>
      <div display="grid" col="2" gap="4">
        <button type="submit" variant="button.primary">
          Send message <Icon name="arrow-right" ml="2" />
        </button>
        <button variant="button.secondary">Button</button>
      </div>
    </form>
  )
}
