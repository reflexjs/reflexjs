/** @jsx jsx */
import { jsx } from "reflexjs"
import { Prism } from "./prism"
import { CopyButton } from "./copy-button"

export const preToCodeBlock = (preProps) => {
  const isMdxPre =
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"

  const { children: codeString, className = "", language, ...props } = isMdxPre
    ? preProps.children.props
    : preProps

  const match = className.match(/language-([\0-\uFFFF]*)/)

  return {
    codeString: codeString.trim(),
    className: language ? `language-${language}` : className,
    language: language ? language : match != null ? match[1] : "",
    ...props,
  }
}

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  showLineNumbers?: boolean
  showCopyButton?: boolean
  copyButtonLabel?: string
  language?: string
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
      /*eslint @typescript-eslint/no-unused-vars: "off" */
      showLineNumbers: _,
      className,
      maxH = "none",
      ...restProps
    } = props

    return (
      <div
        position="relative"
        my={4}
        maxH={maxH}
        borderWidth="1"
        borderRadius="md"
        {...restProps}
      >
        {title && (
          <div
            bg="prism.background"
            color="prism.text"
            borderBottomWidth="1px"
            borderBottomColor="prism.highlight"
            fontFamily="monospace"
            fontSize="sm"
            roundedTop="md"
            py="3"
            px={showLineNumbers ? 4 : 6}
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
            top="2"
            right="2"
          />
        )}
      </div>
    )
  }
}
