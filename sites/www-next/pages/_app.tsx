import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "reflexjs"
import theme from "../src/theme"

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          title: "Build something amazing.",
          description:
            "Starter kits, themes and blocks to help you build Gatsby and Nextjs sites faster. Built using a styling library that has everything you care about. Speed and excellent developer experience.",
          type: "website",
          url: "https://reflexjs.org",
          images: [
            {
              url: "https://reflexjs.org/images/meta.jpg",
              width: 800,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: "@arshadcn",
          site: "@arshadcn",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
