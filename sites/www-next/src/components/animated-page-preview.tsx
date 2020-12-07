import { motion } from "framer-motion"

export interface AnimatedPagePreviewProps {
  /**
   * An array of block names.
   */
  blocks: string[]
}

export function AnimatedPagePreview({
  blocks,
  ...props
}: AnimatedPagePreviewProps) {
  return blocks?.length ? (
    <div {...props}>
      {blocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0.5,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.45,
            delay: index / 5,
          }}
        >
          <div
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)"
            rounded="md"
            mb="10"
            borderWidth="1"
          >
            <img
              src={`/images/library/${block}.jpeg`}
              alt={`${block} screenshot`}
              display="block"
            />
          </div>
        </motion.div>
      ))}
    </div>
  ) : null
}
