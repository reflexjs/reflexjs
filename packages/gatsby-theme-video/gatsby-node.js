const { paginate } = require("gatsby-awesome-pagination")
const withDefaults = require("./theme-options")
const defaultProviders = require("./providers")

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
    interface Video @nodeInterface {
      id: ID!
      title: String
      url: String
      date: Date @dateformat
      videoId: String
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

    type MdxVideo implements Node & Video {
      id: ID!
      title: String
      url: String
      date: Date @dateformat
      videoId: String
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
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const videoNode = generateNodeFromMdx(
    `MdxVideo`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions)
  )

  if (videoNode) {
    const { providers } = withDefaults(themeOptions)
    const videoProviders = [...defaultProviders, ...providers].filter(
      ({ name }) => name === videoNode.provider
    )

    // Set videoId and embedUrl
    if (videoProviders.length) {
      const [provider] = videoProviders
      videoNode.videoId = provider?.videoId(videoNode.url)
      videoNode.embedUrl = provider?.embedUrl(videoNode.videoId)

      if (!videoNode.thumbnail && typeof provider.thumbnail === "function") {
        videoNode.thumbnail = provider?.thumbnail(videoNode.videoId)
      }
    }

    actions.createNode({
      ...videoNode,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxVideo: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions
  const options = withDefaults(themeOptions)
  const { basePath, videosPerPage, pageQuery } = options

  const result = await graphql(
    pageQuery ||
      `query {
        allVideo(filter: {published: {eq: true}}, sort: { fields: title, order: ASC }) {
          videos: nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic("There was an error fetching videos.", result.errors)
  }

  const { videos } = result.data.allVideo

  if (videos.length) {
    paginate({
      createPage,
      items: videos,
      itemsPerPage: videosPerPage,
      pathPrefix: ({ pageNumber }) =>
        pageNumber === 0 ? basePath : `${basePath}/page`,
      component: require.resolve(`./src/videos-template.js`),
      context: {
        total: videos.length,
        themeOptions: options,
      },
    })

    videos.forEach((video) => {
      actions.createPage({
        path: video.slug,
        component: require.resolve(`./src/video-template.js`),
        context: {
          id: video.id,
        },
      })
    })
  }
}
