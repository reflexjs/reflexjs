require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for the Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
}
