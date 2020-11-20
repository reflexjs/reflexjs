/** @jsx jsx */
import { jsx } from "reflexjs"
import PrismCodeBlock from "@theme-ui/prism"
import { CopyButton } from "./copy-button"

export const preToCodeBlock = (preProps) => {
  const isMdxPre =
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"

  const { children: codeString, className = "", ...props } = isMdxPre
    ? preProps.children.props
    : preProps

  const match = className.match(/language-([\0-\uFFFF]*)/)

  return {
    codeString: codeString.trim(),
    className,
    language: match != null ? match[1] : "",
    ...props,
  }
}

export const CodeBlock = (preProps) => {
  const props = preToCodeBlock(preProps)
  if (props) {
    const { codeString, title, ...restProps } = props

    return (
      <div position="relative" {...preProps}>
        {title && (
          <div
            bg="prism.background"
            color="prism.file"
            borderBottomWidth="1px"
            borderBottomColor="prism.highlight"
            fontSize="sm"
            roundedTop="md"
            p="4"
            sx={{
              "+ pre": {
                mt: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            }}
          >
            {title}
          </div>
        )}
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
        <CopyButton value={codeString} position="absolute" top="4" right="4" />
      </div>
    )
  }
}
