const fs = require("fs")
const slugify = require("@sindresorhus/slugify")

// Helper to convert string to slug.
// This is just a wrapper for @sindresorhus/slugify for now.
exports.toSlug = slugify

// Helper to humanize a string.
exports.humanize = (value) =>
  value
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_-\s]+/g, " ")
    .replace(/^[a-z]/, (m) => m.toUpperCase())

// Helper to ensure the content path directory exists.
// If not, the directory is created.
exports.ensureContentPath = (contentPath, reporter) => {
  if (fs.existsSync(contentPath)) {
    return
  }

  reporter.warn(`The ${contentPath} directory is missing. Creating it now...`)
  fs.mkdirSync(contentPath, { recursive: true })
}

// Helper to resolve mdx fields.
exports.mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const value = await resolver(mdxNode, args, context, {
    fieldName,
  })

  return value.items ? value.items : value
}

// Helper to generate a node from mdx parent node.
exports.generateNodeFromMdx = (
  nodeType,
  node,
  getNode,
  createNodeId,
  createContentDigest,
  themeOptions,
  withTitle = true,
  withSlug = true
) => {
  if (node.internal.type !== "Mdx") {
    return
  }

  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== nodeType) {
    return
  }

  const nodeData = {
    ...node.frontmatter,
  }

  if (!withTitle) {
    delete nodeData.title
  }

  const { basePath } = themeOptions
  const { relativeDirectory, name } = parent

  // Fallback to the parent name if no title is set.
  if (withTitle && !node.frontmatter.title) {
    nodeData.title = name
  }

  if (withSlug) {
    let slug =
      (node.frontmatter && node.frontmatter.slug) ||
      exports.toSlug(relativeDirectory) + "/" + exports.toSlug(name)
    slug = slug.replace(/^\//, "").replace(/index$/, "")

    nodeData.slug = `${basePath}/${slug}`

    // Allow theme consumers to customize the slug.
    if (themeOptions.slugResolver) {
      nodeData.slug = themeOptions.slugResolver(node, parent, basePath)
    }
  }

  nodeData.data = { ...node.frontmatter, rawBody: node.rawBody }

  return {
    id: createNodeId(`${nodeType}-${node.id}`),
    parent: node.id,
    ...nodeData,
    internal: {
      type: nodeType,
      contentDigest: createContentDigest(node.internal.contentDigest),
    },
  }
}

exports.isRelativeUrl = (url) => !this.isAbsoluteUrl(url)

// See https://github.com/sindresorhus/is-absolute-url
exports.isAbsoluteUrl = (url) => {
  if (typeof url !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``)
  }

  // Don't match Windows paths `c:\`
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false
  }

  // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
  // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)
}

// Remove frontmatter from rawBody.
// TODO: This should probably use mdxjs api or we could
// remove it from the AST.
// This simple regex will do for now.
exports.stripFrontmater = (body) =>
  body.replace(
    /^(---(?:\r?\n(?!--|\s*$).*)*)\s*((?:\r?\n(?!---).*)*\r?\n---)$/m,
    ""
  )

exports.stripPreviewCode = (body) =>
  body.replace(/\n<!-- preview start -->.*<!-- preview end -->\n/gms, "")
