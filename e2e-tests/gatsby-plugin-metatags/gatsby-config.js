module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Reflex site",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-core`,
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        global: {
          title: `Global title`,
          description: `Global description`,
          image: `default-logo.png`,
        },
        types: [
          {
            type: `Page`,
            defaults: {
              title: `Page title`,
              description: `Page description`,
              image: `placeholder.jpg`,
            },
          },
        ],
        paths: [
          {
            pathname: `/examples{,/**}`,
            defaults: {
              description: `Example page description`,
            },
          },
        ],
      },
    },
  ],
}
