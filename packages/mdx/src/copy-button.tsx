/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { Icon, VisuallyHidden } from "reflexjs"
import copy from "copy-to-clipboard"

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
  label?: string
  iconSize?: number
  children?: React.ReactNode
}

export const CopyButton = ({
  value,
  label,
  iconSize = 5,
  children,
  ...props
}: CopyButtonProps) => {
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
    <button onClick={handleClicked} variant="button.icon.sm" {...props}>
      {children ? (
        children
      ) : hasCopied ? (
        <React.Fragment>
          <Icon name="check" size={iconSize} />{" "}
          {label && <span ml="2">Copied</span>}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Icon name="clipboard" size={iconSize} />{" "}
          {label && <span ml="2">Copy {label}</span>}
        </React.Fragment>
      )}
      <VisuallyHidden>Copy</VisuallyHidden>
    </button>
  )
}
