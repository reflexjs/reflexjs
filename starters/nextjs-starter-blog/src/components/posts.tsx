import Link from "next/link"

export function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.url}>
          <Link href={post.url}>
            <a>
              <h2>{post.frontMatter.title}</h2>
            </a>
          </Link>
          <p>{post.frontMatter.date}</p>
          <p>{post.frontMatter.excerpt}</p>
        </li>
      ))}
    </ul>
  )
}
