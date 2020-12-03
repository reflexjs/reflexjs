import { Icon } from "reflexjs"
import Block from "../blocks/cards-002"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Unlock your creativity"
      text="Dicta minus iusto quisquam doloribus temporibus."
      cards={[
        {
          heading: "Marketing Strategies",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          link: (
            <a
              display="inline-flex"
              alignItems="center"
              variant="text.link"
              href="#"
            >
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
        {
          heading: "Business Planning",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          link: (
            <a
              display="inline-flex"
              alignItems="center"
              variant="text.link"
              href="#"
            >
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
        {
          heading: "Premium Support",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          link: (
            <a
              display="inline-flex"
              alignItems="center"
              variant="text.link"
              href="#"
            >
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
      ]}
    />
  )
}
