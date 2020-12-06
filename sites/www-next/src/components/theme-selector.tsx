import { Selector } from "."
import { SelectorProps } from "./selector"

export interface Theme {
  id: string
  name: string
}

export interface ThemeSelectorProps extends SelectorProps {
  themes: Theme[]
  defaultTheme: string
  handleChange: (id: string) => void
}

export function ThemeSelector({
  themes,
  defaultTheme,
  handleChange,
  ...props
}: ThemeSelectorProps) {
  return (
    <Selector {...props}>
      <label htmlFor="theme-selector">Select theme</label>
      <select
        id="theme-selector"
        variant="sm"
        value={defaultTheme}
        onChange={(e) => {
          handleChange(e.currentTarget.value)
        }}
      >
        {themes.map((theme) => (
          <option value={theme.id} key={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </Selector>
  )
}
