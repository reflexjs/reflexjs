import Link from "next/link"
import { getAllNodes, getMdxPaths, getNode } from "next-mdx/server"

import { Category, Post } from "types"
import { Layout } from "@/components/layout"
import { LayoutGrid } from "@/components/layout-grid"

export interface CategoryPageProps {
  category: Category
  posts: Post[]
}

export default function AuthorPage({ category, posts }: CategoryPageProps) {
  return (
    <Layout>
      <LayoutGrid>
        <h1 variant="heading.h1">{category.frontMatter.name}</h1>
        {category.frontMatter.excerpt && (
          <p variant="text.lead" my="4">
            {category.frontMatter.excerpt}
          </p>
        )}
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
  const category = await getNode<Category>("category", context)

  if (!category) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllNodes<Post>("post")

  return {
    props: {
      category,
      posts: posts.filter((post) =>
        post.relationships.category.some(({ slug }) => slug === category.slug)
      ),
    },
  }
}
