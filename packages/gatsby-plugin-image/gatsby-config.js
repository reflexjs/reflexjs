const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { imagesPath } = withDefaults(themeOptions)

  return {
    plugins: [
      `gatsby-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `Image`,
          path: imagesPath,
        },
      },
    ],
  }
}
