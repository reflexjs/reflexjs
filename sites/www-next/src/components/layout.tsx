import Head from "next/head"
import { Navbar } from "."

interface LayoutProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

export function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <title>{title} | Reflex</title>
      </Head> */}
      <Navbar />
      <main>{children}</main>
    </>
  )
}
