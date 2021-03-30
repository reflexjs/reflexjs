const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      "@reflexjs/gatsby-theme-profile",
      "@reflexjs/gatsby-theme-block",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `MdxPost`,
          path: contentPath,
        },
      },
    ],
  }
}
