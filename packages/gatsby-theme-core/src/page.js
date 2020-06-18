import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Seo } from "./seo"
import { Layout } from "./layout"

export const Page = ({ title, excerpt, slug, body }) => (
  <Layout>
    <Seo title={title} description={excerpt} pathname={slug} />
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)
