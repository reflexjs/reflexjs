import { useStaticQuery, graphql } from "gatsby"

export const usePluginOptions = () => {
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@reflexjs/gatsby-plugin-search-algolia" }) {
        pluginOptions {
          adminKey
          appId
          searchKey
          indexName
        }
      }
    }
  `)

  return data?.sitePlugin?.pluginOptions
}
