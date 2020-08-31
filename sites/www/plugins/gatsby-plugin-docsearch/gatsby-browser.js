const initDocSearch = (options) => {
  const { apiKey, indexName, inputSelector, debug } = options

  window.docsearch({
    apiKey,
    indexName,
    inputSelector,
    debug: debug,
  })
}

exports.onInitialClientRender = (_, options) => initDocSearch(options)

exports.onRouteUpdate = (_, options) => initDocSearch(options)
