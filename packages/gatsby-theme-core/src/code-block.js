import * as React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { Div } from "@reflexjs/components"
import { CopyButton } from "./copy-button"

export const CodeBlock = React.memo(
  ({ children, className, WrapperComponent = Div, ...props }) => {
    if (!children) {
      return null
    }

    const code = children.trim()
    const language = className?.replace(/language-/, "")

    return (
      <Div position="relative" {...props}>
        <Highlight
          {...defaultProps}
          theme={null}
          code={code}
          language={language}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <WrapperComponent className={className} p="4">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </WrapperComponent>
          )}
        </Highlight>
        <CopyButton value={code} position="absolute" top="4" right="4" />
      </Div>
    )
  }
)
