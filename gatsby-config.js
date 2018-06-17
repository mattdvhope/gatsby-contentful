module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `x3octczdva8y`,
        accessToken: `8ef50475ae3bdbcbef188386e10700e83eb422118690827c81d9b4807252ebc2`
      }
    },
    `gatsby-transformer-remark`, // will detect any text node that has markdown and then parse it (into HTML??)
    `gatsby-plugin-react-helmet`
  ],
}
