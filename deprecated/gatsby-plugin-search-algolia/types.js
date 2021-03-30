const defaultFields = {
  title: "title",
  excerpt: "excerpt",
  slug: "slug",
}

// TODO: Make this configurable via plugin options.
module.exports = {
  Page: {
    fields: {
      ...defaultFields,
      image: "image",
    },
  },
  Post: {
    fields: {
      ...defaultFields,
      image: "image",
    },
  },
  Video: {
    fields: {
      ...defaultFields,
    },
  },
  Doc: {
    fields: {
      ...defaultFields,
    },
  },
  Profile: {
    fields: {
      ...defaultFields,
      title: "name",
      image: "picture",
    },
  },
}
