exports.createSchemaCustomization = async ({ actions }) => {
  actions.createTypes(`
    interface Metatag {
      title: String
      description: String
      pathname: String
      image: String
    }

    type MetatagOG implements Metatag {
      title: String
      description: String
      pathname: String
      image: String
      type: String
    }

    type MetatagTwitter implements Metatag {
      title: String
      description: String
      pathname: String
      image: String
      card: String
    }

    type Metatags implements Metatag {
      title: String
      description: String
      pathname: String
      image: String
      og: MetatagOG
      twitter: MetatagTwitter
    }
  `)
}
