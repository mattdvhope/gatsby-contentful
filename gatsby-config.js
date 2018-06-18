module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9yuxh4lib1s8`,
        accessToken: `6c53fde463ad5d48aab03eee27122a9110e69440b68ae704dd808d1286d8395f`
      }
    },
    `gatsby-transformer-remark`, // will detect any text node that has markdown and then parse it (into HTML??)
    `gatsby-plugin-react-helmet`
  ],
}
