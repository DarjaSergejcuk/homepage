module.exports = {
  siteMetadata: {
    title: `Darja Sergejcuk`,
    description: `Darja Sergejcuk personal Website`,
    author: `Darja Sergejcuk`,
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
        name: `Darja Sergejcuk`,
        short_name: `DS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fffff`,
        display: `minimal-ui`,
        icon: `src/images/logoDS.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
