require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Megan Morales",
    description: "Example blog built with Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-post`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Megan Morales`,
        short_name: `Megan Morales`,
        start_url: `/`,
        background_color: `#191924`,
        theme_color: `#fee440`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        debug: process.env.METATAGS_DEBUG,
        global: {
          title: "Megan Morales",
          description: "Wildlife Photographer and Storyteller.",
          image: "default.jpg",
        },
        types: [
          `Page`,
          `Post`,
          {
            type: `PostTag`,
            defaults: {
              title: (tag) => tag.name,
              description: (tag) => `Posts tagged under ${tag.name}.`,
            },
          },
        ],
        paths: [
          {
            pathname: `/blog{,/**}`,
            defaults: {
              title: `The Wildlife Blog`,
            },
          },
        ],
      },
    },
  ],
}
