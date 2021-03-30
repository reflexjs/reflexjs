const merge = require("deepmerge")

exports.generateMetatags = (node, defaults = {}, overrides = {}) => {
  const _node = { ...node }

  delete _node.id

  // TODO: Make this configurable.
  const aliases = {
    title: ["name"],
    image: ["picture", "thumbnail"],
    description: ["excerpt"],
    pathname: ["slug"],
  }

  Object.keys(aliases).forEach((key) =>
    aliases[key].forEach((alias) => _node[alias] && (_node[key] = _node[alias]))
  )

  const { metatags, ...restNode } = _node
  const { og, twitter, ...restMetatags } = metatags || {}
  const { og: defaultsOg, twitter: defaultsTwitter, ...restDefaults } = defaults
  const {
    og: overriddesOg,
    twitter: overriddesTwitter,
    ...restOverrides
  } = overrides

  defaults = merge.all([restDefaults, restNode, restMetatags])

  return merge(
    {
      og: {
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
      },
    },
    {
      ...defaults,
      ...restOverrides,
      og: {
        ...defaultsOg,
        ...defaults,
        ...og,
        ...overrides,
        ...overriddesOg,
      },
      twitter: {
        ...defaultsTwitter,
        ...defaults,
        ...twitter,
        ...overrides,
        ...overriddesTwitter,
      },
    }
  )
}
