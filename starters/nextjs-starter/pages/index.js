import { Layout } from "@/components/layout"
import { Hero } from "@/blocks/hero"
import { Cards } from "@/blocks/cards"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="Build something amazing"
        text="Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus temporibus."
        image={{
          src: "/images/placeholder.jpg",
          alt: "Hero image",
        }}
        buttons={
          <a variant="button.primary.lg" href="#" mt="4">
            Get started <Icon name="arrow-right" size="6" ml="2" />
          </a>
        }
      />
      <Cards
        subheading="Subheading"
        heading="Unlock your creativity"
        text="Dicta minus iusto quisquam doloribus temporibus."
        cards={[
          {
            heading: "Marketing Strategies",
            text:
              "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
            image: {
              src: "/images/placeholder.jpg",
              alt: "Image",
            },
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
            image: {
              src: "/images/placeholder.jpg",
              alt: "Image",
            },
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
            image: {
              src: "/images/placeholder.jpg",
              alt: "Image",
            },
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
    </Layout>
  )
}
