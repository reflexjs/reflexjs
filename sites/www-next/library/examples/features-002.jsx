import { Icon } from "reflexjs"
import Block from "../blocks/features-002"

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
        },
        {
          heading: "Business Planning",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "credit-card",
          },
        },
        {
          heading: "Premium Support",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "gift",
          },
        },
        {
          heading: "Consulting",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "users",
          },
        },
        {
          heading: "Development",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "code",
          },
        },
        {
          heading: "Analysis",
          text:
            "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
          icon: {
            name: "trending-up",
          },
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
