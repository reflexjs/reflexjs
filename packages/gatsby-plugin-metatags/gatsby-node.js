const merge = require("deepmerge")
const { generateMetatags } = require("./generate-metatags")
const withDefaults = require("./options")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    interface Metatag {
      title: String
      description: String
      pathname: String
      image: String
    }

    type MetatagOG implements Metatag {
      title: String
      description: String
      pathname: String
      image: String
      type: String
    }

    type MetatagTwitter implements Metatag {
      title: String
      description: String
      pathname: String
      image: String
      card: String
    }

    type Metatags implements Node @dontInfer {
      id: ID!
      title: String
      description: String
      pathname: String
      image: String
      og: MetatagOG
      twitter: MetatagTwitter
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  options
) => {
  const { types } = withDefaults(options)
  const nodeTypes = types.map((type) =>
    typeof type === "string" ? type : type.type
  )

  if (!nodeTypes.includes(node.internal.type)) {
    return
  }

  let defaults = {}

  const [typeOptions] = types.filter(
    (type) => typeof type === "object" && type.type === node.internal.type
  )

  // Apply defaults from options.
  if (typeOptions && typeOptions.defaults) {
    defaults = merge(defaults, applyDefaults(node, typeOptions.defaults))
  }

  // Find metatags from the node MDX parent to use as overrides.
  const parent = getNode(node.parent)
  if (parent && parent.frontmatter && parent.frontmatter.metatags) {
    node = {
      ...node,
      metatags: parent.frontmatter.metatags,
    }
  }

  const data = generateMetatags(node, defaults)
  const nodeType = "Metatags"

  actions.createNode({
    id: createNodeId(`${nodeType}-${data.pathname}`),
    ...data,
    internal: {
      type: nodeType,
      contentDigest: createContentDigest(node.internal.contentDigest),
    },
  })
}

// Helper to apply defaults from options to node.
const applyDefaults = (node, defaults) => {
  Object.keys(defaults).forEach((key) => {
    if (typeof defaults[key] === "object") {
      defaults[key] = applyDefaults(node, defaults[key])
    }

    // Allow defaults to use callbacks.
    if (typeof defaults[key] === "function") {
      defaults[key] = defaults[key](node)
    }
  })

  return defaults
}

// exports.onCreatePage = ({ page, actions }, themeOptions) => {
//   const { metatags } = withDefaults(themeOptions)
//   console.log(page)
//   // console.log(page.path)
// }
