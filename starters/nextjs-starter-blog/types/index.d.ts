import { MdxNode } from "next-mdx"

interface PostFrontMatter {
  title: string
  date?: string
  excerpt?: string
  featured?: boolean
  image?: string
  caption?: string
}

interface Post extends MdxNode<PostFrontMatter> {}
