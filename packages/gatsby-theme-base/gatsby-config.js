module.exports = () => {
  return {
    plugins: [
      `@reflexjs/gatsby-plugin-image`,
      `@reflexjs/gatsby-theme-core`,
      `@reflexjs/gatsby-theme-block`,
      `@reflexjs/gatsby-theme-nav`,
      {
        resolve: `@reflexjs/gatsby-plugin-metatags`,
        options: {
          types: [`Page`],
        },
      },
    ],
  }
}
