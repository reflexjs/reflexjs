const fs = require("fs-extra")
const withDefaults = require("./theme-options")
const {
  generateNodeFromMdx,
  mdxResolverPassthrough,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  if (fs.existsSync(contentPath)) {
    return
  }

  // Copy the styleguide page if it does not exists.
  reporter.warn(`The ${contentPath} directory is missing. Creating it now...`)
  fs.mkdirSync(contentPath, { recursive: true })
  fs.copySync(`${__dirname}/styleguide`, contentPath)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    interface Styleguide @nodeInterface {
      id: ID!
      title: String
      weight: Int
      excerpt: String
      slug: String
      body: String
      data: JSON
    }

    type MdxStyleguide implements Node & Styleguide {
      id: ID!
      title: String
      weight: Int
      excerpt: String
      slug: String
      body: String
      data: JSON
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const styleguideNode = generateNodeFromMdx(
    `MdxStyleguide`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (styleguideNode) {
    actions.createNode({
      ...styleguideNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxStyleguide: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStyleguide {
        styleguides: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching styleguides.", result.errors)
  }

  const { styleguides } = result.data.allStyleguide

  if (styleguides.length) {
    styleguides.forEach((styleguide) => {
      actions.createPage({
        path: styleguide.slug,
        component: require.resolve(`./src/styleguide-template.js`),
        context: {
          id: styleguide.id,
        },
      })
    })
  }
}
