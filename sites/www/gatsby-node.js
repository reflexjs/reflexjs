exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== "Page") {
    return
  }

  createNodeField({
    node,
    name: "chrome",
    value: node.chrome ? node.chrome : true,
  })
}
