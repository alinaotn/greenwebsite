import type {NextPage} from 'next'
import Head from 'next/head'
import Menu from "../components/menu";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const User: NextPage = () => {

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
      <div className="absolute z-0 top-[110%] left-[-20%]">
        <Image src="/vector6.svg" alt="Background Flower Vector" width={766} height={555}/>
      </div>
      <div className="absolute z-0 top-[30%] right-[-5%] hidden md:block">
        <Image src="/flower6.svg" alt="Background Flower Vector" width={600} height={500}/>
      </div>

      <div className="z-10 p-12 relative">
        <div className="absolute z-0 bottom-0 right-[-5%]">
          <Image src="/vector7.svg" alt="Background Flower Vector" width={600} height={500}/>
        </div>
        <Menu/>
        <div className="flex items-center flex-wrap flex-col">
          <h1 className="w-4/5 md:w-3/5 md:mt-24">What users can do:</h1>
          <span className="w-4/5 md:w-3/5 text-justify mt-4">
          Users cannot make the Internet more sustainable directly, but they can reduce energy consumption when surfing the Internet through their usage behavior. This includes, for example, making the right settings on the hardware. This means turning down or switching off unnecessary lighting, such as keyboard illumination or the brightest level of display lighting. Many end devices also have so-called eco settings or a power-saving mode, which keep energy consumption low and at the same time ensure that the end device has a longer battery life. Laptops and computers should also not be permanently in standby mode. It is important to emphasize that these measures ensure lower power consumption and lower energy costs. Setting up dark mode, which is now supported by most software products, can also have the same energy-saving effect.
          </span>
          <h1 className="w-4/5 md:w-3/5 mt-8">1. Reduce video streaming</h1>
          <span className="w-4/5 md:w-3/5 text-justify mt-4">
          Internet usage behavior can also have a positive effect on the energy balance. One simple, but also difficult to implement in today&apos;s society, option is to reduce video streaming via platforms such as YouTube, Netflix or Amazon Prime.
          </span>
          <h1 className="w-4/5 md:w-3/5 mt-8">2. Reduce cloud usage</h1>
          <span className="w-4/5 md:w-3/5 text-justify mt-4">
          Genauso wie Streaming verursachen auch Online-Speicherlösungen wie die Cloud einen hohen Energieverbrauch . Jedes Foto oder jede Datei, die online gespeichert wird, muss dauerhaft auf einem Server gespeichert werden, der mit Strom versorgt werden muss. Jedes Mal, wenn Nut-zer*innen auf diese Daten zugreifen wollen, müssen Anfragen an den Server gesendet werden, was noch mehr Energie verbraucht - sowohl auf dem Endgerät als auch über das Netz.
          </span>
          <h1 className="w-4/5 md:w-3/5 mt-8">3. Take care of your hardware</h1>
          <span className="w-4/5 md:w-3/5 text-justify mt-4">
          When we think of the environmental pollution caused by the Internet, we often first think of data centers and their enormous energy consumption. However, the reality is more complex. The Internet would not exist without all the connected laptops, cell phones or tablets that provide access to the network. Contrary to popular belief, it is the manufacture of these devices that accounts for the largest share of the Internet&apos;s environmental footprint on a global scale. For this reason, it is important to buy high quality hardware and use that hardware for years to come. Today&apos;s society tends to always own the latest and greatest smartphone model, however, this goes against the sustainable idea. When hardware needs to be replaced, a good way is to buy so-called &quot;refurbished&quot; devices, i.e. used and refurbished devices.
          </span>

          <h1 className="w-4/5 md:w-3/5 mt-8">4. Surf with care</h1>
          <div className="w-4/5 md:w-3/5  mt-4 flex">
            <span className="w-1/2 text-justify mr-20">
            The search engine Ecosia pursues the sustainable idea on the web. They use their income from advertisements to plant trees. In this way, the company has already been able to plant more than 140 million trees. Ecosia also uses only renewable energies and covers 200% of its energy needs from its own plants.
            </span>
            <Image src="/ecosia.png" alt="Background Vector" width={439} height={243}/>
          </div>

          <h1 className="w-4/5 md:w-3/5 mt-8">4. Start a petition</h1>
          <span className="w-4/5 md:w-3/5 text-justify mt-4 z-10">
          In addition, climate-conscious users can start a petition to educate and raise awareness about sustainability on the Internet.
          </span>
          <h4 className="w-4/5 md:w-3/5 mt-16 font-medium">Sources</h4>
          <span className="w-4/5 md:w-3/5 text-justify mt-4 z-10 break-words">
            youmatter. 2020. youmatter. [Online] 28. 1 2020. [Zitat vom: 2022. 5 5.] https://youmatter.world/en/reduce-environmental-impact-internet/.
            <br/><br/>
            Ecosia GmbH. Ecosia. [Online] Ecosia GmbH. [Zitat vom: 6. 5 2022.] https://www.ecosia.org/
          </span>
        </div>
        <footer className="flex items-center justify-center mt-8 relative">
            <span className="flex items-center">
              <Link href="/">
            <a
              target="_self"
              rel="noopener noreferrer"
            >Imprint &nbsp; &nbsp;</a></Link> |
              <Link href="/"><a
                target="_self"
                rel="noopener noreferrer"
              > &nbsp; &nbsp;Data Security</a></Link>
             </span>
        </footer>
      </div>
    </div>
  )
}

export default User
