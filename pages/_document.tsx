import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" strategy="lazyOnload"/>
        </body>
      </Html>
    )
  }
}

export default MyDocument