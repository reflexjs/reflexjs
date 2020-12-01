import * as React from "react"
import { AnimateSharedLayout, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export interface Scene {
  theme?: React.ReactNode
  code: React.ReactNode
  preview: React.ReactNode
}

export interface AnimatedScenesProps {
  scenes: Scene[]
}

export function AnimatedScenes({ scenes }: AnimatedScenesProps) {
  const scenesCount = scenes.length - 1
  const [tick, setTick] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })

  React.useEffect(() => {
    if (inView && !done) {
      const interval = setInterval(() => {
        setTick((tick) => (tick < scenesCount ? tick + 1 : scenesCount))
      }, 1000)

      setTimeout(() => {
        clearInterval(interval)
        setDone(true)
      }, (scenesCount + 1) * 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [inView])

  React.useEffect(() => {
    setDone(tick === scenesCount)
  }, [tick])

  const scene = scenes[tick]

  return (
    <AnimateSharedLayout _transition={null}>
      <div display="grid" col="2" gap="4" my="10">
        {scene?.theme ? (
          <CodeWrapper label="Theme">{scene.theme}</CodeWrapper>
        ) : (
          <CodeWrapper label="Code">{scene.code}</CodeWrapper>
        )}
        <div display="inline-grid" gap="4">
          {scene?.theme ? (
            <CodeWrapper label="Code">{scene?.code}</CodeWrapper>
          ) : null}
          <div
            position="relative"
            display="flex"
            borderWidth="1"
            alignItems="center"
            justifyContent="center"
            p="6"
            pt="12"
            rounded="xl"
            bg="muted"
            minH="280"
          >
            <PanelLabel>Preview</PanelLabel>
            <motion.div
              layoutId="scene.preview"
              sx={{
                w: "full",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {scene?.preview}
            </motion.div>
          </div>
        </div>
      </div>
      <span ref={ref}></span>
    </AnimateSharedLayout>
  )
}

export function CodeWrapper({ label, children }) {
  return (
    <div
      fontFamily="monospace"
      color="text"
      borderWidth="1"
      display="block"
      m="0"
      p="6"
      pt="12"
      overflow="visible"
      whiteSpace="pre-wrap"
      rounded="xl"
      position="relative"
      minH="280"
    >
      <PanelLabel>{label}</PanelLabel>
      {children}
    </div>
  )
}

export function PanelLabel({ children }) {
  return children ? (
    <span
      variant="text"
      fontSize="xs"
      m="0"
      color="#65727b"
      position="absolute"
      top="4"
      left="6"
    >
      {children}
    </span>
  ) : null
}
