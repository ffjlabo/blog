import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Item from "../components/item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExtendLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const frontmatter = node.frontmatter
      const excerpt = node.excerpt
      return (
        <ExtendLink to={frontmatter.path} key={node.id}>
          <Item
            key={node.id}
            title={frontmatter.title}
            abstract={excerpt}
            date={frontmatter.date}
          />
        </ExtendLink>
      )
    })}
  </Layout>
)

// この段階でgraphqlからページデータを取得してItemに反映させる
// ページタイトル、リンク、概要を取得
export const query = graphql`
  query {
    allMarkdownRemark {
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
