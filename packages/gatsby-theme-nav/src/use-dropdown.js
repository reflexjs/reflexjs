import * as React from "react"

const onEscapeKeyPress = (callback) => ({ keyCode }) =>
  keyCode === 27 && callback()

export const useDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = React.useRef(null)

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])

  React.useEffect(() => {
    const onMouseDown = ({ target }) => {
      if (!ref.current || ref.current.contains(target)) {
        return
      }

      close()
    }

    const onKeydown = onEscapeKeyPress(close)

    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("keydown", onKeydown)

    return () => {
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("keydown", onKeydown)
    }
  }, [close])

  return [ref, isOpen, open, close]
}
