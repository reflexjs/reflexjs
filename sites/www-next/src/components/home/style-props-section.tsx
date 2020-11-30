import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SxProps } from "reflexjs"

interface StylePropsSectionProps {
  styles: SxProps
  component: string
}

export function StylePropsSection({
  styles,
  component,
}: StylePropsSectionProps) {
  const [sxProps, setSxProps] = React.useState({})
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const Component = component

  const styleProp = {
    visible: (index) => ({
      y: 0,
      opacity: 1,
      width: "auto",
      height: "auto",
      transition: {
        ease: "easeInOut",
        delay: 1 + index,
        duration: 0.5,
      },
    }),
    hidden: {
      y: 100,
      opacity: 0,
      width: 0,
      height: 0,
    },
  }

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div display="grid" col="2" gap="4" my="10">
      <div position="relative" rounded="md">
        <pre variant="text.pre" m="0" p="6" ref={ref}>
          <motion.div>
            <span color="prism.punctuation">&lt;</span>
            <span color="prism.tag">{Component}</span>
            {Object.keys(styles).map((prop, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={styleProp}
                onAnimationComplete={() =>
                  setSxProps({ ...sxProps, [prop]: styles[prop] })
                }
              >
                <span>&nbsp;&nbsp;</span>
                <span color="prism.string">{prop}</span>
                <span color="prism.punctuation">=</span>
                <span color="prism.punctuation">&ldquo;</span>
                <span color="prism.property">{styles[prop]}</span>
                <span color="prism.punctuation">&rdquo;</span>
              </motion.div>
            ))}
          </motion.div>
          <div>
            <span color="prism.punctuation">&gt;</span>
          </div>
          <div>
            <span>&nbsp;&nbsp;</span>
            <span>Button</span>
          </div>
          <div>
            <span color="prism.punctuation">&lt;</span>
            <span color="prims.punctuation">/</span>
            <span color="prism.tag">{Component}</span>
            <span color="prism.punctuation">&gt;</span>
          </div>
        </pre>
      </div>
      <div
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="6"
        rounded="md"
        bg="#f6f6f6"
      >
        <Component transition="all .5s ease-in" {...sxProps}>
          Button
        </Component>
      </div>
    </div>
  )
}
