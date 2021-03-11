import { getAllMdxNodes } from "next-mdx/server"
import readingTime from "reading-time"
import { Layout } from "@/components/layout"
import { Post } from "types"
import { PostTeaser } from "@/components/post-teaser"

export interface IndexPageProps {
  posts: Post[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <Layout>
      <div variant="container.md" py="10|12">
        <h1 variant="heading.h1">All Posts.</h1>
        {posts.length ? (
          posts.map((post) => <PostTeaser key={post.slug} post={post} />)
        ) : (
          <p my="10" textAlign="center">
            No posts found.
          </p>
        )}
      </div>
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
