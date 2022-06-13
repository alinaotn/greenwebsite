import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
  return <> <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" strategy="lazyOnload"/>
    <Component {...pageProps} /></>
}

export default MyApp
