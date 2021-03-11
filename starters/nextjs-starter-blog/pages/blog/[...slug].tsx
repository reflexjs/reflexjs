import Image from "next/image"
import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import { components } from "@reflexjs/mdx"
import { Layout } from "@/components/layout"
import { Post } from "types"

export interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  const content = useHydrate(post, {
    components,
  })

  return (
    <Layout>
      <div variant="container.md">
        <div textAlign="center">
          <h1 variant="heading.h1">{post.frontMatter.title}</h1>
          {post.frontMatter.excerpt && (
            <p variant="text.lead" my="6" px="8">
              {post.frontMatter.excerpt}
            </p>
          )}
        </div>
      </div>
      {post.frontMatter.image && (
        <div mb="10" maxW="800" mx="auto">
          <figure
            position="relative"
            height="250px|350px|450px"
            rounded="sm"
            overflow="hidden"
          >
            <Image
              src={post.frontMatter.image}
              alt={post.frontMatter.caption || post.frontMatter.title}
              layout="fill"
            />
          </figure>
          {post.frontMatter.caption && (
            <figcaption variant="text.caption">
              {post.frontMatter.caption}
            </figcaption>
          )}
        </div>
      )}
      <div variant="container.sm">{content}</div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context, {
    components,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
