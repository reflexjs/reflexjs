const withDefaults = require("./theme-options")
const {
  ensureContentPath,
  mdxResolverPassthrough,
  toSlug,
  stripFrontmater,
  stripPreviewCode,
} = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { blockContentPath, pageContentPath } = withDefaults(themeOptions)

  ensureContentPath(blockContentPath, reporter)
  ensureContentPath(pageContentPath, reporter)
}

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    type LibraryBlockCategory implements Node @dontInfer {
      id: ID!
      name: String!
      slug: String
      weight: Int
      display: String
      blocks: [LibraryBlock] @link(by:"category.slug", from: "slug")
    }

    type LibraryBlock implements Node @dontInfer {
      id: ID!
      name: String!
      code: String
      body: String
      slug: String
      screenshots: JSON
      doc: String
      category: LibraryBlockCategory! @link(by: "slug")
    }

    type LibraryPage implements Node @dontInfer {
      id: ID!
      name: String!
      code: String
      body: String
      slug: String
      screenshots: JSON
    }
  `)
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    LibraryBlock: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
    LibraryPage: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  })
}

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  themeOptions
) => {
  const { blockCategories } = withDefaults(themeOptions)

  blockCategories.map(({ name, display }, index) => {
    actions.createNode({
      id: createNodeId(`LibraryBlockCategory-${name}`),
      name: name,
      display: display || "full",
      slug: toSlug(name),
      weight: index,
      internal: {
        type: `LibraryBlockCategory`,
        contentDigest: createContentDigest(name),
      },
    })
  })
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  if (node.internal.type !== "Mdx") {
    return
  }

  const parent = getNode(node.parent)
  const { name } = parent

  if (parent.sourceInstanceName === "LibraryBlock") {
    const code = stripPreviewCode(stripFrontmater(node.rawBody))

    const nodeType = `LibraryBlock`
    const { blockBasePath, imagePath } = withDefaults(themeOptions)
    const slug = `/${blockBasePath}/${name}`
    const screenshotPath = `${imagePath}/${name}`
    actions.createNode({
      id: createNodeId(`${nodeType}-${parent.id}`),
      parent: node.id,
      name,
      code,
      slug,
      doc: node.frontmatter.doc || "default",
      category: parent.relativeDirectory,
      screenshots: {
        default: `${screenshotPath}.png`,
        dark: `${screenshotPath}-dark.png`,
      },
      internal: {
        type: nodeType,
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }

  if (parent.sourceInstanceName === "LibraryPage") {
    const nodeType = `LibraryPage`
    const { pageBasePath, imagePath } = withDefaults(themeOptions)
    const slug = `/${pageBasePath}/${name}`
    const screenshotPath = `${imagePath}/${name}`
    const code = stripPreviewCode(stripFrontmater(node.rawBody))

    actions.createNode({
      id: createNodeId(`${nodeType}-${parent.id}`),
      parent: node.id,
      name,
      code,
      slug,
      screenshots: {
        default: `${screenshotPath}.png`,
        dark: `${screenshotPath}-dark.png`,
      },
      internal: {
        type: nodeType,
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allLibraryBlock {
        blocks: nodes {
          id
          slug
        }
      }
      allLibraryPage {
        pages: nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error(
      "There was an error fetching library blocks or pages.",
      result.errors
    )
  }

  const { blocks } = result.data.allLibraryBlock
  const { pages } = result.data.allLibraryPage

  if (blocks.length) {
    blocks.forEach((block) => {
      actions.createPage({
        path: block.slug,
        component: require.resolve(`./src/block-template.js`),
        context: {
          ...block,
        },
      })
    })
  }

  if (pages.length) {
    pages.forEach((page) => {
      actions.createPage({
        path: page.slug,
        component: require.resolve(`./src/page-template.js`),
        context: {
          ...page,
        },
      })
    })
  }
}
