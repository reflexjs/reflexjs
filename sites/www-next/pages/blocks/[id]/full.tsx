import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { getBlocks } from "@utils"
import { Block } from "types"
import { NextSeo } from "next-seo"

export interface BlockFullPageProps {
  block: Block
}

export default function BlockFullPage({ block }: BlockFullPageProps) {
  const { id } = block
  const Example = dynamic(() => import(`../../../library/examples/${id}.jsx`))

  return (
    <>
      <NextSeo title={block.category.name} />
      <Example />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blocks = await getBlocks()
  const paths = blocks.map((block) => ({
    params: {
      id: block.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const blocks = await getBlocks()
  const block = blocks.find((block) => block.id === id)

  return {
    props: {
      block,
    },
  }
}
