import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const Page = ({ body }) => <MDXRenderer>{body}</MDXRenderer>
