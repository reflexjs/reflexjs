import { Icon, useColorMode, VisuallyHidden } from "reflexjs"

export interface ModeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ModeToggle({ ...props }: ModeToggleProps) {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      variant="button.icon"
      {...props}
    >
      <Icon name={colorMode === "default" ? "moon" : "sun"} size="5" />
      <VisuallyHidden>Toggle color mode</VisuallyHidden>
    </button>
  )
}
