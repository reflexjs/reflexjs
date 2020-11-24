import { GetStaticProps } from "next"
import Link from "next/link"
import Image from "next/image"
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
          <h1 color="white" mt="0">
            {blocks.length} blocks
          </h1>
          {categories.map((category) => {
            const _blocks = blocks.filter(
              (block) => block.category.id === category.id
            )
            return !_blocks.length ? null : (
              <section key={category.id} mb="20">
                <div d="flex" justifyContent="space-between">
                  <h2 fontSize="2xl" color="white">
                    {category.name}
                  </h2>
                </div>
                <div columnCount="4" columnGap="6" columnFill="initial">
                  {_blocks.map((block) => (
                    <Link href={block.slug} passHref key={block.slug}>
                      <a
                        display="inline-flex"
                        justifyContent="center"
                        borderWidth="1px"
                        rounded="md"
                        fontSize="2xl"
                        overflow="hidden"
                        bg="white"
                        mb="6"
                        position="relative"
                      >
                        <Image
                          src={block.thumbnail}
                          layout="intrinsic"
                          width={400}
                          height={180}
                        />
                        <VisuallyHidden>{block.name}</VisuallyHidden>
                      </a>
                    </Link>
                  ))}
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
