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
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        debug: true,
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
        global: {
          title: "Megan",
          description: "Wildlife Photographer and Storyteller.",
          image: "logo.png",
        },
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
