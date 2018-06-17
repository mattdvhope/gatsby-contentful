const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {

  const  { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog (limit: 1000) {
            edges {
              node {
                id
                slug
                content
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log("in reject")
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
              content: edge.node.content
            }
          })
        })
        return
      })
    )
  });

}