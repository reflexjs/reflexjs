module.exports = (options) => ({
  appId: null,
  apiKey: null,
  indexName: null,
  types: [],
  query: "", // optional: use this to overwrite the default query.
  ...options,
})
