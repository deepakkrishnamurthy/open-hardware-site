require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Open Hardware Site",
    description: "Starter for open hardware project sites.",
    siteUrl: process.env.SITE_URL || "https://ethanjli.github.io",
  },
  pathPrefix: "/open-hardware-site",
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-doc`,
    `@reflexjs/gatsby-theme-post`,
    `@reflexjs/gatsby-theme-styleguide`,
  ],
}
