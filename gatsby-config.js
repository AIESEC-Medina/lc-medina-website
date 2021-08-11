module.exports = {
  siteMetadata: {
    title: 'LC Medina',
    description:
      'We are a youth leadership movement AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth.',
    author: 'Local Support Team',
    siteUrl: 'https://lc-medina.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['./src/shared/styles/index'],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lc-medina-website',
        short_name: 'LC MEDINA Website',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-advanced-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
