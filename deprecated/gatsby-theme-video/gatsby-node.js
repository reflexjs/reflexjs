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
      videoNode.videoId = provider.videoId(videoNode)
      videoNode.embedUrl = provider.embedUrl(videoNode)

      if (!videoNode.thumbnail && typeof provider.thumbnail === "function") {
        videoNode.thumbnail = provider.thumbnail(videoNode)
      }
    }

    // Set publish to true by default.
    if (videoNode.published !== false) videoNode.published = true

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
        allVideo(sort: {fields: date, order: DESC}) {
          videos: nodes {
            id
            slug
            published
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
    const publishedVideos = videos.filter(({ published }) => published)
    paginate({
      createPage,
      items: publishedVideos,
      itemsPerPage: videosPerPage,
      pathPrefix: ({ pageNumber }) =>
        pageNumber === 0 ? basePath : `${basePath}/page`,
      component: require.resolve(`./src/videos-template.js`),
      context: {
        total: publishedVideos.length,
        themeOptions: options,
      },
    })

    videos.forEach((video, index) => {
      actions.createPage({
        path: video.slug,
        component: require.resolve(`./src/video-template.js`),
        context: {
          id: video.id,
          prev: index === 0 ? null : videos[index - 1].id,
          next: index === videos.length - 1 ? null : videos[index + 1].id,
          themeOptions: options,
        },
      })
    })
  }
}
