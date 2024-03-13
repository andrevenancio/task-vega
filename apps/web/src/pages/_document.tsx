import NextDocument, { Head, Html, Main, NextScript } from "next/document"

import { getCssText } from "@vega/shared-styles"

export default class Document extends NextDocument {
  render() {
    const initAppHeight = `function updateHeight() { document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px');}; window.addEventListener('resize', updateHeight); updateHeight();`

    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <meta name="referrer" content="no-referrer" />
          <meta name="title" content="Vega" />
          <meta name="description" content="Vega" />
          <link rel="icon" href="icon.svg" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: initAppHeight }} async />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
