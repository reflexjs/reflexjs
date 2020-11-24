import { BlockConfig } from "types"

export const blocks: BlockConfig = {
  contentPath: "./library/blocks",
  imagePath: "/images/library",
  extension: "jsx",
  sourceTypes: [
    {
      id: "javascript",
      label: "Block (JavaScript)",
      path: "library/blocks",
      extension: "jsx",
      type: "block",
    },
    {
      id: "javascript-example",
      label: "Usage (JavaScript)",
      path: "library/examples",
      extension: "jsx",
      type: "example",
    },
  ],
  categories: [
    {
      name: "Header",
      id: "header",
      display: "row",
    },
    {
      name: "Hero",
      id: "hero",
      display: "col",
    },
    {
      name: "Features",
      id: "features",
      display: "col",
    },
    {
      name: "Ecommerce",
      id: "ecommerce",
      display: "col",
    },
    {
      name: "Call To Action",
      id: "call-to-action",
      display: "col",
    },
    {
      name: "Forms",
      id: "form",
      display: "col",
    },
    {
      name: "Pricing",
      id: "pricing",
      display: "col",
    },
    {
      name: "Team",
      id: "team",
      display: "col",
    },
    {
      name: "Testimonials",
      id: "testimonials",
      display: "col",
    },
    {
      name: "Cards",
      id: "cards",
      display: "col",
    },
    {
      name: "Posts",
      id: "posts",
      display: "col",
    },
    {
      name: "Videos",
      id: "videos",
      display: "col",
    },
    {
      name: "Footer",
      id: "footer",
      display: "row",
    },
  ],
}
