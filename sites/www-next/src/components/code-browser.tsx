import * as React from "react"
import createPersistedState from "use-persisted-state"
import { CodeBlock, CodeBlockProps } from "."
import { Block, Source } from "types"

interface CodeBrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  block: Block
}

const useSourceId = createPersistedState("preview-source")

export function CodeBrowser({ block, ...props }: CodeBrowserProps) {
  const { sources } = block
  const [sourceId] = useSourceId("javascript")
  const blockSource = sources.find((source) => source.id === sourceId)
  const exampleSource = sources.find(
    (source) => source.id === `${sourceId}-example`
  )

  return (
    <div variant="container" {...props}>
      <h2 variant="heading.h2" fontSize="3xl">
        How to use this block
      </h2>
      <p variant="text.paragraph">
        1. Copy the block source code and place it in a{" "}
        <code>src/components/{block.id}.jsx</code> file.
      </p>
      <SourceWrapper source={blockSource} copyButtonLabel="source" />
      <p variant="text.paragraph">
        2. Copy the example code below and add it to your page.
      </p>
      <SourceWrapper source={exampleSource} copyButtonLabel="example" />
    </div>
  )
}

export interface SourceWrapperProps extends CodeBlockProps {
  source?: Source
}

export function SourceWrapper({ source, ...props }: SourceWrapperProps) {
  return (
    <div
      maxW={(theme) => theme.container.maxWidth + 120}
      mx="auto"
      mb="10"
      overflow="hidden"
    >
      <CodeBlock
        className="language-jsx"
        title={source.label}
        showLineNumbers={true}
        maxH="450"
        sx={{
          pre: {
            fontSize: "sm",
            lineHeight: "normal",
          },
        }}
        {...props}
      >
        {source.code}
      </CodeBlock>
    </div>
  )
}
