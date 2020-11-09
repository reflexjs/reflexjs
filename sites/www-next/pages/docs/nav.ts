import { NavItem } from "../../src/components"

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
    ],
  },
]
