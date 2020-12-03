import { Icon } from "reflexjs"
import Block from "../blocks/cards-001"

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
          icon: {
            name: "activity",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
        {
          heading: "Business Planning",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "credit-card",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
        {
          heading: "Premium Support",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "gift",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
      ]}
    />
  )
}
