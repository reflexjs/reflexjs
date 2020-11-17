import Head from "next/head"
import hydrate from "next-mdx-remote/hydrate"
import { Layout, mdxComponents, SidebarNav } from "../../src/components"
import Link from "next/link"
import manifest from "../../docs/manifest.json"
import { Icon } from "reflexjs"
import {
  getMdxPaths,
  getMdxContent,
  MdxContent,
} from "../../src/get-mdx-content"

export const DOCS_CONTENT_PATH = "./docs"

export interface DocsPageProps {
  doc: MdxContent
}

export default function DocsPage({ doc }: DocsPageProps) {
  const content = hydrate(doc.mdx, {
    components: mdxComponents,
  })

  return (
    <Layout>
      {/* TODO: Add this back when Nextjs 10.1.0 is released */}
      {/* <Head>
        <meta name="description" content={doc.data.excerpt} />
        <title>{doc.data.title} | Reflex</title>
      </Head> */}
      <div variant="container">
        <div
          display="grid"
          col="1|180px 1fr|180px 1fr|250px 1fr"
          gap="null|6|6|20"
        >
          <aside
            position="sticky"
            top="14"
            h={(theme) => `calc(100vh - ${theme.space[14]})`}
            overflow="scroll"
            py="12"
            borderRightWidth="1"
          >
            <SidebarNav items={manifest} />
          </aside>
          <div py="10" className="DocSearch-content">
            <h1 variant="heading.h1">{doc.data.title}</h1>
            {doc.data.excerpt ? (
              <p variant="text.lead" mt="2">
                {doc.data.excerpt}
              </p>
            ) : null}
            <hr my="6" />
            {content}
            <div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py="10"
            >
              {doc.prev ? (
                <Link href={doc.prev.url} passHref>
                  <a variant="button.link">
                    <Icon
                      name="chevron"
                      size="5"
                      mr="2"
                      transform="rotate(180deg)"
                    />
                    {doc.prev.title}
                  </a>
                </Link>
              ) : null}
              {doc.next ? (
                <Link href={doc.next.url} passHref>
                  <a variant="button.link" ml="auto">
                    {doc.next.title} <Icon name="chevron" size="5" ml="2" />
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
  const mdxPaths = await getMdxPaths(DOCS_CONTENT_PATH)
  const paths = mdxPaths.map(({ slug }) => ({
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
  const doc = await getMdxContent(DOCS_CONTENT_PATH, slug ? slug.join("/") : "")

  return {
    props: {
      doc,
    },
  }
}
