import Document, { Html, Main, NextScript, Head } from "next/document"
import { InitializeColorMode } from "reflexjs"

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&family=Lora&family=Merriweather:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
