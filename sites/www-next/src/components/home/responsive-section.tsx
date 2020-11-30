import * as React from "react"
import { motion, useAnimation, AnimateSharedLayout } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SxProps } from "reflexjs"

interface ResposiveSectionProps {
  styles: SxProps
}

export function ResponsiveSection({ styles }: ResposiveSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const Component = "div"

  const initialStyles = {}
  const responsiveValues = {}
  Object.keys(styles).forEach((prop) => {
    const [start, ...rest] = styles[prop].split("|")
    initialStyles[prop] = start
    responsiveValues[prop] = rest
  })

  const [sxProps, setSxProps] = React.useState(initialStyles)

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
    <>
      <div display="grid" col="2" gap="4" my="10">
        <div position="relative" rounded="md">
          <pre variant="text.pre" m="0" p="6">
            <div>
              <span color="prism.punctuation">&lt;</span>
              <span color="prism.tag">{Component}</span>
              {Object.keys(initialStyles).map((prop, index) => (
                <div key={index}>
                  <span>&nbsp;</span>
                  <span color="prism.string">{prop}</span>
                  <span color="prism.punctuation">=</span>
                  <span color="prism.punctuation">&ldquo;</span>
                  <span color="prism.property">
                    {initialStyles[prop]}
                    {responsiveValues[prop].map((value, i) => (
                      <motion.span
                        key={i}
                        sx={{
                          display: "inline-block",
                          color: "prism.boolean",
                          fontWeight: "bold",
                        }}
                        custom={i}
                        initial="hidden"
                        animate={controls}
                        variants={styleProp}
                        onAnimationComplete={() => {
                          return setSxProps({
                            ...sxProps,
                            [prop]:
                              sxProps[prop] + `|${responsiveValues[prop][i]}`,
                          })
                        }}
                      >
                        <span>|{value}</span>
                      </motion.span>
                    ))}
                  </span>
                  <span color="prism.punctuation">&rdquo;</span>
                </div>
              ))}
            </div>
            <div>
              <span color="prism.punctuation">&gt;</span>
            </div>
            <CubeCode>One</CubeCode>
            <CubeCode>Two</CubeCode>
            <CubeCode>Three</CubeCode>
            <CubeCode>Four</CubeCode>
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
          flexDirection="column"
          alignItems="flex-start"
          p="6"
          rounded="md"
          bg="#f6f6f6"
        >
          <AnimateSharedLayout transitionDuration="0.5">
            <Component w="full" {...sxProps}>
              <Cube id="one">One</Cube>
              <Cube id="two">Two</Cube>
              <Cube id="three">Three</Cube>
              <Cube id="four">Four</Cube>
            </Component>
          </AnimateSharedLayout>
        </div>
      </div>
      <span ref={ref}></span>
    </>
  )
}

function CubeCode({ children }) {
  return (
    <div>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span color="prism.punctuation">&lt;</span>
      <span color="prism.tag">div</span>
      <span color="prism.punctuation">&gt;</span>
      <span>{children}</span>
      <span color="prism.punctuation">&lt;</span>
      <span color="prims.punctuation">/</span>
      <span color="prism.tag">div</span>
      <span color="prism.punctuation">&gt;</span>
    </div>
  )
}

function Cube({ id, children, ...props }) {
  return (
    <motion.div layoutId={id} {...props}>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "xl",
          w: "auto",
          h: 100,
          rounded: "xl",
          bg: "accent",
        }}
      >
        <motion.span layoutId={`span-${id}`}>{children}</motion.span>
      </div>
    </motion.div>
  )
}
