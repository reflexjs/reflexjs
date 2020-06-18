import * as React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./use-sitemetadata"

export const Seo = ({ title, description, image, pathname }) => {
  const site = useSiteMetadata()

  return (
    <Helmet
      defer={false}
      title={title || site.title}
      titleTemplate={`%s | ${site.title}`}
      htmlAttributes={{
        lang: "en",
      }}
    >
      <link rel="canonical" href={`${site.siteUrl}${pathname}`} />
      <meta name="description" content={description || site.description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:title" content={title || site.title} />
      <meta property="og:url" content={`${site.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={site.title} />
    </Helmet>
  )
}
