import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
	render() {
		const {
			title,
			content
		} = this.props.data.contentfulBlog
		return (
			<div>
				<h1>{title}</h1>
			{/* use dangerouslySetInnerHTML b/c 'gatsby-transformer-remark' has transformed the markdown to html; now we're putting the <p> tag inside of a <div> tag. */}
			{/* React treats the 'content' in graphql as a string, so dangerouslySetInnerHTML tells react to treat it has html rather than as a string. */}
				<div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
			</div>
		);
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired
}

export default BlogPost;

// 'childMarkdownRemark' comes from the 'gatsby-transformer-remark' plugin
export const pageQuery = graphql`
	query blogPostQuery($slug: String!) {
		contentfulBlog(slug: {eq: $slug}) {
			title
			slug
			content {
        childMarkdownRemark {
          html
        }
      }
		}
	}
`