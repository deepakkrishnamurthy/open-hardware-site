require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Gravity Machine",
    description: "A gravity machine website",
    siteUrl: process.env.SITE_URL || "https://gravitymachine.org",
  },
  // pathPrefix: "/gravitymachine-website",
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `@reflexjs/gatsby-theme-doc`,
      options: {
        basePath: "gallery",
        contentPath: "content/gallery"
      }
    },
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        global: {
          title: `Scale-free Vertical Tracking Microscopy`,
          description: `A starter template for open hardware project websites.`
        },
        types: [
          `MdxPage`,
          `MdxPost`,
          `MdxDoc`,
          `MdxStyleguide`
        ],
        paths: [
          {
            pathname: `/updates{,/}`,
            defaults: {
              title: `Project Updates`,
              description: `News and updates about the project.`,
            },
          },
          {
            pathname: `/notion{,/**}`,
            defaults: {
              title: `Documentation`,
              description: `Technical documentation about the project.`,
            },
          },
        ],
        debug: false
      }
    },
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        basePath: "/updates",
        postsPerPage: 8
      }
    },
    `@reflexjs/gatsby-theme-styleguide`,
    {
      resolve: `gatsby-source-notionso`,
      options: {
        name: 'Doc',
        rootPageUrl: 'https://www.notion.so/Open-Hardware-Site-Notion-Docs-df9ac3ecdd14491d91253aaa0adadbce',
        debug: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ],
}
