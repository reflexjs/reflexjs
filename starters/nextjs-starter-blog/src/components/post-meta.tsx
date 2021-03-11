import Link from "next/link"
import { formatDate } from "src/utils/format-date"
import { Post } from "types"

export interface PostMetaProps {
  post: Post
}

export function PostMeta({ post, ...props }: PostMetaProps) {
  const [author] = post.relationships.author
  const [category] = post.relationships.category

  return (
    <div color="gray" {...props}>
      <div>
        {author && (
          <span display="inline-block">
            Posted by{" "}
            <Link href={author.url} passHref>
              <a variant="text.link" fontWeight="semibold">
                {author.frontMatter.name}
              </a>
            </Link>
          </span>
        )}
        {category && (
          <span display="inline-block" mr="4">
            &nbsp;in&nbsp;
            <Link href={category.url} passHref>
              <a variant="text.link">{category.frontMatter.name}</a>
            </Link>
          </span>
        )}
      </div>
      <div mt="1">
        <span mt="2|0">{formatDate(post.frontMatter.date)}</span>
        {post.readingTime && <span>&nbsp;-&nbsp;{post.readingTime?.text}</span>}
      </div>
    </div>
  )
}
