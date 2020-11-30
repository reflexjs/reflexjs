import * as React from "react"
import { motion, useAnimation, AnimateSharedLayout } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SxProps } from "reflexjs"

interface ThemeSectionProps {
  styles: SxProps
}

const animatedStyles = {
  backgroundColor: "#ff5874",
  color: "#fff",
  paddingRight: "5px",
  paddingLeft: "5px",
  borderRadius: "5px",
}

export function ThemeSection({ styles }: ThemeSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const Component = "button"

  const initialStyles = {
    py: 4,
    px: 5,
  }
  const styleProps = {
    bg: ["colors.primary", "primary"],
    fontSize: ["fontSizes.lg", "lg"],
    rounded: ["radii.xl", "xl"],
  }

  const animatingThemeKeys = ["colors.primary", "fontSizes.lg", "radii.xl"]

  const theme = {
    colors: {
      primary: "#06f",
      accent: "#fb3",
      text: "#fff",
    },
    fontSizes: {
      sm: "0.875rem",
      lg: "1.125rem",
    },
    radii: {
      xl: "1.125rem",
    },
  }

  const variants = {
    inactive: {
      display: "inline-block",
      opacity: 0,
      width: 0,
      height: 0,
      y: -100,
    },
    active: (index) => ({
      display: "inline-block",
      opacity: 1,
      width: "auto",
      height: "auto",
      y: 0,
      ...animatedStyles,
      transition: {
        ease: "easeInOut",
        delay: 1 + index,
        duration: 0.5,
      },
    }),
  }

  const [sxProps, setSxProps] = React.useState([])
  const [animatingProp, setAnimatingProp] = React.useState(-1)
  const [animatingThemeKey, setAnimatingThemeKey] = React.useState(
    animatingThemeKeys[animatingProp]
  )

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimatingProp(animatingProp + 1)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [inView, animatingProp])

  React.useEffect(() => {
    if (inView) {
      setAnimatingProp(0)
      controls.start("active")
    }
  }, [controls, inView])

  return (
    <AnimateSharedLayout transitionDuration="0.5">
      {animatingProp}
      <div display="grid" col="2" gap="4" my="10">
        <div
          fontFamily="monospace"
          color="text"
          bg="muted"
          display="block"
          m="0"
          p="6"
          overflow="visible"
        >
          <Theme
            animatingThemeKey={animatingThemeKeys[animatingProp]}
            theme={theme}
          />
          <div>&nbsp;</div>
          <div>
            <span>&lt;button</span>
            {Object.keys(styleProps).map((prop, i) => {
              const [themeKey, value] = styleProps[prop]
              return (
                <div key={i}>
                  <span>
                    <span>&nbsp;&nbsp;{prop}=&ldquo;</span>
                    {themeKey === animatingThemeKeys[animatingProp] && (
                      <motion.div
                        layoutId={animatingThemeKeys[i]}
                        custom={i}
                        animate={controls}
                        sx={{
                          display: "inline-block",
                        }}
                        variants={variants}
                      >
                        {value}
                      </motion.div>
                    )}
                    <span>&rdquo;</span>
                  </span>
                </div>
              )
            })}
            <span>&gt;</span>
            <div>
              <span>&nbsp;&nbsp;Button</span>
            </div>
            <span>&lt;/button&gt;</span>
          </div>
        </div>
        <div
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="6"
          rounded="md"
          bg="muted"
        >
          <Component
            {...initialStyles}
            {...sxProps}
            transition="all .5s ease-in"
          >
            Button
          </Component>
        </div>
      </div>
      <span ref={ref}></span>
    </AnimateSharedLayout>
  )
}

function Theme({ theme, animatingThemeKey }) {
  return (
    <div>
      {animatingThemeKey}
      <div>
        <span>const theme = </span>
        <span>&#123;</span>
      </div>
      {Object.keys(theme).map((name) => (
        <>
          <div key={name}>
            <span>&nbsp;&nbsp;</span>
            <span>{name}</span>
            <span>:</span>
            <span>&nbsp;</span>
            <span>&#123;</span>
          </div>
          {Object.keys(theme[name]).map((key, index) => {
            const value = key
            const themeKey = `${name}.${key}`
            return (
              <div key={index}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>
                  {value}
                  <motion.div
                    layoutId={themeKey}
                    sx={{
                      marginLeft: `-${value.length}ch`,
                      display: "inline-block",
                    }}
                  >
                    {value}
                  </motion.div>
                </span>
                <span>:</span>
                <span>&nbsp;</span>
                <span>{`"${theme[name][key]}"`}</span>
                <span>,</span>
              </div>
            )
          })}
          <div>
            <span color="prism.punctuation">&nbsp;&nbsp;&#125;</span>
            <span color="prism.punctuation">,</span>
          </div>
        </>
      ))}
      <div>
        <span color="prism.punctuation">&#125;</span>
      </div>
    </div>
  )
}
