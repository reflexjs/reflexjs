import { Scene, TokenLine, TokensGroup } from "@components"
import { motion } from "framer-motion"

export function Preview({ bg, color }) {
  return (
    <motion.div
      layoutId="color-modes.preview"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      sx={{
        bg,
        color,
        p: "6",
        rounded: "lg",
        borderWidth: "1",
      }}
    >
      <h4 variant="heading.h4" color={color}>
        Heading
      </h4>
      <p variant="text" mt="1" color={color}>
        Consectetur maxime similique quae.
      </p>
    </motion.div>
  )
}

export const colorModesScences: Scene[] = [
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    background: "#fff",`} />
        <TokenLine value={`    color: "#111"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<div bg="background" color="text">`} />
        <TokenLine value={`  <h4>Heading</h4>`} />
        <TokenLine value={`  <p>Consectetur maxime similique quae.</p>`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: <Preview bg="#fff" color="#111" />,
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    background: "#fff",`} />
        <TokenLine value={`    color: "#111"`} />
        <TokenLine />
        <TokensGroup>
          <TokenLine value={`    modes: {`} />
          <TokenLine value={`      dark: {`} />
          <TokenLine value={`        background: "#111",`} />
          <TokenLine value={`        color: "#fff"`} />
          <TokenLine value={`      }`} />
          <TokenLine value={`    }`} />
        </TokensGroup>
        <TokenLine value={``} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<div bg="background" color="text">`} />
        <TokenLine value={`  <h4>Heading</h4>`} />
        <TokenLine value={`  <p>Consectetur maxime similique quae.</p>`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: <Preview bg="#111" color="#fff" />,
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    background: "#fff",`} />
        <TokenLine value={`    color: "#111"`} />
        <TokenLine />
        <TokenLine value={`    modes: {`} />
        <TokenLine value={`      dark: {`} />
        <TokenLine value={`        background: "#111",`} />
        <TokenLine value={`        color: "#fff"`} />
        <TokenLine value={`      }`} />
        <TokenLine />
        <TokensGroup>
          <TokenLine value={`      lime: {`} />
          <TokenLine value={`        background: "#a8eb12",`} />
          <TokenLine value={`        color: "#051937"`} />
          <TokenLine value={`      }`} />
        </TokensGroup>
        <TokenLine value={`    }`} />
        <TokenLine value={``} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<div bg="background" color="text">`} />
        <TokenLine value={`  <h4>Heading</h4>`} />
        <TokenLine value={`  <p>Consectetur maxime similique quae.</p>`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: <Preview bg="#a8eb12" color="#051937" />,
  },
]
