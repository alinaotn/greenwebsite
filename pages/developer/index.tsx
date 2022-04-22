import type {NextPage} from 'next'
import Head from 'next/head'
import Menu from "../components/menu";
import React from "react";
import Image from "next/image";

const Developer: NextPage = () => {

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
      <div className="absolute z-0 top-[30%] right-[-5%]">
        <Image src="/flower6.svg" alt="Background Flower Vector" width={600} height={500}/>
      </div>


      <div className="z-10 p-12 relative">
        <div className="absolute z-0 bottom-0 right-[-5%]">
          <Image src="/vector7.svg" alt="Background Flower Vector" width={600} height={500}/>
        </div>
        <div className="absolute z-0 left-0 bottom-0">
          <Image src="/flower7.svg" alt="Background Vector" width={400} height={500}/>
        </div>
        <Menu/>
        <div className="flex items-center  flex-wrap flex-col">
          <h1 className="w-3/5 mt-24">Developers should have a mission:</h1>
          <span className="w-3/5 text-justify mt-4">I'm baby drinking vinegar poke trust fund, mlkshk hexagon leggings snackwave. Live-edge asymmetrical narwhal, shabby chic typewriter prism tilde flexitarian austin. <br/><br/> Godard wolf master cleanse vice kitsch authentic brooklyn seitan humblebrag. Drinking vinegar gochujang organic fam glossier viral hashtag lomo. Irony cliche actually semiotics four loko scenester VHS chia cornhole freegan. Tilde shaman synth, pabst hashtag yr tote bag. Fanny pack fixie cornhole austin banh mi 90's.
            Normcore gentrify vape, bicycle rights succulents echo park street art austin pickled biodiesel chillwave af. Affogato freegan polaroid yuccie listicle. Authentic cred lomo, +1 portland man bun edison bulb raw denim dreamcatcher. Kogi activated charcoal yr synth vexillologist raclette next level etsy pour-over flexitarian franzen drinking vinegar. Street art cray chicharrones, 3 wolf moon poke skateboard coloring book. Vaporware tofu fixie activated charcoal knausgaard.<br/><br/>
            Pour-over activated charcoal semiotics squid jianbing, godard hot chicken cold-pressed drinking vinegar brooklyn cray listicle air plant williamsburg kale chips. Ethical ramps shaman viral prism cliche pour-over. Cred kale chips jean shorts sustainable.</span>
          <h1 className="w-3/5 mt-8">1. Popup things kakao</h1>
          <span className="w-3/5 text-justify mt-4">I'm baby drinking vinegar poke trust fund, mlkshk hexagon leggings snackwave. Live-edge asymmetrical narwhal, shabby chic typewriter prism tilde flexitarian austin. <br/><br/> Godard wolf master cleanse vice kitsch authentic brooklyn seitan humblebrag. Drinking vinegar gochujang organic fam glossier viral hashtag lomo. Irony cliche actually semiotics four loko scenester VHS chia cornhole freegan. Tilde shaman synth, pabst hashtag yr tote bag. Fanny pack fixie cornhole austin banh mi 90's.
            Normcore gentrify vape, bicycle rights succulents echo park street art austin pickled biodiesel chillwave af. Affogato freegan polaroid yuccie listicle. Authentic cred lomo, +1 portland man bun edison bulb raw denim dreamcatcher. Kogi activated charcoal yr synth vexillologist raclette next level etsy pour-over flexitarian franzen drinking vinegar. Street art cray chicharrones, 3 wolf moon poke skateboard coloring book. Vaporware tofu fixie activated charcoal knausgaard.<br/><br/>
            Pour-over activated charcoal semiotics squid jianbing, godard hot chicken cold-pressed drinking vinegar brooklyn cray listicle air plant williamsburg kale chips. Ethical ramps shaman viral prism cliche pour-over. Cred kale chips jean shorts sustainable.</span>
          <h1 className="w-3/5 mt-8">2. Subway love chic</h1>
          <span className="w-3/5 text-justify mt-4">I'm baby drinking vinegar poke trust fund, mlkshk hexagon leggings snackwave. Live-edge asymmetrical narwhal, shabby chic typewriter prism tilde flexitarian austin. <br/><br/> Godard wolf master cleanse vice kitsch authentic brooklyn seitan humblebrag. Drinking vinegar gochujang organic fam glossier viral hashtag lomo. Irony cliche actually semiotics four loko scenester VHS chia cornhole freegan. Tilde shaman synth, pabst hashtag yr tote bag. Fanny pack fixie cornhole austin banh mi 90's.
            Normcore gentrify vape, bicycle rights succulents echo park street art austin pickled biodiesel chillwave af. Affogato freegan polaroid yuccie listicle. Authentic cred lomo, +1 portland man bun edison bulb raw denim dreamcatcher. Kogi activated charcoal yr synth vexillologist raclette next level etsy pour-over flexitarian franzen drinking vinegar. Street art cray chicharrones, 3 wolf moon poke skateboard coloring book. Vaporware tofu fixie activated charcoal knausgaard.<br/><br/>
            Pour-over activated charcoal semiotics squid jianbing, godard hot chicken cold-pressed drinking vinegar brooklyn cray listicle air plant williamsburg kale chips. Ethical ramps shaman viral prism cliche pour-over. Cred kale chips jean shorts sustainable.</span>
          <h1 className="w-3/5 mt-8">3. Test gentle develop chic</h1>
          <div className="w-3/5  mt-4 flex">
            <span className="w-1/2 text-justify mr-20">Tilde post-ironic test test bespoke, hammock narwhal seitan PBR&B fanny pack offal. Shoreditch art party messenger bag, wayfarers cred yr viral food truck cliche before they sold out chia portland blog tofu. Retro cliche post-ironic, dreamcatcher narwhal iceland crucifix snackwave poutine pop-up vice scenester tetset williamsburg. Chillwave tet williamsburg kitsch shabby chic, paleo cornhole swag seitan man bun whatever health goth crucifix subway tile put a bird on it hammock. Banjo offal selvage wolf air plant bespoke unicorn, brooklyn fingerstache love lobe lojj.</span>
            <Image src="/compare1.svg" alt="Background Vector" width={300} height={200}/>
          </div>
          <h1 className="w-3/5 mt-8">4. Subway love chic</h1>
          <span className="w-3/5 text-justify mt-4 z-10">I'm baby drinking vinegar poke trust fund, mlkshk hexagon leggings snackwave. Live-edge asymmetrical narwhal, shabby chic typewriter prism tilde flexitarian austin. <br/><br/> Godard wolf master cleanse vice kitsch authentic brooklyn seitan humblebrag. Drinking vinegar gochujang organic fam glossier viral hashtag lomo. Irony cliche actually semiotics four loko scenester VHS chia cornhole freegan. Tilde shaman synth, pabst hashtag yr tote bag. Fanny pack fixie cornhole austin banh mi 90's.
            Normcore gentrify vape, bicycle rights succulents echo park street art austin pickled biodiesel chillwave af. Affogato freegan polaroid yuccie listicle. Authentic cred lomo, +1 portland man bun edison bulb raw denim dreamcatcher. Kogi activated charcoal yr synth vexillologist raclette next level etsy pour-over flexitarian franzen drinking vinegar. Street art cray chicharrones, 3 wolf moon poke skateboard coloring book. Vaporware tofu fixie activated charcoal knausgaard.<br/><br/>
            Pour-over activated charcoal semiotics squid jianbing, godard hot chicken cold-pressed drinking vinegar brooklyn cray listicle air plant williamsburg kale chips. Ethical ramps shaman viral prism cliche pour-over. Cred kale chips jean shorts sustainable.</span>
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
      </div>

    </div>
  )
}

export default Developer
