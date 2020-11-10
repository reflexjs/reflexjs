import { NavItem } from "./components"

export default <NavItem[]>[
  {
    title: "Documentation",
    items: [
      {
        title: "Quick Start",
        url: "/docs",
      },
    ],
  },
  {
    title: "Installation",
    items: [
      {
        title: "Next.js",
        url: "/docs/installation/next",
      },
      {
        title: "Gatsby",
        url: "/docs/installation/gatsby",
      },
      {
        title: "Create React App",
        url: "/docs/installation/create-react-app",
      },
    ],
  },
  {
    title: "Theming",
    items: [
      {
        title: "Style props",
        url: "/docs/theming/style-props",
      },
      {
        title: "Responsive Styles",
        url: "/docs/theming/responsive-styles",
      },
      {
        title: "Variants",
        url: "/docs/theming/variants",
      },
      {
        title: "Pseudo props",
        url: "/docs/theming/pseudo-props",
      },
      {
        title: "The sx prop",
        url: "/docs/theming/sx",
      },
      {
        title: "Color modes",
        url: "/docs/theming/color-modes",
      },
    ],
  },
  {
    title: "Hooks",
    items: [
      {
        title: "useTheme",
        url: "/docs/hooks/use-theme",
      },
      {
        title: "useColorMode",
        url: "/docs/hooks/use-color-mode",
      },
    ],
  },
]
