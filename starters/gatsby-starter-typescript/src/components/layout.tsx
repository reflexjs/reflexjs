/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { Navbar, Footer } from "."
import config from "../config"

export function Layout({ children }) {
  const { site } = config
  return (
    <>
      <Navbar branding={site.branding} links={site.links} />
      <main>{children}</main>
      <Footer copyright={site.copyright} />
    </>
  )
}
