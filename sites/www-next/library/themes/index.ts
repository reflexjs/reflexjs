import { Theme } from "reflexjs"
import base from "./base"
import merry from "./merry"

interface ThemeConfig {
  id: string
  name: string
  theme: Theme
}

const themes: ThemeConfig[] = [
  {
    id: "base",
    name: "Base",
    theme: base,
  },
  {
    id: "merry",
    name: "Merry",
    theme: merry,
  },
]

export default themes
