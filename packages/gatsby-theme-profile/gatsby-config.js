const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      "@reflexjs/gatsby-plugin-metatags",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `Profile`,
          path: contentPath,
        },
      },
    ],
  }
}
