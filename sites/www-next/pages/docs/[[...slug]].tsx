import hydrate from "next-mdx-remote/hydrate"
import { getMdxContent } from "../../src/get-mdx-content"
import { Layout, mdxComponents, SidebarNav } from "../../src/components"
import navItems from "../../src/doc-nav"

const DOCS_CONTENT_PATH = "./pages/docs"

export default function DocsPage({ mdx, frontMatter }) {
  const content = hydrate(mdx, {
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
            <SidebarNav items={navItems} />
          </aside>
          <div py="10">
            <h1 variant="heading.h1" fontSize="5xl" lineHeight="1">
              {frontMatter.title}
            </h1>
            {content}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const docs = await getMdxContent(DOCS_CONTENT_PATH)
  const paths = docs.map(({ slug }) => ({
    params: {
      slug: slug === "index" ? [] : slug.split("/"),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const docs = await getMdxContent(DOCS_CONTENT_PATH)
  const [doc] = docs.filter((doc) =>
    slug ? doc.slug === slug.join("/") : "index"
  )

  return {
    props: {
      mdx: doc.mdx,
      frontMatter: doc.data,
    },
  }
}
