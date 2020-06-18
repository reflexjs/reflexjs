const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { blockContentPath, pageContentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      `@reflexjs/gatsby-theme-core`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `LibraryBlock`,
          path: blockContentPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `LibraryPage`,
          path: pageContentPath,
        },
      },
    ],
  }
}
