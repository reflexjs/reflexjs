exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
      type ReflexjsConfig implements Node {
        theme: JSON,
      }
    `)
}

exports.sourceNodes = ({ actions, createContentDigest }, { theme = {} }) => {
  const { createNode } = actions

  const config = {
    theme,
  }

  createNode({
    ...config,
    id: `gatsby-plugin-reflexjs-config`,
    parent: null,
    children: [],
    internal: {
      type: `ReflexjsConfig`,
      contentDigest: createContentDigest(config),
      content: JSON.stringify(config),
    },
  })
}
