const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      "@reflexjs/gatsby-theme-profile",
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
