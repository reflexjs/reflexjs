import Link from "next/link"

export default function IndexPage() {
  return (
    <div variant="container">
      <section textAlign="center" py="10">
        <h1 variant="heading.h1">reflexjs</h1>
        <p variant="text.lead">
          A tiny library for styling React components using style props.
        </p>
        <div display="inline-grid" col="2" gap="2" mt="4">
          <Link href="/docs" passHref>
            <a variant="button.primary">Get started</a>
          </Link>
          <a
            href="https://github.com/reflexjs/reflex"
            variant="button.secondary"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
