import { Layout, LinkedCard } from "../src/components"

export default function DocsPage() {
  return (
    <Layout>
      <section py="12|16|18">
        <div variant="container">
          <div
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <h1 variant="heading.h1">Select your framework</h1>
            <p variant="text.lead" maxW="600" mt="4">
              Reflexjs works with any React framework. Select yours to get
              started.
            </p>
            <div display="grid" col="1|2|3" my="8" gap="4" w="full">
              <LinkedCard
                href="/docs/nextjs"
                icon="nextjs"
                title="Next.js"
                color="#111"
              />
              <LinkedCard
                href="/docs/gatsby"
                icon="gatsby"
                title="Gatsby"
                color="#663399"
              />
              <LinkedCard
                href="/docs/react"
                icon="react"
                title="Create React App"
                color="#61DAFB"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
