const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  mdxResolverPassthrough,
  generateNodeFromMdx,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  ensureContentPath(contentPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    type Tutorial implements Node @dontInfer {
      id: ID!
      title: String
      excerpt: String
      weight: Int
      body: String
      slug: String
    }
  `)
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    Tutorial: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { basePath } = withDefaults(themeOptions)
  const tutorialNode = generateNodeFromMdx(
    `Tutorial`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (tutorialNode) {
    const parent = getNode(node.parent)
    const [, weight, name] = parent.name.match(/^(\d+)-(.*)/)
    actions.createNode({
      ...tutorialNode,
      weight: parseInt(weight),
      slug: name === "index" ? `/${basePath}` : `/${basePath}/${name}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allTutorial(sort: { fields: weight, order: ASC }) {
        tutorials: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching tutorials.", result.errors)
  }

  const { tutorials } = result.data.allTutorial

  if (tutorials.length) {
    tutorials.forEach((tutorial, index) => {
      actions.createPage({
        path: tutorial.slug,
        component: require.resolve(`./src/tutorial-template.js`),
        context: {
          id: tutorial.id,
          prev: index === 0 ? null : tutorials[index - 1].id,
          next: index === tutorials.length - 1 ? null : tutorials[index + 1].id,
        },
      })
    })
  }
}
