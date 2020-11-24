import * as React from "react"
import createPersistedState from "use-persisted-state"
import { CodeBlock, SourceSelector } from "."
import { CodeBlockProps } from "./code-block"
import { Source } from "types"

interface CodeBrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  sources: Source[]
}

const useSourceId = createPersistedState("preview-source")

export function CodeBrowser({ sources, ...props }: CodeBrowserProps) {
  const [sourceId] = useSourceId("javascript")
  const block = sources.find((source) => source.id === sourceId)
  const example = sources.find((source) => source.id === `${sourceId}-example`)

  return (
    <div {...props}>
      <div variant="container">
        <h2 variant="heading.h2">How to use this block</h2>
        <p variant="text.paragraph">
          1. Copy the block source code and place it in a <code>jsx</code> or{" "}
          <code>tsx</code> file.
        </p>
      </div>
      <SourceWrapper source={block} copyButtonLabel="source" />
      <div variant="container">
        <p variant="text.paragraph">
          2. Copy the example code and add it to your page.
        </p>
      </div>
      <SourceWrapper source={example} copyButtonLabel="example" />
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
        maxH="450px"
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
