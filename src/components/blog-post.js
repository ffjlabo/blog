import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Post from "./post"

export default ({ data }) => {
  const node = data.markdownRemark
  return (
    <Layout>
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
      html
    }
  }
`
