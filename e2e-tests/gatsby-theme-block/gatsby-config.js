module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Reflex site",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-core`,
    },
    {
      resolve: `@reflexjs/gatsby-theme-block`,
    },
  ],
}
