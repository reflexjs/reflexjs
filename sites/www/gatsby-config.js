require(`dotenv`).config()
const blockCategories = require("./config/block-categories")

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description:
      "A collection of themes and plugins to help you build Gatsby sites faster.",
    siteUrl: process.env.SITE_URL || "https://reflexjs.org",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-doc`,
    `@reflexjs/gatsby-theme-tutorial`,
    `@reflexjs/gatsby-theme-styleguide`,
    `@reflexjs/gatsby-theme-video`,
    {
      resolve: `@reflexjs/gatsby-theme-video`,
    },
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        pageQuery: `
          query {
            allPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {name: {nin: "Example"}}}}) {
              nodes {
                id
                slug
              }
            }
            allPostTag(sort: {fields: name, order: ASC}) {
              nodes {
                id
                name
                slug
              }
            }
          }
        `,
      },
    },
    {
      resolve: `@reflexjs/gatsby-theme-library`,
      options: {
        blockCategories,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: process.env.CLOUDINARY_UPLOAD_FOLDER,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflex - Supercharge your Gatsby sites.`,
        short_name: `Reflex`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        global: {
          title: `Reflex - Supercharge your Gatsby sites.`,
          description: `A collection of themes and plugins to help you build Gatsby sites faster.`,
          image: `thumbnail.jpg`,
        },
        types: [
          `MdxPage`,
          `MdxPost`,
          `MdxDoc`,
          `MdxTutorial`,
          `MdxStyleguide`,
          `MdxVideo`,
        ],
        paths: [
          {
            pathname: `/library{,/**}`,
            defaults: {
              title: `Blocks library`,
              description: `Accessible components and blocks to build Gatsby sites.`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-docsearch",
      options: {
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        inputSelector: process.env.ALGOLIA_INPUT_SELECTOR,
        debug: process.env.ALGOLIA_DEBUG,
      },
    },
  ],
}
