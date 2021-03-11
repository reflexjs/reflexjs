import Link from "next/link"
import { Post } from "types"
import { PostMeta } from "@/components/post-meta"

export interface PostTeaserProps {
  post: Post
}

export function PostTeaser({ post, ...props }: PostTeaserProps) {
  return (
    <article {...props}>
      <hr my="12" />
      <h2 variant="heading.h2" my="4">
        <Link href={post.url} passHref>
          <a
            color="heading"
            textDecoration="none"
            _hover={{
              color: "primary",
            }}
          >
            {post.frontMatter.title}
          </a>
        </Link>
      </h2>
      {post.frontMatter.excerpt ? (
        <p variant="text.paragraph" mt="0" mb="4">
          {post.frontMatter.excerpt}
        </p>
      ) : null}
      <PostMeta post={post} fontSize="sm" />
    </article>
  )
}
