import { Icon, useColorMode, VisuallyHidden } from "reflexjs"

export interface ModeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ModeToggle({ ...props }: ModeToggleProps) {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      variant="button.icon"
      {...props}
    >
      <Icon name={colorMode === "light" ? "moon" : "sun"} size="5" />
      <VisuallyHidden>Toggle color mode</VisuallyHidden>
    </button>
  )
}
