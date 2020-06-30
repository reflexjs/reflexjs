exports.generateMetatags = (
  node,
  defaultsOG = { type: "article" },
  defaultsTwitter = { card: "summary_large_image" }
) => {
  const aliases = {
    title: "name",
    image: "picture",
    excerpt: "description",
  }

  Object.keys(aliases).forEach(
    (key) => node[aliases[key]] && (node[key] = node[aliases[key]])
  )

  const { title, excerpt, image, slug, metatags } = node
  const { og, twitter, ...rest } = metatags || {}

  const defaults = {
    title,
    description: excerpt,
    pathname: slug,
    image,
    ...rest,
  }

  return {
    ...defaults,
    og: {
      ...defaultsOG,
      ...defaults,
      ...og,
    },
    twitter: {
      ...defaultsTwitter,
      ...defaults,
      ...twitter,
    },
  }
}
