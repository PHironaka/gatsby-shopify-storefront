module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-styled-components',
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

     {
      resolve: 'gatsby-source-shopify2',
      options: {
        shopName: 'pjh-test',
        accessToken: '4c2e1a39502b1e07fbd8e51c63f5629a',
      },
    },
    
  ],
}