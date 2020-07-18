'use strict'

module.exports = {
  siteMetadata: {
    title: 'masazza-website',
    description: 'Website for massage services',
    keywords: 'gatsbyjs, gatsby, javascript, massages, therapists',
    siteUrl: 'https://massaza.co',
    author: {
      name: 'Dimana Tsvetkova / ever.co',
      url: '',
      email: ''
    }
  },
  plugins: [
    `gatsby-transformer-json`,
   
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `http://www.masazza.co`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://masazza.co', 'https://ever.co'],
      },
    },
  ]
}
