const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  generateNodeFromMdx,
  mdxResolverPassthrough,
} = require("@reflexjs/gatsby-helpers")
const { generateMetatags } = require("@reflexjs/gatsby-plugin-metatags")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath, imagesPath } = withDefaults(themeOptions)

  ensureContentPath(contentPath, reporter)
  ensureContentPath(imagesPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    type Page implements Node @dontInfer {
      id: ID!
      title: String
      excerpt: String
      image: String
      slug: String
      body: String
      metatags: Metatags
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const pageNode = generateNodeFromMdx(
    `Page`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (pageNode) {
    actions.createNode({
      ...pageNode,
      metatags: generateMetatags(pageNode),
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    Page: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allPage {
        pages: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching pages.", result.errors)
  }

  const { pages } = result.data.allPage

  if (pages.length) {
    pages.forEach((page) => {
      actions.createPage({
        path: page.slug,
        component: require.resolve(`./src/page-template.js`),
        context: {
          id: page.id,
        },
      })
    })
  }
}
