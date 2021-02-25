import { Layout } from "@/components/layout"
import Hero from "@/blocks/hero"

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="Welcome to Reflexjs"
        text="Get started by editing `pages/index.js`"
        image="/images/placeholder.jpg"
      />
    </Layout>
  )
}
