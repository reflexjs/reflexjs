const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const {
    blockContentPath,
    pageContentPath,
    imagePath,
    cloudName,
    apiKey,
    apiSecret,
    uploadFolder,
  } = withDefaults(themeOptions)

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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagePath,
        },
      },
      {
        resolve: "gatsby-transformer-cloudinary",
        options: {
          cloudName,
          apiKey,
          apiSecret,
          uploadFolder,
        },
      },
    ],
  }
}
