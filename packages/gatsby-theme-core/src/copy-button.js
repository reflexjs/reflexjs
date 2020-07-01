import * as React from "react"
import { Button, Svg, VisuallyHidden } from "@reflexjs/components"
import copy from "copy-to-clipboard"

export const CopyIcon = ({ size, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </Svg>
)

export const CopiedIcon = ({ size, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 6L9 17l-5-5" />
  </Svg>
)

export const CopyButton = ({ value, iconSize = 5, children, ...props }) => {
  const [hasCopied, setHasCopied] = React.useState(false)

  const handleClicked = () => {
    copy(value)
    setHasCopied(true)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      onClick={handleClicked}
      p="0"
      color="white"
      bg="transparent"
      border="0"
      {...props}
    >
      {children ? (
        children
      ) : hasCopied ? (
        <CopiedIcon size={iconSize} />
      ) : (
        <CopyIcon size={iconSize} />
      )}
      <VisuallyHidden>Copy</VisuallyHidden>
    </Button>
  )
}
