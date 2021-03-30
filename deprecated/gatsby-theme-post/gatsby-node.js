const { paginate } = require("gatsby-awesome-pagination")
const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  generateNodeFromMdx,
  mdxResolverPassthrough,
  toSlug,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  ensureContentPath(contentPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    interface Post @nodeInterface {
      id: ID!
      title: String
      excerpt: String
      date: Date @dateformat
      slug: String
      body: String
      image: String
      caption: String
      timeToRead: Int
      featured: Boolean
      published: Boolean
      author: Profile @link(by: "name")
      tags: [PostTag] @link(by: "name")
      data: JSON
    }

    type MdxPost implements Node & Post {
      id: ID!
      title: String
      excerpt: String
      date: Date @dateformat
      slug: String
      body: String
      image: String
      caption: String
      timeToRead: Int
      featured: Boolean
      published: Boolean
      author: Profile @link(by: "name")
      tags: [PostTag] @link(by: "name")
      data: JSON
    }

    interface PostTag @nodeInterface {
      id: ID!
      name: String
      slug: String
    }

    type MdxPostTag implements Node & PostTag {
      id: ID!
      name: String
      slug: String
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest, getNodesByType },
  themeOptions
) => {
  const { basePath } = withDefaults(themeOptions)

  const postNode = generateNodeFromMdx(
    `MdxPost`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (postNode) {
    // Create tags.
    const { tags } = postNode

    if (tags) {
      const nodeType = "MdxPostTag"
      tags.forEach((name) => {
        const tagNode = {
          name,
          slug: `${basePath}/tags/${toSlug(name)}`,
        }

        actions.createNode({
          id: createNodeId(`${nodeType}-${name}`),
          ...tagNode,
          internal: {
            type: nodeType,
            contentDigest: createContentDigest(`${nodeType}-${name}`),
          },
        })
      })
    }

    // If no author is set and only one profile is available,
    // set it as the default author.
    // TODO: Refactor this to get Profile nodes.
    const profiles = getNodesByType("MdxProfile")
    if (!postNode.author && profiles.length === 1) {
      postNode.author = profiles[0].name
    }

    // Set publish to true by default.
    if (postNode.published !== false) postNode.published = true

    actions.createNode({
      ...postNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxPost: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
      timeToRead: {
        resolve: mdxResolverPassthrough(`timeToRead`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions
  const options = withDefaults(themeOptions)
  const { basePath, postsPerPage, pageQuery } = options

  const result = await graphql(
    pageQuery ||
      `query {
        allPost(sort: { fields: date, order: DESC }) {
          nodes {
            id
            slug
            published
          }
        }
        allPostTag(sort: { fields: name, order: ASC }) {
          nodes {
            id
            name
            slug
          }
        }
      }`
  )

  if (result.errors) {
    reporter.error("There was an error fetching blog posts.", result.errors)
  }

  const posts = result.data.allPost.nodes
  const tags = result.data.allPostTag.nodes

  if (posts.length) {
    const publishedPosts = posts.filter(({ published }) => published)
    const paginatedBasePath = basePath === `` ? `/` : `${basePath}/`
    paginate({
      createPage,
      items: publishedPosts,
      itemsPerPage: postsPerPage,
      pathPrefix: ({ pageNumber }) =>
        pageNumber === 0 ? paginatedBasePath : `${paginatedBasePath}page`,
      component: require.resolve(`./src/posts-template.js`),
      context: {
        total: publishedPosts.length,
        themeOptions: options,
      },
    })

    posts.forEach((node, index) => {
      actions.createPage({
        path: node.slug,
        component: require.resolve(`./src/post-template.js`),
        context: {
          id: node.id,
          prev: index === 0 ? null : posts[index - 1].id,
          next: index === posts.length - 1 ? null : posts[index + 1].id,
          themeOptions: options,
        },
      })
    })

    if (tags.length) {
      tags.forEach((tag) => {
        actions.createPage({
          path: tag.slug,
          component: require.resolve(`./src/tag-template.js`),
          context: {
            name: tag.name,
            themeOptions: options,
          },
        })
      })
    }
  }
}
