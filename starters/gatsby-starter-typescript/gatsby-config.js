require(`dotenv`).config()

const theme = require("./src/theme")

module.exports = {
  siteMetadata: {
    title: "Reflexjs",
    description: "Starter for Reflexjs.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-reflexjs`,
      options: {
        theme,
      },
    },
  ],
}
