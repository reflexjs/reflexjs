import hydrate from "next-mdx-remote/hydrate"
import getDocs, { Doc } from "../../src/get-docs"
import { Layout, mdxComponents, SidebarNav } from "../../src/components"
import Link from "next/link"
import manifest from "../../docs/manifest.json"
import { Icon } from "reflexjs"

export interface DocsPageProps {
  doc: Doc
}

export default function DocsPage({ doc }: DocsPageProps) {
  const content = hydrate(doc.mdx, {
    components: mdxComponents,
  })

  return (
    <Layout>
      <div variant="container">
        <div display="grid" col="200px 1fr" gap="18">
          <aside
            position="sticky"
            top="14"
            h={(theme) => `calc(100vh - ${theme.space[14]})`}
            overflow="scroll"
            py="12"
          >
            <SidebarNav items={manifest} />
          </aside>
          <div py="10">
            <h1 variant="heading.h1">{doc.data.title}</h1>
            {doc.data.excerpt ? (
              <p variant="text.lead" mt="2">
                {doc.data.excerpt}
              </p>
            ) : null}
            <hr mt="6" />
            {content}
            <div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py="10"
            >
              {doc.prevDoc ? (
                <Link href={doc.prevDoc.slug} passHref>
                  <a variant="button.link">
                    <Icon
                      name="chevron"
                      size="5"
                      mr="2"
                      transform="rotate(180deg)"
                    />
                    {doc.prevDoc.data.title}
                  </a>
                </Link>
              ) : null}
              {doc.nextDoc ? (
                <Link href={doc.nextDoc.slug} passHref>
                  <a variant="button.link" ml="auto">
                    {doc.nextDoc.data.title}{" "}
                    <Icon name="chevron" size="5" ml="2" />
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const docs = await getDocs()
  const paths = docs.map(({ slug }) => ({
    params: {
      slug: slug.split("/"),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const docs = await getDocs()
  const [doc] = docs.filter((doc) =>
    slug ? doc.slug === slug.join("/") : "index"
  )

  return {
    props: {
      doc,
    },
  }
}
