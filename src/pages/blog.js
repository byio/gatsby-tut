import React from 'react';
import Link from 'gatsby-link';

const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => {
      const { id, frontmatter } = post.node;
      return (
        <div key={id}>
          <h3>{frontmatter.title}</h3>
          <small>Posted by {frontmatter.author} on {frontmatter.date}</small>
          <br/>
          <br/>
          <Link to={frontmatter.path}>Read More</Link>
          <br/>
          <br/>
          <hr/>
        </div>
      );
    })}
  </div>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            author
          }
        }
      }
    }
  }
`;

export default BlogPage;
