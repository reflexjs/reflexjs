import getMdxContent, { MdxContent } from "./get-mdx-content"
import manifest from "../docs/manifest.json"

const DOCS_CONTENT_PATH = "./docs"

export interface Doc extends MdxContent {
  prevDoc?: Doc
  nextDoc?: Doc
}

export interface DocTree {
  title: string
  url: string
}

export default async function (): Promise<Doc[]> {
  const mdxDocs = await getMdxContent(DOCS_CONTENT_PATH)
  const docTree = manifest
    .flatMap(({ items, ...item }) => [item, ...items])
    .filter((item) => "url" in item) as DocTree[]

  const slugs = docTree.map(({ url }) => url.replace(/^\/docs\/?/, ""))

  return slugs.flatMap((slug, index) => {
    const doc = mdxDocs.find((mdxDoc) => mdxDoc.slug === slug)
    if (!doc) return []

    return {
      ...doc,
      prevDoc:
        index === 0
          ? null
          : mdxDocs.find((mdxDoc) => mdxDoc.slug === slugs[index - 1]),
      nextDoc:
        index === slugs.length - 1
          ? null
          : mdxDocs.find((mdxDoc) => mdxDoc.slug === slugs[index + 1]),
    }
  })
}
