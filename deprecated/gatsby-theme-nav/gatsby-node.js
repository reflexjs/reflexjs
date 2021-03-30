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
    type NavLink implements Node {
      type: String
      value: String
      url: String
      items: [NavLink]
    }

    interface Nav @nodeInterface {
      id: ID!
      name: String
      items: [NavLink]
      data: JSON
    }

    type MdxNav implements Node & Nav {
      id: ID!
      name: String
      items: [NavLink]
      data: JSON
    }
  `)
}

exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const navNode = generateNodeFromMdx(
    `MdxNav`,
    node,
    getNode,
    createNodeId,
    createContentDigest,
    withDefaults(themeOptions),
    false
  )

  if (navNode) {
    const parent = getNode(node.parent)

    actions.createNode({
      ...navNode,
      name: parent.name,
    })
  }
}

exports.createResolvers = async ({ createResolvers }) => {
  createResolvers({
    MdxNav: {
      items: {
        resolve: async (source, args, context, info) => {
          const mdxAST = await mdxResolverPassthrough(`mdxAST`)(
            source,
            args,
            context,
            info
          )
          return transformAST(mdxAST)
        },
      },
    },
  })
}

// Transform the AST into a JS object.
const transformAST = (ast) => {
  const buildList = (node) => {
    if (node.type === "listItem") {
      const [paragraph, list] = node.children
      const linkNode =
        paragraph.type === "jsx" ? paragraph : paragraph.children[0]

      const item = {
        type: linkNode.type,
        items: list && buildList(list),
      }

      switch (linkNode.type) {
        case "link": {
          const [textNode] = linkNode.children
          return {
            value: textNode.value,
            url: linkNode.url,
            ...item,
          }
        }
        case "jsx":
          {
            // TODO: Replace this with MDX parsers.
            const matches = linkNode.value.match(/<Block src="(.*)"/i)
            if (matches) {
              const [, src] = matches
              return {
                ...item,
                value: src,
                type: "block",
              }
            }
          }
          break
        default:
          return {
            value: linkNode.value,
            ...item,
          }
      }
    }

    return (
      node.children &&
      node.children.map((child) => {
        return buildList(child)
      })
    )
  }

  return buildList(ast.children[0])
}
