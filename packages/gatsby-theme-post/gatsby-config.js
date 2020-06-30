const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      "@reflexjs/gatsby-plugin-metatags",
      "@reflexjs/gatsby-theme-profile",
      "@reflexjs/gatsby-theme-block",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `Post`,
          path: contentPath,
        },
      },
    ],
  }
}
