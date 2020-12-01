import { Scene, TokenLine, TokenProp } from "@components"

export const stylePropsScenes: Scene[] = [
  {
    code: (
      <>
        <TokenLine value={`<button>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: <button>Button</button>,
  },
  {
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenProp name="backgroundColor" value="#06f" />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: <button backgroundColor="#06f">Button</button>,
  },
  {
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenProp name="backgroundColor" value="#06f" />
        <TokenProp name="color" value="#fff" />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button backgroundColor="#06f" color="#fff">
        Button
      </button>
    ),
  },
  {
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenProp name="backgroundColor" value="#06f" />
        <TokenProp name="color" value="#fff" />
        <TokenProp name="padding" value="10px" />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button backgroundColor="#06f" color="#fff" padding="10px">
        Button
      </button>
    ),
  },

  {
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenProp name="backgroundColor" value="#06f" />
        <TokenProp name="color" value="#fff" />
        <TokenProp name="padding" value="10px" />
        <TokenProp name="borderRadius" value="10px" />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button
        backgroundColor="#06f"
        color="#fff"
        padding="10px"
        borderRadius="10px"
      >
        Button
      </button>
    ),
  },
]
