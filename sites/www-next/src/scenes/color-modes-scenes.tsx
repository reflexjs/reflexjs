import { Scene, TokenLine, TokensGroup } from "@components"
import { motion } from "framer-motion"

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
    preview: (
      <div bg="white" color="#111" p="6" rounded="lg" borderWidth="1">
        <h4 variant="heading.h4">Heading</h4>
        <p variant="text" mt="1">
          Consectetur maxime similique quae.
        </p>
      </div>
    ),
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
    preview: (
      <div bg="#111" color="#fff" p="6" rounded="lg" borderWidth="1">
        <h4 variant="heading.h4" color="#fff">
          Heading
        </h4>
        <p variant="text" mt="1" color="#fff">
          Consectetur maxime similique quae.
        </p>
      </div>
    ),
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
    preview: (
      <div bg="#a8eb12" color="#051937" p="6" rounded="lg" borderWidth="1">
        <h4 variant="heading.h4" color="#051937">
          Heading
        </h4>
        <p variant="text" mt="1" color="#051937">
          Consectetur maxime similique quae.
        </p>
      </div>
    ),
  },
]
