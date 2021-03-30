const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  mdxResolverPassthrough,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  ensureContentPath(contentPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    interface Block @nodeInterface {
      id: ID!
      src: String
      body: String
      data: JSON
    }

    type MdxBlock implements Node & Block {
      id: ID!
      src: String
      body: String
      data: JSON
    }
  `)
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxBlock: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type !== "Mdx") {
    return
  }

  const nodeType = `MdxBlock`

  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== nodeType) {
    return
  }

  const src = parent.relativePath.replace(/\.[^/.]+$/, "")

  actions.createNode({
    id: createNodeId(`${nodeType}-${parent.id}`),
    src,
    parent: node.id,
    internal: {
      type: nodeType,
      contentDigest: createContentDigest(node.internal.contentDigest),
    },
  })
}
