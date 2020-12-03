import { Icon } from "reflexjs"
import Block from "../blocks/features-001"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Getting started"
      text="Discover the tool that drives engagement and productivity."
      features={[
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
        {
          heading: "Consulting",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "users",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },

        {
          heading: "Development",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "code",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
        {
          heading: "Analysis",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "trending-up",
          },
          link: (
            <a display="inline-flex" alignItems="center" href="#">
              Learn more <Icon name="arrow-right" size="4" ml="2" />
            </a>
          ),
        },
      ]}
      buttons={
        <div display="flex" alignItems="center" justifyContent="center" gap="4">
          <a variant="button.primary" href="#">
            Get started
            <Icon name="arrow-right" ml="2" size="4" />
          </a>
          <a variant="button.secondary" href="#">
            Learn more
          </a>
        </div>
      }
    />
  )
}
