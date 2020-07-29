require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-video",
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        debug: process.env.METATAGS_DEBUG,
        global: {
          title: `Reflex - Video Example`,
          description: `Example video pages built with Reflex and Gatsby.`,
          image: `thumbnail.jpg`,
        },
        types: [`MdxPage`, `MdxVideo`],
        paths: [
          {
            pathname: `/videos{,/**}`,
            defaults: {
              title: `Videos`,
              description: `Example video pages built with Reflex and Gatsby.`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        title: `Reflex - Video Example`,
        short_name: `Reflex`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
