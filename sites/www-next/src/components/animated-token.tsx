import { motion } from "framer-motion"

export interface AnimatedTokenProps extends Token {}

const shades = ["#06f", "#38a3a5", "#f72585"]

export interface Token {
  name?: string
  adjustPosition?: boolean
  animated?: boolean
  value: string
  shade?: 0 | 1 | 2 | 3
}

export interface TokenLineProps {
  value?: string
  suffix?: string
  token?: Token
}

export function TokenLine({
  value = " ",
  suffix,
  token = null,
}: TokenLineProps) {
  return (
    <div position="relative">
      {value}
      {token && (
        <>
          <AnimatedToken
            {...token}
            left={`${value.split(/\s+/gi).length + 0.25}ch`}
          />
          {token.adjustPosition && (
            <AnimatedToken
              {...token}
              name={`${token.name}.keep`}
              left={`${value.split(/\s+/gi).length + 0.25}ch`}
            />
          )}
        </>
      )}
      {suffix}
    </div>
  )
}

export function AnimatedToken({
  name,
  adjustPosition = false,
  animated = true,
  shade = 0,
  value,
  ...props
}: AnimatedTokenProps) {
  const sx = {
    display: "inline-block",
    bg: shades[shade],
    color: "#fff",
    px: 1,
    rounded: "md",
    opacity: animated ? 0 : 1,
    position: adjustPosition ? `absolute` : `static`,
    ...props,
  }

  return animated ? (
    <motion.div
      layoutId={name}
      sx={sx}
      animate={{
        opacity: 1,
      }}
    >
      {value}
    </motion.div>
  ) : (
    <div sx={sx}>{value}</div>
  )
}
