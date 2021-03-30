const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const {
    contentPath,
    remarkPlugins,
    gatsbyRemarkPlugins,
    mdxRemarkPlugins,
  } = withDefaults(themeOptions)

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-reflexjs`,
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-image`,
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
          name: `MdxPage`,
          path: contentPath,
        },
      },
    ],
  }
}
