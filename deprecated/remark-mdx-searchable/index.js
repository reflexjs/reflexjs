const visit = require("unist-util-visit")
const textTypes = ["text", "emphasis", "strong", "inlineCode"]

const flattenNode = (node) => {
  const p = []
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return
    p.push(node.value)
  })
  return p.join(``)
}

module.exports = () => (tree, file) => {
  file.data = []
  let heading = null

  visit(
    tree,
    ({ type }) => {
      return ["heading", "paragraph"].includes(type)
    },
    (node) => {
      if (node.type === "heading") return (heading = flattenNode(node))

      file.data.push({
        heading,
        text: flattenNode(node),
      })
    }
  )
}
