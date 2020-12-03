import { Icon } from "reflexjs"
import Block from "../blocks/hero-001"

export default function Example() {
  return (
    <Block
      subheading="Subheading"
      heading="Build a better web"
      text="Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus temporibus."
      image={{
        src: "/images/placeholder.jpg",
        alt: "Hero image",
      }}
      buttons={
        <div display="inline-grid" col="2" gap="2" mt="4">
          <a variant="button.primary" href="#">
            Get started <Icon name="arrow-right" ml="2" size="4" />
          </a>
          <a variant="button.secondary" href="#">
            Learn more
          </a>
        </div>
      }
    />
  )
}
