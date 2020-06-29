import * as React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./use-sitemetadata"

export const Seo = ({ title, description, image, type, pathname }) => {
  const site = useSiteMetadata()
  const absoluteUrl = (path) =>
    path ? `${site.siteUrl}/${path.replace(/^\/+/, "")}` : site.siteUrl

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
      <meta property="og:type" content={type || "website"} />
      {image && <meta property="og:image" content={absoluteUrl(image)} />}
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && <meta name="twitter:image" content={absoluteUrl(image)} />}
      <meta
        property="og:description"
        content={description || site.description}
      />
      <meta property="og:site_name" content={site.title} />
    </Helmet>
  )
}
