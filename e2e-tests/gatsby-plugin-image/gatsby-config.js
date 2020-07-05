module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Reflex site",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [`@reflexjs/gatsby-plugin-image`],
}
