import { Prism, CopyButton } from "."

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

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  showLineNumbers?: boolean
  showCopyButton?: boolean
  copyButtonLabel?: string
}

export function CodeBlock({
  showCopyButton = true,
  copyButtonLabel,
  showLineNumbers,
  ...preProps
}: CodeBlockProps) {
  const props = preToCodeBlock(preProps)
  if (props) {
    const {
      codeString,
      title,
      className,
      language,
      maxH = "none",
      ...restProps
    } = props

    return (
      <div position="relative" my={4} maxH={maxH} {...restProps}>
        {title && (
          <div
            bg="prism.background"
            color="prism.file"
            borderBottomWidth="1px"
            borderBottomColor="prism.highlight"
            fontFamily="monospace"
            fontSize="xs"
            roundedTop="md"
            py="4"
            px="6"
            sx={{
              "+ div > pre": {
                my: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            }}
          >
            {title}
          </div>
        )}
        <div maxH={title ? maxH - 50 : maxH} overflow="scroll">
          <Prism
            showLineNumbers={showLineNumbers ? true : false}
            className={className}
          >
            {codeString}
          </Prism>
        </div>
        {showCopyButton && (
          <CopyButton
            value={codeString}
            label={copyButtonLabel}
            position="absolute"
            top="4"
            right="4"
          />
        )}
      </div>
    )
  }
}
