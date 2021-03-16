import { getAllMdxNodes, getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import { components } from "@reflexjs/mdx"
import Link from "next/link"

import { Category, Post } from "types"
import { Layout } from "@/components/layout"
import { LayoutGrid } from "@/components/layout-grid"

export interface CategoryPageProps {
  category: Category
  posts: Post[]
}

export default function AuthorPage({ category, posts }: CategoryPageProps) {
  const content = useHydrate(category, {
    components,
  })

  return (
    <Layout>
      <LayoutGrid>
        <h1 variant="heading.h1">{category.frontMatter.name}</h1>
        {content}
        {posts.length ? (
          <div pt="10">
            <h3 variant="heading.h6" pb="4" borderBottomWidth="1" mb="4">
              Posted in {category.frontMatter.name}
            </h3>
            <ul>
              {posts.map((post) => (
                <li key={post.slug} mb="2">
                  <Link href={post.url} passHref>
                    <a variant="heading.h4 text.link">
                      {post.frontMatter.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </LayoutGrid>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("category"),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const category = await getMdxNode<Category>("category", context, {
    components,
  })

  if (!category) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllMdxNodes<Post>("post")

  return {
    props: {
      category,
      posts: posts.filter((post) =>
        post.relationships.category.some(({ slug }) => slug === category.slug)
      ),
    },
  }
}
