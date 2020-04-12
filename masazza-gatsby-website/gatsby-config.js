'use strict'

module.exports = {
  siteMetadata: {
    navLinks: ['about us', 'trust and safety', 'pricing', 'partner saloons', 'therapists'],
    createAccountBtn: 'Create account',
    becomeTherapistBtn: 'Become Therapist',
    isOppened: false,
    // MassageTypeData: './src/content/MassageCardsData.json',
    // title: 'gatsby-starter-typescript-plus',
    description: '',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
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
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
