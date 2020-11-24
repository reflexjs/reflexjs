import manifest from "../../docs/manifest.json"
import { DocPage } from "../../src/components"
import {
  getMdxPaths,
  getMdxContent,
  MdxContent,
} from "../../src/utils/get-mdx-content"

export const DOCS_CONTENT_PATH = "./docs"

export interface DocsPageProps {
  doc: MdxContent
}

export default function DocsPage({ doc }: DocsPageProps) {
  return <DocPage doc={doc} manifest={manifest} />
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
