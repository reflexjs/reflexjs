const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      `@reflexjs/gatsby-theme-nav`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `MdxDoc`,
          path: contentPath,
        },
      },
    ],
  }
}
