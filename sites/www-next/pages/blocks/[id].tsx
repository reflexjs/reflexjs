import * as React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Icon } from "reflexjs"
import { Preview, Layout, CodeBrowser } from "@components"
import { getBlocks } from "@utils"
import { Block } from "types"

export interface BlockPageProps {
  block: Block
}

export default function BlockPage({ block }: BlockPageProps) {
  const { id, name, slug } = block
  const Example = dynamic(() => import(`../../library/examples/${id}.jsx`))

  return (
    <Layout>
      <div py="4|8">
        <div variant="container.md">
          <div display="flex" justifyContent="space-between">
            <h1
              variant="heading"
              fontSize="3xl"
              my="0"
              display="flex"
              lineHeight="1"
              alignItems="center"
            >
              <Link href="/blocks" passHref>
                <a color="link">Blocks</a>
              </Link>
              <Icon name="chevron" size="6" mx="1" />
              <span>{block.category.name} Block</span>
            </h1>
            <span bg="muted" rounded="full" py="1" px="4" fontSize="sm">
              {name}
            </span>
          </div>
        </div>
      </div>
      <Preview fullScreenPath={`${slug}/full`} mb="10">
        <Example />
      </Preview>
      <CodeBrowser block={block} />
    </Layout>
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
