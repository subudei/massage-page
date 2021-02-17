module.exports = {
  siteMetadata: {
    title: `Massage Studio`,
    description: `Masage Room u Krusevcu, Obiliceva 94`,
    siteUrl: `https://masazanevenaks.com`,
    author: {
      name: `Milan Cirkovic`,
      summary: `React JS developer, and Computer Science enthusiast.`,
    },
    keywords: `masaže masaža krusevac maderoterapija relax anticelulit terapeutska masiranje`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, //This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
