import { GetStaticProps } from "next"
import Link from "next/link"
import chunk from "lodash.chunk"
import { Layout, VisuallyHidden } from "@components"
import { getBlocks } from "@utils"
import { blocks as config } from "@config"
import { Block, BlockCategory } from "types"

export interface BlocksPageProps {
  categories: BlockCategory[]
  blocks: Block[]
}

export default function BlocksPage({ categories, blocks }: BlocksPageProps) {
  return (
    <Layout>
      <section py="10" bg="modes.dark.background">
        <div variant="container">
          <h1 variant="heading.h1" color="white">
            Blocks
          </h1>
          {categories.map((category) => {
            const _blocks = blocks.filter(
              (block) => block.category.id === category.id
            )
            return !_blocks.length ? null : (
              <section key={category.id} mt="10">
                <h2 variant="heading.h2" color="white">
                  {category.name}
                </h2>
                <div display="grid" col="1|2|3" gap="6||||10" mt="8">
                  {chunk(_blocks, Math.ceil(_blocks.length / 3)).map(
                    (blocks, index) => (
                      <div key={index}>
                        {blocks.map((block) => (
                          <Link href={block.slug} passHref key={block.slug}>
                            <a
                              display="flex"
                              justifyContent="center"
                              borderWidth="1px"
                              rounded="md"
                              fontSize="2xl"
                              overflow="hidden"
                              bg="white"
                              mb="0|8|10"
                              position="relative"
                            >
                              <img src={block.thumbnail} />
                              <VisuallyHidden>{block.name}</VisuallyHidden>
                            </a>
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blocks = await getBlocks()
  return {
    props: {
      categories: config.categories,
      blocks,
    },
  }
}
