import config from "@/config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
