import * as React from "react"
import Block from "../blocks/pricing-002"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Choose your plan"
      text="Start building for free, and upgrade anytime to unlock other features."
      items={[
        {
          heading: "Basic",
          description: "For small and medium-sized businesses",
          price: "49",
        },
        {
          heading: "Plus",
          isSelected: true,
          description:
            "For larger businesses with advanced administration tools",
          price: "299",
        },
        {
          heading: "Custom",
          description:
            "For very large businesses or those in highly regulated industries",
          price: "499",
        },
      ]}
    />
  )
}
