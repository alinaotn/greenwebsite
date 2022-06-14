import type {NextPage} from 'next'
import Head from 'next/head'
import Menu from "../components/menu";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Extension: NextPage = () => {

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
      <div className="absolute z-0 top-[62%] left-[-28%]">
        <Image src="/vector6.svg" alt="Background Flower Vector" width={766} height={555}/>
      </div>
      <div className="absolute z-0 top-[30%] right-[-5%] hidden md:block">
        <Image src="/flower6.svg" alt="Background Flower Vector" width={600} height={500}/>
      </div>

      <div className="z-10 p-12 relative">
        <div className="absolute z-0 bottom-0 right-[-5%]">
          <Image src="/vector7.svg" alt="Background Vector" width={600} height={500}/>
        </div>
        <div className="absolute z-0 left-0 bottom-0 hidden md:block">
          <Image src="/flower7.svg" alt="Background Flower Vector" width={400} height={500}/>
        </div>
        <Menu/>
        <div className="flex items-center  flex-wrap flex-col">
          <h1 className="md:w-3/5 md:mt-24">How does the extension work?</h1>
          <span className="md:w-3/5  text-justify mt-4">
            The browser extension is designed to help identify sustainable websites with the help of a score. The score of the extension is determined from 4 parameters in total. The individual parameters are evaluated and the results are included in the calculation of the score. These are the parameters:
            </span>
          <h1 className="md:w-3/5  mt-8">1. Green Hosting </h1>
          <span className="md:w-3/5  text-justify mt-4">
            Since every request to a server, involves a lot of computing effort and therefore a lot of energy consumption, this parameter is included in the evaluation. This is because choosing a hosting provider that supplies the servers with sustainably generated energy reduces the CO2 emissions that occur as a result of these server requests. The Green Web Foundation&apos;`s public API provides a maintained database of hosting providers and their used energy supply. Thus, a request can be made to the API and thus the database through the interface and the result is sent to the browser extension as a true or false result.
          </span>
          <h1 className="md:w-3/5  mt-8">2. Page Speed</h1>
          <span className="md:w-3/5  text-justify mt-4">
            This value indexes how long the website takes to load. The Page Speed parameter provides information about the size of the page. The faster the value, the smaller the page and the lower the energy consumption, since fewer kilobytes need to be loaded.
          </span>
          <h1 className="md:w-3/5  mt-8">3. HTTP Requests</h1>
          <span className="md:w-3/5  text-justify mt-4">
            Every request to a server involves a lot of computing effort and thus a lot of energy consumption. Fewer HTTP requests result in lower energy consumption and shorter website loading times. The optimum number of requests is 10 to 30.
          </span>
          <h1 className="md:w-3/5  mt-8">4. Responsiveness</h1>
          <span className="md:w-3/5 text-justify mt-4 z-10">For example, a mobile-friendly-implemented website includes images that are optimized for size and pixel count. In addition, mobile-friendly websites only include elements that are operable. All these measures lead to better results in the website&apos;`s energy balance.</span>
        </div>
        <footer className="flex items-center justify-center mt-8 relative">
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

export default Extension
