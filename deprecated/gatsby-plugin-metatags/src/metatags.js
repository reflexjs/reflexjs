import * as React from "react"
import { Helmet } from "react-helmet"
import { absoluteUrl } from "@reflexjs/utils"
import { useMetatags } from "./use-metatags"
import { MetatagImage } from "./metatag-image"
import { useSiteMetadata } from "./use-sitemetadata"

export const Metatags = ({ pathname = "/" }) => {
  const metatags = useMetatags(pathname)
  const site = useSiteMetadata()

  const helmetProps = {
    defer: false,
    title: site.title,
    titleTemplate: `%s | ${site.title}`,
    htmlAttributes: {
      lang: "en",
    },
  }

  if (!metatags) return <Helmet {...helmetProps} />

  const [{ title, description, og, twitter }] = metatags

  return (
    <>
      <Helmet {...helmetProps} title={title}>
        <link rel="canonical" href={absoluteUrl(pathname, site.siteUrl)} />
        <meta name="title" content={title} />
        <meta name="description" content={description || site.description} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        {site.title && <meta property="og:site_name" content={site.title} />}

        {og.title && <meta property="og:title" content={og.title} />}
        <meta property="og:url" content={absoluteUrl(pathname, site.siteUrl)} />
        {og.type && <meta property="og:type" content={og.type} />}
        {og.description && (
          <meta property="og:description" content={og.description} />
        )}

        {twitter.title && (
          <meta property="twitter:title" content={twitter.title} />
        )}
        {pathname && (
          <meta
            property="twitter:url"
            content={absoluteUrl(pathname, site.siteUrl)}
          />
        )}
        {twitter.description && (
          <meta property="twitter:description" content={twitter.description} />
        )}
        {twitter.card && (
          <meta property="twitter:card" content={twitter.card} />
        )}
      </Helmet>

      {/* Workaround for JSX inside Helmet. See https://github.com/nfl/react-helmet/issues/342 */}
      {og.image && (
        <MetatagImage property="og:image" imagePath={og.image} site={site} />
      )}
      {twitter.image && (
        <MetatagImage
          property="twitter:image"
          imagePath={twitter.image}
          site={site}
        />
      )}
    </>
  )
}
