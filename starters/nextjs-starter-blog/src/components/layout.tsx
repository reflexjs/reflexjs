import Head from "next/head"

import config from "@/config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function Layout({ children }) {
  const { site } = config
  return (
    <>
      <Head>
        <title>{site.branding.name}</title>
      </Head>
      <Navbar branding={site.branding} links={site.links} />
      <main>{children}</main>
      <Footer copyright={site.copyright} />
    </>
  )
}
