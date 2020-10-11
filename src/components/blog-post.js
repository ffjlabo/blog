import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Post from "./post"
import SEO from "./seo"

export default ({ data }) => {
  const node = data.markdownRemark
  return (
    <Layout>
      <SEO title={node.frontmatter.title} description={node.excerpt} />
      <Post title={node.frontmatter.title} html={node.html} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        date
      }
      excerpt
      html
    }
  }
`
