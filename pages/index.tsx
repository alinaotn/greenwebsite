import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FlexLayout from "./components/flexLayout";
import Menu from "./components/menu";
import React from "react";
import CompareLayout from "./components/compareLayout";

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
      <div className="absolute z-0 top-80 left-[37%]">
        <Image src="/background1.svg" alt="Background Vector" width={354} height={197}/>
      </div>


      <div className="h-screen z-10 p-12 relative">
        <Menu/>
        <div className="flex items-center justify-center h-screen flex-wrap flex-col">
          <h1 className="w-3/5 text-center ">How your internet consumption affects our planet</h1>
        </div>
      </div>

      <div className="h-auto mt- z-10 p-12">
        <FlexLayout isCol={true}>
          <h1 className="w-3/5 text-center">Let’s have a look at some examples:
            If you spend one hour on the internet...</h1>
          <CompareLayout imageSrc="/compare1.svg" imageWidth={189} imageHeight={200}
                         content="...you consume as much energy as one full load of washing. This is 80kg of CO2 equivalent."/>
          <CompareLayout imageSrc="/compare1.svg" imageWidth={189} imageHeight={200}
                         content="...you consume as much energy as one full load of washing. This is 80kg of CO2 equivalent."
                         imageFirst={false}/>
          <CompareLayout imageSrc="/compare1.svg" imageWidth={189} imageHeight={200}
                         content="...you consume as much energy as one full load of washing. This is 80kg of CO2 equivalent."/>
          <CompareLayout imageSrc="/compare1.svg" imageWidth={189} imageHeight={200}
                         content="...you consume as much energy as one full load of washing. This is 80kg of CO2 equivalent."
                         imageFirst={false}/>
        </FlexLayout>
      </div>

      <div className="h-screen z-10 relative flex items-center justify-center flex-col mt-24 relative">
        <h1 className="w-3/5 text-center">What you can do now:</h1>
        <FlexLayout isCol>
          <div className="relative mt-8">
            <a className="text-4xl font-medium absolute z-10 top-20"
               href="/"
               target="_self"
               rel="noopener noreferrer"
            >As a software developer</a>
            <Image className="absolute" src="/background2.svg" alt="Background Vector" width={354} height={197}/>
          </div>
          <div className="relative mt-8">
            <a className="text-4xl font-medium absolute z-10 top-20 left-8"
               href="/"
               target="_self"
               rel="noopener noreferrer"
            >As an internet user</a>
            <Image className="absolute " src="/background2.svg" alt="Background Vector" width={354} height={197}/>
          </div>
          <footer className="flex items-center justify-center mt-8 relative">
            <span className="flex items-center">
            <a
              href="/"
              target="_self"
              rel="noopener noreferrer"
            >Imprint &nbsp; &nbsp;</a> |
            <a
              href="/"
              target="_self"
              rel="noopener noreferrer"
            > &nbsp; &nbsp;Data Security</a>
             </span>
          </footer>
        </FlexLayout>
        <div className="absolute z-0 left-0 bottom-0">
          <Image src="/vector4.svg" alt="Background Vector" width={345} height={453}/>
        </div>
        <div className="absolute z-0 left-0 bottom-0]">
          <Image src="/flower4.svg" alt="Background Vector" width={436} height={564}/>
        </div>
        <div className="absolute z-0 right-0 top-0">
          <Image src="/flower5.svg" alt="Background Vector" width={400} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Home
