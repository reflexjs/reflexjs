import { promises as fs } from "fs"
import path from "path"
import renderToString from "next-mdx-remote/render-to-string"
import matter from "gray-matter"
import glob from "fast-glob"
import hasha from "hasha"

import { mdxComponents } from "../components"
import mdxCache from "./get-mdx-cache"

export interface MdxPath {
  filepath: string
  slug: string
}

export interface MdxContent extends MdxPath {
  hash: string
  content: string
  data: {
    title?: string
    excerpt?: string
    prev?: ManifestItem
    next?: ManifestItem
  }
  mdx: string
}

export type Manifest = ManifestItem[]

export interface ManifestItem {
  title: string
  url?: string
  items?: ManifestItem[]
}

export function getManifestItems(items) {
  if (!items.length) return []
  return items.flatMap(({ items: _items, ...item }) => {
    if (_items && _items.length) {
      return getManifestItems(_items)
    }

    return [
      {
        ...item,
      },
    ]
  })
}

export async function getMdxPaths(source: string): Promise<MdxPath[]> {
  const contentGlob = `${source}/**/*.mdx`
  const files = glob.sync(contentGlob)

  if (!files.length) return []

  return await Promise.all(
    files.map(async (filepath) => {
      let slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "")

      slug = slug.replace("/index", "")

      return {
        filepath,
        slug,
      }
    })
  )
}

export async function getMdxContent(
  source: string,
  slug: string
): Promise<MdxContent> {
  const mdxPaths = await getMdxPaths(source)
  const mdxPath = mdxPaths.find((mdxPath) => mdxPath.slug === slug)
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
    scope: data,
  })

  const mdxContent: MdxContent = {
    ...mdxPath,
    hash,
    content,
    data,
    mdx,
  }

  mdxCache.set<MdxContent>(hash, mdxContent)

  return mdxContent
}
