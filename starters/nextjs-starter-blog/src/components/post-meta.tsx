import Link from "next/link"
import { formatDate } from "src/utils/format-date"
import { Post } from "types"

export interface PostMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
}

export function PostMeta({ post, ...props }: PostMetaProps) {
  const [author] = post.relationships.author
  const [category] = post.relationships.category

  return (
    <div {...props}>
      <p color="textLighter">
        {author && (
          <>
            Posted by{" "}
            <Link href={author.url} passHref>
              <a variant="text.link" fontWeight="semibold">
                {author.frontMatter.name}
              </a>
            </Link>
          </>
        )}
        {category && (
          <>
            &nbsp;in&nbsp;
            <Link href={category.url} passHref>
              <a variant="text.link">{category.frontMatter.name}</a>
            </Link>
          </>
        )}
      </p>
      <p color="textLighter">
        {formatDate(post.frontMatter.date)}
        {post.readingTime && <>&nbsp;-&nbsp;{post.readingTime?.text}</>}
      </p>
    </div>
  )
}
