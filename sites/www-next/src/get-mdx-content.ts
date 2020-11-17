import { promises as fs } from "fs"
import path from "path"
import renderToString from "next-mdx-remote/render-to-string"
import matter from "gray-matter"
import glob from "fast-glob"
import hasha from "hasha"

import manifest from "../docs/manifest.json"
import { mdxComponents } from "./components"
import mdxOptions from "./mdx-options"
import mdxCache from "./get-mdx-cache"

export interface MdxPath {
  filepath: string
  title: string
  slug: string
  url: string
}

export interface MdxContent extends MdxPath {
  hash: string
  content: string
  data: {
    title?: string
    excerpt?: string
  }
  mdx: string
  prev: ManifestItem
  next: ManifestItem
}

export interface ManifestItem {
  title: string
  url?: string
  items?: ManifestItem[]
}

export async function getMdxPaths(source: string): Promise<MdxPath[]> {
  const contentGlob = `${source}/**/*.mdx`
  const files = glob.sync(contentGlob)

  if (!files.length) return []

  const manifestItems: ManifestItem[] = manifest
    .flatMap(({ items, ...item }) => [item, ...items])
    .filter((item) => "url" in item)

  const manifestUrls = manifestItems.map((item) => item.url)

  const mdxPaths = await Promise.all(
    files.map(async (filepath) => {
      let slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "")

      slug = slug === "index" ? "" : slug

      const manifestItem = manifestItems.find(
        (manifestItem) =>
          manifestItem.url === `/docs/${slug}`.replace(/\/$/, "")
      )

      return {
        filepath,
        slug,
        title: manifestItem.title,
        url: manifestItem.url,
      }
    })
  )

  return mdxPaths.sort(
    (a, b) => manifestUrls.indexOf(a.url) - manifestUrls.indexOf(b.url)
  )
}

export async function getMdxContent(
  source: string,
  slug: string
): Promise<MdxContent> {
  const mdxPaths = await getMdxPaths(source)
  const mdxPath = mdxPaths.find((mdxPath) => mdxPath.slug === slug)
  const mdxPathIndex = mdxPaths.findIndex((mdxPath) => mdxPath.slug === slug)
  if (!mdxPath) return null

  const raw = await fs.readFile(mdxPath.filepath, "utf-8")
  const hash = hasha(raw.toString())

  const cachedContent = mdxCache.get<MdxContent>(hash)
  if (cachedContent && cachedContent.hash === hash) {
    return cachedContent
  }

  const { content, data } = matter(raw)
  const mdx = await renderToString(content, {
    components: mdxComponents,
    mdxOptions,
    scope: data,
  })

  const mdxContent: MdxContent = {
    ...mdxPath,
    hash,
    content,
    data,
    mdx,
    prev: mdxPathIndex === 0 ? null : mdxPaths[mdxPathIndex - 1],
    next:
      mdxPathIndex === mdxPaths.length - 1 ? null : mdxPaths[mdxPathIndex + 1],
  }

  mdxCache.set<MdxContent>(hash, mdxContent)

  return mdxContent
}
