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
  cols?: number
  mode?: "dark" | "default"
}

export default function BlocksPage({
  categories,
  blocks,
  cols = 2,
  mode = "default",
}: BlocksPageProps) {
  const color = mode === "dark" ? "modes.dark." : ""
  return (
    <Layout
      title="Blocks Library"
      description="Ready to use blocks that you can copy and paste into your site."
    >
      <section py="10" bg={`${color}background`}>
        <div variant="container.md">
          <h1 variant="heading.h1" color={`${color}heading`}>
            Blocks
          </h1>
          <p variant="text.lead" color={`${color}text`}>
            Ready to use blocks that you can copy and paste into your site.
          </p>
          {categories.map((category) => {
            const _blocks = blocks.filter(
              (block) => block.category.id === category.id
            )
            return !_blocks.length ? null : (
              <section key={category.id} mt="10">
                <h2 variant="heading.h3" color={`${color}heading`}>
                  {category.name}
                </h2>
                <div display="grid" col={`1|2|${cols}`} gap="6|6|6|10" mt="8">
                  {chunk(_blocks, Math.ceil(_blocks.length / cols)).map(
                    (blocks, index) => (
                      <div key={index}>
                        {blocks.map((block) => (
                          <Link href={block.slug} passHref key={block.slug}>
                            <a
                              display="block"
                              borderWidth="1px"
                              rounded="sm"
                              fontSize="2xl"
                              overflow="hidden"
                              bg="white"
                              mb="8|10"
                              position="relative"
                              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)"
                            >
                              <img
                                src={block.thumbnail}
                                display="block"
                                w="100%"
                                h="auto"
                              />
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
