import { graphql } from "gatsby"

export const fragment = graphql`
  fragment SiteMetadataFragment on SiteSiteMetadata {
    title
    description
    siteUrl
  }
`
