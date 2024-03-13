import type { AppProps } from "next/app"
import { Hammersmith_One, Lato } from "next/font/google"
import Head from "next/head"

import { globalCss } from "@vega/shared-styles"

import { Application } from "@/components/application"

const headingFont = Hammersmith_One({
  subsets: ["latin"],
  weight: ["400"],
})

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["400"],
})

export default function App({ Component, pageProps }: AppProps) {
  globalCss()

  return (
    <>
      <Head>
        <title>Vega</title>
      </Head>

      <div className={`${headingFont.className} ${bodyFont.className}`}>
        <Application>
          <Component {...pageProps} />
        </Application>
      </div>
    </>
  )
}
