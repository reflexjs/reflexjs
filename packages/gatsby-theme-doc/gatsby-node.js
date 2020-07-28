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
    interface Doc @nodeInterface {
      id: ID!
      title: String
      excerpt: String
      weight: Int
      slug: String
      body: String
      tableOfContents: JSON
      timeToRead: Int
      data: JSON
    }

    type MdxDoc implements Node & Doc {
      id: ID!
      title: String
      excerpt: String
      weight: Int
      slug: String
      body: String
      tableOfContents: JSON
      timeToRead: Int
      data: JSON
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { basePath } = withDefaults(themeOptions)
  const docNode = generateNodeFromMdx(
    `MdxDoc`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (docNode) {
    const parent = getNode(node.parent)
    const [, weight, name] = parent.name.match(/^(\d+)-(.*)/)
    actions.createNode({
      ...docNode,
      weight: parseInt(weight),
      slug: name === "index" ? `${basePath}` : `${basePath}/${name}`,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxDoc: {
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
      allDoc(sort: { fields: weight }) {
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
    docs.forEach((doc, index) => {
      actions.createPage({
        path: doc.slug,
        component: require.resolve(`./src/doc-template.js`),
        context: {
          id: doc.id,
          prev: index === 0 ? null : docs[index - 1].id,
          next: index === docs.length - 1 ? null : docs[index + 1].id,
        },
      })
    })
  }
}
