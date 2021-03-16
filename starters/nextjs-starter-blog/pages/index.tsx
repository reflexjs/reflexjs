import { getAllMdxNodes } from "next-mdx/server"
import readingTime from "reading-time"
import { Post } from "types"
import { Layout } from "@/components/layout"
import { PostTeaser } from "@/components/post-teaser"
import { LayoutGrid } from "@/components/layout-grid"

export interface IndexPageProps {
  posts: Post[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <Layout>
      <LayoutGrid>
        <div gridColumn="wide-start/wide-end">
          <h1 variant="heading.h1">All Posts.</h1>
          {posts.length ? (
            posts.map((post) => <PostTeaser key={post.slug} post={post} />)
          ) : (
            <p my="10" textAlign="center">
              No posts found.
            </p>
          )}
        </div>
      </LayoutGrid>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllMdxNodes<Post>("post")

  return {
    props: {
      posts: posts.map<Post>((post) => ({
        ...post,
        readingTime: readingTime(post.content),
      })),
    },
  }
}
