module.exports = (themeOptions) => ({
  blockContentPath: "library/blocks",
  blockBasePath: "library/blocks",
  pageContentPath: "library/pages",
  pageBasePath: "library/pages",
  blockCategories: [
    {
      name: "Header",
      display: "full",
    },
    {
      name: "Hero",
      display: "grid",
    },
    {
      name: "Features",
      display: "grid",
    },
    {
      name: "Call To Action",
      display: "grid",
    },
    {
      name: "Forms",
      display: "grid",
    },
    {
      name: "Pricing",
      display: "grid",
    },
    {
      name: "Team",
      display: "grid",
    },
    {
      name: "Testimonials",
      display: "grid",
    },
    {
      name: "Cards",
      display: "grid",
    },
    {
      name: "Footer",
      display: "full",
    },
  ],
  ...themeOptions,
})
