import { Scene, TokenLine, TokenProp } from "@components"
import { motion } from "framer-motion"

export const responsiveScenes: Scene[] = [
  {
    code: (
      <>
        <TokenLine value={`<div`} />
        <TokenProp name="display" value="grid" />
        <TokenProp name="col" value="1" />
        <TokenProp name="gap" value="4" />
        <TokenLine value={`>`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: (
      <div display="grid" w="full" col="1" gap="4">
        <Cube id="one">One</Cube>
        <Cube id="two">Two</Cube>
        <Cube id="three">Three</Cube>
        <Cube id="four">Four</Cube>
      </div>
    ),
  },
  {
    code: (
      <>
        <TokenLine value={`<div`} />
        <TokenProp name="display" value="grid" />
        <TokenProp name="col" value="1" suffix="|2" />
        <TokenProp name="gap" value="4" suffix="|6" />
        <TokenLine value={`>`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: (
      <div display="grid" w="full" col="2" gap="6">
        <Cube id="one">One</Cube>
        <Cube id="two">Two</Cube>
        <Cube id="three">Three</Cube>
        <Cube id="four">Four</Cube>
      </div>
    ),
  },

  {
    code: (
      <>
        <TokenLine value={`<div`} />
        <TokenProp name="display" value="grid" />
        <TokenProp name="col" value="1|2" />
        <TokenProp name="gap" value="4|6" />
        <TokenLine value={`>`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: (
      <div display="grid" w="full" col="2" gap="6">
        <Cube id="one">One</Cube>
        <Cube id="two">Two</Cube>
        <Cube id="three">Three</Cube>
        <Cube id="four">Four</Cube>
      </div>
    ),
  },
  {
    code: (
      <>
        <TokenLine value={`<div`} />
        <TokenProp name="display" value="grid" />
        <TokenProp name="col" value="1|2" suffix="|4" />
        <TokenProp name="gap" value="4|6" suffix="|2" />
        <TokenLine value={`>`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`  <Cube />`} />
        <TokenLine value={`</div>`} />
      </>
    ),
    preview: (
      <div display="grid" w="full" col="4" gap="2">
        <Cube id="one">One</Cube>
        <Cube id="two">Two</Cube>
        <Cube id="three">Three</Cube>
        <Cube id="four">Four</Cube>
      </div>
    ),
  },
]

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
          bg: "primary",
        }}
      >
        <motion.span layoutId={`span-${id}`}>{children}</motion.span>
      </div>
    </motion.div>
  )
}
