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
    interface Profile @nodeInterface {
      id: ID!
      name: String
      excerpt: String
      slug: String
      body: String
      picture: String
      links: [ProfileLink]
      data: JSON
    }

    type MdxProfile implements Node & Profile {
      id: ID!
      name: String
      excerpt: String
      slug: String
      body: String
      picture: String
      links: [ProfileLink]
      data: JSON
    }
    
    type ProfileLink implements Node{
      title: String
      url: String
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const profileNode = generateNodeFromMdx(
    `MdxProfile`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (profileNode) {
    delete profileNode.title

    actions.createNode({
      ...profileNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxProfile: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allProfile(sort: { fields: name, order: ASC }) {
        profiles: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("There was an error fetching profiles.", result.errors)
  }

  const { profiles } = result.data.allProfile

  if (profiles.length) {
    profiles.forEach((profile) => {
      actions.createPage({
        path: profile.slug,
        component: require.resolve(`./src/profile-template.js`),
        context: {
          id: profile.id,
        },
      })
    })
  }
}
