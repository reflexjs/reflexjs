import Block from "../blocks/features-003"

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
      ]}
      image={{
        src: "/images/placeholder.jpg",
        alt: "Hero image",
      }}
    />
  )
}
