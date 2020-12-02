import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Navbar, Footer } from "."

interface LayoutProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function Layout({
  title = "",
  description = "",
  children,
}: LayoutProps) {
  const { asPath: path } = useRouter()
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://reflexjs.org${path}`}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
