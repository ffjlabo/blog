import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const node = data.markdownRemark
  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
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
