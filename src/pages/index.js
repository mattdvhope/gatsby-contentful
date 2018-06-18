import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
console.log(node.publishDate);

  return (
    <li key={node.id}>
      <Link to={node.slug}>{node.title}</Link>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
      <img src={node.featuredImage.resolutions.src} alt=""/>
    </li>
  )
}
const IndexPage = ({data}) => (
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort: {
        fields: [publishDate], order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          slug
          publishDate
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 110)
            }
          }
          featuredImage {
            resolutions(width: 200, height: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`