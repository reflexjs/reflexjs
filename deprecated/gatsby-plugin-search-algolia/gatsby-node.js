// const withDefaults = require("./options")

// exports.onCreateNode = ({ node, actions, store }, options) => {
//   if (
//     node.internal.type !== "SitePlugin" ||
//     node.name !== "@reflexjs/gatsby-plugin-search-algolia"
//   ) {
//     return
//   }

//   const { createNode, deleteNode } = actions
//   const { appId, apiKey, indexName, types } = withDefaults(options)
//   debugger

//   deleteNode(node)

//   // console.log(node)
// }
