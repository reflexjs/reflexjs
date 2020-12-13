const { paginate } = require("gatsby-awesome-pagination")
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
    interface Present @nodeInterface {
      id: ID!
      title: String
      url: String
      date: Date @dateformat
      presentId: String
      embedUrl: String
      excerpt: String
      slug: String
      body: String
      thumbnail: String
      featured: Boolean
      published: Boolean
      provider: String
      data: JSON
    }

    type MdxPresent implements Node & Present {
      id: ID!
      title: String
      url: String
      date: Date @dateformat
      presentId: String
      embedUrl: String
      excerpt: String
      slug: String
      body: String
      thumbnail: String
      featured: Boolean
      published: Boolean
      data: JSON
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const presentNode = generateNodeFromMdx(
    `MdxPresent`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (presentNode) {
    // const { providers } = withDefaults(themeOptions)
    // const presentProviders = [...defaultProviders, ...providers].filter(
    //   ({ name }) => name === presentNode.provider
    // )

    // Set presentId and embedUrl
    // if (presentProviders.length) {
    //   const [provider] = presentProviders
    //   presentNode.presentId = provider.presentId(presentNode)
    //   presentNode.embedUrl = provider.embedUrl(presentNode)

    //   if (!presentNode.thumbnail && typeof provider.thumbnail === "function") {
    //     presentNode.thumbnail = provider.thumbnail(presentNode)
    //   }
    // }

    // // Set publish to true by default.
    // if (presentNode.published !== false) presentNode.published = true

    actions.createNode({
      ...presentNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxPresent: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions
  const options = withDefaults(themeOptions)
  const { basePath, presentsPerPage, pageQuery } = options

  const result = await graphql(
    pageQuery ||
      `query {
        allPresent(sort: {fields: date, order: DESC}) {
          presents: nodes {
            id
            slug
            published
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic("There was an error fetching presents.", result.errors)
  }

  const { presents } = result.data.allPresent

  if (presents.length) {
    const publishedPresents = presents.filter(({ published }) => published)
    paginate({
      createPage,
      items: publishedPresents,
      itemsPerPage: presentsPerPage,
      pathPrefix: ({ pageNumber }) =>
        pageNumber === 0 ? basePath : `${basePath}/page`,
      component: require.resolve(`./src/presents-template.js`),
      context: {
        total: publishedPresents.length,
        themeOptions: options,
      },
    })

    presents.forEach((present, index) => {
      actions.createPage({
        path: present.slug,
        component: require.resolve(`./src/present-template.js`),
        context: {
          id: present.id,
          prev: index === 0 ? null : presents[index - 1].id,
          next: index === presents.length - 1 ? null : presents[index + 1].id,
          themeOptions: options,
        },
      })
    })
  }
}
