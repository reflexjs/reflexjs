import { motion } from "framer-motion"

export interface AnimatedTokenProps extends Token {}

const shades = {
  primary: "#06f",
  secondary: "#ee3465",
  accent: "#38a3a5",
  text: "#111",
}

export interface Token {
  name?: string
  adjustPosition?: boolean
  animated?: boolean
  value: string
  shade?: "primary" | "secondary" | "accent" | "text"
}

export interface TokenLineProps {
  value?: string
  suffix?: string
  token?: Token
  tokens?: Token[]
}

export function TokenLine({
  value = " ",
  suffix,
  token = null,
  tokens = [],
}: TokenLineProps) {
  const adjust = value.split(" ").length === 4 ? 12 : 30
  return (
    <div position="relative">
      {value}
      {token && (
        <>
          <AnimatedToken {...token} left={`${adjust}px`} />
          {token.adjustPosition && (
            <AnimatedToken
              {...token}
              name={`${token.name}.keep`}
              left={`${adjust}px`}
            />
          )}
        </>
      )}
      {tokens &&
        tokens.map((token, index) => (
          <span key={index}>
            <AnimatedToken {...token} />
            {index !== tokens.length - 1 ? "." : ""}
          </span>
        ))}
      {suffix}
    </div>
  )
}

export interface TokenPropProps {
  name: string
  value: string
  suffix?: string
}

export function TokenProp({ name, value, suffix }: TokenPropProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
    >
      {`  ${name}="`}
      <motion.span
        sx={{
          color: shades["primary"],
        }}
      >
        {value}
        {suffix && (
          <motion.div
            sx={{
              display: "inline-block",
              color: shades["secondary"],
            }}
            initial={{ x: 100, opacity: 0, width: 0, scale: 8 }}
            animate={{ x: 0, opacity: 1, width: "auto", scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {suffix}
          </motion.div>
        )}
      </motion.span>
      {`"`}
    </motion.div>
  )
}

export function AnimatedToken({
  name,
  adjustPosition = false,
  animated = true,
  shade = "text",
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

export interface TokensGroupProps {
  children: React.ReactNode
}

export function TokensGroup({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}
