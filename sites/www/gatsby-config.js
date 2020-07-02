require(`dotenv`).config()

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
        blockCategories: [
          {
            name: "Header",
          },
          {
            name: "Hero",
          },
          {
            name: "Features",
          },
          {
            name: "Call To Action",
          },
          {
            name: "Forms",
          },
          {
            name: "Pricing",
          },
          {
            name: "Team",
          },
          {
            name: "Testimonials",
          },
          {
            name: "Cards",
          },
          {
            name: "Footer",
          },
          {
            name: "Posts",
            display: "grid",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflex`,
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
          title: `Reflex`,
          description: `A collection of themes and plugins to help you build Gatsby sites faster.`,
          image: `reflex-blocks.jpg`,
        },
        types: [`Page`, `Post`, `Doc`, `Tutorial`, `Styleguide`],
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
  ],
}
