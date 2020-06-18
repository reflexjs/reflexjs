const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  generateNodeFromMdx,
  mdxResolverPassthrough,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  ensureContentPath(contentPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    type Doc implements Node @dontInfer {
      id: ID!
      title: String
      excerpt: String
      slug: String
      body: String
      tableOfContents: JSON
      timeToRead: Int
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const docNode = generateNodeFromMdx(
    `Doc`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (docNode) {
    actions.createNode({
      ...docNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    Doc: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
      tableOfContents: {
        resolve: mdxResolverPassthrough(`tableOfContents`),
      },
      timeToRead: {
        resolve: mdxResolverPassthrough(`timeToRead`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDoc {
        docs: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching docs.", result.errors)
  }

  const { docs } = result.data.allDoc

  if (docs.length) {
    docs.forEach((doc) => {
      actions.createPage({
        path: doc.slug,
        component: require.resolve(`./src/doc-template.js`),
        context: {
          id: doc.id,
        },
      })
    })
  }
}
