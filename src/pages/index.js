import React from "react"
import { graphql } from "gatsby"
import Item from "../components/item"
import Layout from "../components/layout"
import Link from "../components/link"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const frontmatter = node.frontmatter
      const excerpt = node.excerpt
      return (
        <Link to={frontmatter.path} key={node.id}>
          <Item
            key={node.id}
            title={frontmatter.title}
            abstract={excerpt}
            date={frontmatter.date}
          />
        </Link>
      )
    })}
  </Layout>
)

// この段階でgraphqlからページデータを取得してItemに反映させる
// ページタイトル、リンク、概要を取得
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
