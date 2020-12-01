import * as React from "react"
import { AnimateSharedLayout } from "framer-motion"
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
        if (tick < scenesCount) setTick((tick) => tick + 1)
      }, 1000)

      setTimeout(() => {
        clearInterval(interval)
        setDone(true)
      }, scenesCount * 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [inView])

  React.useEffect(() => {
    setDone(tick === scenesCount)
  }, [tick])

  return (
    <AnimateSharedLayout _transition={null}>
      <p>
        {tick} - {done ? "yes" : "no"}
      </p>
      <div display="grid" col="2" gap="4" my="10">
        <div
          fontFamily="monospace"
          color="text"
          borderWidth="1"
          display="block"
          m="0"
          p="6"
          fontSize="sm"
          overflow="visible"
          whiteSpace="pre-wrap"
          rounded="xl"
        >
          {scenes[tick]?.code}
        </div>
        <div
          position="relative"
          display="flex"
          borderWidth="1"
          alignItems="center"
          justifyContent="center"
          p="6"
          rounded="xl"
          bg="muted"
        >
          {scenes[tick]?.preview}
        </div>
      </div>
      <span ref={ref}></span>
    </AnimateSharedLayout>
  )
}
