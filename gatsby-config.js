require('dotenv').config({
  path: `.env`,
})

// const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'prismic2-test-gatsby',
        accessToken: 'MC5ZQzVKb0JJQUFDVUFOTHRG.M--_ve-_vShjUxIh77-977-9ZTDvv73vv70k77-977-9VlTvv73vv73vv73vv73vv71a77-9dzfvv71z77-9Rw',
        releaseID: 'YC5JoBIAACgANLtE',
        prismicToolbar: true,
        pages: [{
          type: 'Page',
          match: '/:uid',
          path: '/page-preview',
          component: require.resolve('./src/templates/Pages.js'),
        }],
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
