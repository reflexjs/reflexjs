import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      reflexjsConfig(id: { eq: "gatsby-plugin-reflexjs-config" }) {
        theme
      }
    }
  `)

  return data.reflexjsConfig
}
