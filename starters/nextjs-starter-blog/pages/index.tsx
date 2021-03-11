import Link from "next/link"
import { getAllMdxNodes } from "next-mdx/server"
import { Layout } from "@/components/layout"
import { Post } from "types"

export interface IndexPageProps {
  posts: Post[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <Layout>
      <div variant="container.md">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={post.url} passHref>
              <a>
                <h2 variant="heading.h2">{post.frontMatter.title}</h2>
                <p>{post.frontMatter.excerpt}</p>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllMdxNodes("post"),
    },
  }
}
