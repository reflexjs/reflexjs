const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const {
    contentPath,
    imagesPath,
    remarkPlugins,
    gatsbyRemarkPlugins,
    mdxRemarkPlugins,
  } = withDefaults(themeOptions)

  return {
    plugins: [
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-image`,
      "@reflexjs/gatsby-plugin-metatags",
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [...gatsbyRemarkPlugins],
          remarkPlugins: [...mdxRemarkPlugins],
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [...remarkPlugins],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `Page`,
          path: contentPath,
        },
      },
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
