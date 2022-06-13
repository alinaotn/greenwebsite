import type {NextPage} from 'next'
import Head from 'next/head'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Imprint: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Green Website</title>
        <meta name="green website" content="portfolio generated with next.js"/>
        <link rel="icon" href="/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"/>
      </Head>

      <div className="absolute z-0">
        <Image src="/vector5.svg" alt="Background Vector" width={393} height={278}/>
      </div>

      <div className="z-10 p-12 relative">
        <div className="flex items-center justify-between w-full">
          <span className="text-dark-green font-bold">
            <Link href="/">
            <a
              target="_self"
              rel="noopener noreferrer">Green Website</a></Link>
          </span>
        </div>
        <div className="flex mt-24 flex-col w-3/5">
          <h3><strong>Impressum</strong></h3>
          <br/><br/>
          <p>Anbieter:<br/>Alina Otten<br/>Am Pesch 28<br/>40625 Düsseldorf</p>
          <br/><br/>
          <p>Kontakt:<br/>E-Mail: alinaotten@web.de<br/>Website: https://github.com/alinaotn</p>
          <br/><br/>
          <p>Bei redaktionellen Inhalten:</p>
          <p>Verantwortlich nach § 55 Abs.2 RStV<br/>Alina Otten<br/>Am Pesch 28<br/>40625 Düsseldorf</p>
        </div>
        <footer className="flex items-center justify-center mt-56 relative">
            <span className="flex items-center">
              <Link href="/imprint">
            <a
              target="_self"
              rel="noopener noreferrer"
            >Imprint &nbsp; &nbsp;</a></Link> |
              <Link href="/security"><a
                target="_self"
                rel="noopener noreferrer"
              > &nbsp; &nbsp;Data Security</a></Link>
             </span>
        </footer>
      </div>
    </div>
  )
}

export default Imprint
