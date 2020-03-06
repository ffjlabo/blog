/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve("src", "components", "blog-post.js"),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
}
