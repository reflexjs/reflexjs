import Head from "next/head"

import config from "@/config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

function absoluteUrl(path: string) {
  return path
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${path.replace(/^\/+/, "")}`
    : process.env.NEXT_PUBLIC_SITE_URL
}

export interface Meta {
  title?: string
  description?: string
  path?: string
  type?: string
  site_name?: string
  image?: string
  twitter?: string
  date?: string
}

export interface LayoutProps {
  children: React.ReactNode
  meta?: Meta
}

const defaultMeta: Meta = {
  description: config.site.branding.description,
  type: "website",
  site_name: config.site.branding.name,
  image: config.site.branding.image,
  twitter: config.site.twitter,
}

export function Layout({ meta, children }: LayoutProps) {
  const { site } = config

  meta = {
    ...defaultMeta,
    ...meta,
  }

  return (
    <>
      <Head>
        <title>{meta.title || meta.site_name}</title>
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={absoluteUrl(meta.path)} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={absoluteUrl(meta.path)} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={absoluteUrl(meta.image)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={absoluteUrl(meta.image)} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar branding={site.branding} links={site.links} />
      <main>{children}</main>
      <Footer copyright={site.copyright} />
    </>
  )
}
