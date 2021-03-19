import { MdxNode } from "next-mdx"

interface Post
  extends MdxNode<{
    title: string
    date?: string
    excerpt?: string
    featured?: boolean
    image?: string
    caption?: string
  }> {
  readingTime?: {
    text: string
    time: number
    words: number
    minutes: number
  }
  relationships: {
    author: Author[]
    category: Category[]
  }
}

interface Page
  extends MdxNode<{
    title: string
    excerpt?: string
  }> {}

interface Author
  extends MdxNode<{
    name: string
    bio?: string
    picture?: string
  }> {}

interface Category
  extends MdxNode<{
    name: string
    excerpt?: string
  }> {}
