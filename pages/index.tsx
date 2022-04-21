import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FlexLayout from "./components/flexLayout";
import Menu from "./components/menu";
import React from "react";

const Home: NextPage = () => {

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
        <Image src="/1.svg" alt="Background Vector" width={426} height={550}/>
      </div>
      <div className="absolute z-0">
        <Image src="/flower1.svg" alt="Background Flower Vector" width={419} height={491}/>
      </div>
      <div className="absolute z-0 top-60 right-[-180px]">
        <Image src="/2.svg" alt="Background Vector" width={576} height={624}/>
      </div>
      <div className="absolute z-0 top-44 right-[-50px]">
        <Image src="/flower2.svg" alt="Background Flower Vector" width={555} height={526}/>
      </div>
      <div className="absolute z-0 top-72 left-[37%]">
        <Image src="/background1.svg" alt="Background Vector" width={354} height={197}/>
      </div>

      <div className="h-screen z-10 p-12 relative">
        <Menu/>
        <div className="flex items-center justify-end h-full flex-wrap flex-col">
          <h1 className="w-3/5 text-center ">How your internet consumption affects our planet</h1>
          <div className="mt-24"><Image src="/mouse-scroll.svg" alt="Mouse Scroll Vector" width={50} height={123}/>
          </div>
        </div>
      </div>

      <FlexLayout>
      </FlexLayout>

      <FlexLayout>
      </FlexLayout>

      <footer className="flex items-center justify-center pb-12">
        <span className="flex items-center">
          <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >Imprint &nbsp;</a> |
          <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
          > &nbsp;Data Security</a>
        </span>
      </footer>
    </div>
  )
}

export default Home
