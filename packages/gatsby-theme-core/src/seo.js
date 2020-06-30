import * as React from "react"
import { Helmet } from "react-helmet"
import { useImage } from "./use-image"
import { useSiteMetadata } from "./use-sitemetadata"

const absoluteUrl = (path, url) =>
  path ? `${url}/${path.replace(/^\/+/, "")}` : url

export const Seo = ({ title, description, pathname, og, twitter }) => {
  const site = useSiteMetadata()
  const [ogImage] = useImage(og?.image)
  const [twitterImage] = useImage(twitter?.image)

  return (
    <Helmet
      defer={false}
      title={title || site.title}
      titleTemplate={`%s | ${site.title}`}
      htmlAttributes={{
        lang: "en",
      }}
    >
      <link rel="canonical" href={absoluteUrl(pathname, site.siteUrl)} />
      <meta name="title" content={title} />
      <meta name="description" content={description || site.description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      {site?.title && <meta property="og:site_name" content={site.title} />}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.pathname && (
        <meta
          property="og:url"
          content={absoluteUrl(og.pathname, site.siteUrl)}
        />
      )}
      {og.type && <meta property="og:type" content={og.type} />}
      {og.description && (
        <meta property="og:description" content={og.description} />
      )}
      {ogImage && (
        <meta
          property="og:image"
          content={absoluteUrl(
            ogImage.childImageSharp?.fluid?.src,
            site.siteUrl
          )}
        />
      )}

      {twitter.title && (
        <meta property="twitter:title" content={twitter.title} />
      )}
      {twitter.pathname && (
        <meta
          property="twitter:url"
          content={absoluteUrl(twitter.pathname, site.siteUrl)}
        />
      )}
      {twitter.description && (
        <meta property="twitter:description" content={twitter.description} />
      )}
      {twitterImage && (
        <meta
          name="twitter:image"
          content={absoluteUrl(
            twitterImage.childImageSharp?.fluid?.src,
            site.siteUrl
          )}
        />
      )}
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
    </Helmet>
  )
}
