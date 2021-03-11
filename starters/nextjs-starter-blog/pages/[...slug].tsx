import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import { components } from "@reflexjs/mdx"

import { Page } from "types"
import { Layout } from "@/components/layout"

export interface PageProps {
  page: Page
}

export default function PagePage({ page }: PageProps) {
  const content = useHydrate(page, {
    components,
  })

  return (
    <Layout>
      <article>
        <div variant="container.sm">
          <h1 variant="heading.h1">{page.frontMatter.title}</h1>
          {page.frontMatter.excerpt ? (
            <p variant="text.lead" my="6">
              {page.frontMatter.excerpt}
            </p>
          ) : null}
          {content}
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("page"),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const page = await getMdxNode("page", context, {
    components,
  })

  return {
    props: {
      page,
    },
  }
}
