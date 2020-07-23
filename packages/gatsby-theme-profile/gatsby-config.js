const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `MdxProfile`,
          path: contentPath,
        },
      },
    ],
  }
}
