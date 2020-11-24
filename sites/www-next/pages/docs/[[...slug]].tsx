import { DocPage } from "@components"
import { getMdxPaths, getMdxContent, MdxContent } from "@utils"
import { docs } from "@config"

export interface DocsPageProps {
  doc: MdxContent
}

export default function DocsPage({ doc }: DocsPageProps) {
  return <DocPage doc={doc} manifest={docs.manifest} />
}

export async function getStaticPaths() {
  const mdxPaths = await getMdxPaths(docs.contentPath)
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
  const doc = await getMdxContent(docs.contentPath, slug ? slug.join("/") : "")

  return {
    props: {
      doc,
    },
  }
}
