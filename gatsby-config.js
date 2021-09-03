module.exports = {
  siteMetadata: {
    title: 'AIESEC in Manouba',
    description:
      'We are a youth leadership movement AIESEC is a global platform for young people to develop their leadership...',
    author: 'Local Support Team',
    siteUrl: 'https://lc-medina.netlify.app',
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
        name: 'aiesec-in-manouba-website',
        short_name: 'AIESEC In Manouba Website',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-offline',
  ],
  flags: { PRESERVE_WEBPACK_CACHE: true },
};
