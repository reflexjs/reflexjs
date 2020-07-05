const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { imagesPath } = withDefaults(themeOptions)

  return {
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
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
