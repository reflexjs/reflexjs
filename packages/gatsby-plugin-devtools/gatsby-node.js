const GATSBY_PLUGIN_REGEX = /^gatsby-*/

exports.onCreateBabelConfig = async ({ actions, store }) => {
  if (process.env.NODE_ENV === "production") return

  // Find possible shadow sources.
  const { flattenedPlugins } = store.getState()
  const sources = flattenedPlugins
    .filter(({ name }) => GATSBY_PLUGIN_REGEX.test(name))
    .map(({ name, resolve }) => {
      return {
        resolve,
        name,
      }
    })

  actions.setBabelPlugin({
    name: require.resolve("./src/babel-plugin-gatsby-shadow"),
    options: {
      sources,
    },
  })
}
