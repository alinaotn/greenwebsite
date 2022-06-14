import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FlexLayout from "./components/flexLayout";
import Menu from "./components/menu";
import React from "react";
import CompareLayout from "./components/compareLayout";
import Link from 'next/link';

const Home: NextPage = () => {
  const [imageFirst, setImageFirst] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setImageFirst(true)
    }
  }, []);

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

      <div className="absolute -z-10 hidden md:block left-[0]">
        <Image src="/1.svg" alt="Background Vector" width={426} height={550}/>
      </div>
      <div className="absolute -z-10 left-[-100px] md:hidden">
        <Image src="/1-mobile.svg" alt="Background Vector" width={426} height={550}/>
      </div>
      <div className="absolute -z-10">
        <Image src="/flower1.svg" alt="Background Flower Vector" width={419} height={491}/>
      </div>
      <div className="absolute z-0 top-60 right-[-180px] hidden md:block">
        <Image src="/2.svg" alt="Background Vector" width={576} height={624}/>
      </div>
      <div className="absolute z-0 top-44 right-[-50px] hidden md:block">
        <Image src="/flower2.svg" alt="Background Flower Vector" width={555} height={526}/>
      </div>


      <div className="h-screen z-10 p-6 md:p-12">
        <Menu/>
        <div className="flex items-center justify-center md:h-screen flex-wrap flex-col relative">
          <h1 className="w-4/5 md:w-3/5 text-center background-image p-8">How your internet consumption affects our
            planet
          </h1>
        </div>
      </div>

      <div className="h-auto mt- z-10 p-6 md:p-12 relative">
        <FlexLayout isCol={true}>
          <h1 className="w-4/5 md:w-3/5 text-center pb-24">Let’s have a look at some examples:
            If you spend one hour on the internet...</h1>
          <CompareLayout imageWidth={399} imageHeight={307} maxWidth="max-w-[260px]" maxHeight="max-h-[200px]"
                         content="...you consume as much energy as one full load of washing. This is 2kg of CO2 equivalent.">
            <svg width="399" height="307" viewBox="0 0 399 347" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M163.272 268.133C111.583 249.723 79.6135 216.826 76.276 167.07C72.3491 108.528 110.771 101.021 163.272 66.0082C204.376 38.5963 247.516 -0.3829 292.668 21.3191C342.567 45.303 310.712 91.6254 314.71 142.243C318.115 185.354 338.316 201.569 314.71 239.258C285.114 286.508 219.461 288.145 163.272 268.133Z"
                fill="#667C74"/>
              <path
                d="M372.092 224.276C377.237 235.275 357.578 236.364 351.452 249.409C342.148 269.225 365.291 289.899 347.326 301.787C331.017 312.58 323.903 295.012 306.23 297.968C289.724 300.729 282.164 319.735 269.168 312.099C257.024 304.964 274.281 290.144 265.224 279.245C256.966 269.308 247.882 272.371 241.83 260.583C233.823 244.986 274.372 240.753 270.042 222.985C267.264 211.587 247.054 218.551 247.974 206.017C248.732 195.695 255.981 188.203 265.454 183.285C281.692 174.852 280.154 207.052 296.608 207.239C311.306 207.407 321.09 183.683 333.997 188.834C347.574 194.252 328.551 213.489 341.738 219.63C352.49 224.637 366.907 213.194 372.092 224.276Z"
                fill="#B1BFEC"/>
              <path
                d="M304.759 242V249.237C304.759 249.237 265.843 269.956 272.843 269.956C279.843 269.956 330.716 269.956 332.712 269.956C334.709 269.956 313.078 254.939 313.078 254.939"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M299.843 233.953C299.843 233.953 301.255 231.033 303.013 230.376C304.336 229.881 305.318 229.868 306.636 230.376C308.647 231.151 309.468 232.742 309.806 234.847C310.36 238.296 304.843 242 304.843 242"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M62 55.0745C62 55.0745 67.4197 52.6568 69.809 55.0745C72.8217 58.123 66.271 65.7152 69.809 67.6365C71.315 68.4543 74 67.6365 74 67.6365"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M106 96.0745C106 96.0745 111.42 93.6568 113.809 96.0745C116.822 99.123 110.271 106.715 113.809 108.637C115.315 109.454 118 108.637 118 108.637"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M106 31.0745C106 31.0745 111.42 28.6568 113.809 31.0745C116.822 34.123 110.271 41.7152 113.809 43.6365C115.315 44.4543 118 43.6365 118 43.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M153 28.0745C153 28.0745 158.42 25.6568 160.809 28.0745C163.822 31.123 157.271 38.7152 160.809 40.6365C162.315 41.4543 165 40.6365 165 40.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M133 17.0745C133 17.0745 138.42 14.6568 140.809 17.0745C143.822 20.123 137.271 27.7152 140.809 29.6365C142.315 30.4543 145 29.6365 145 29.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M72 128.075C72 128.075 77.4197 125.657 79.809 128.075C82.8217 131.123 76.271 138.715 79.809 140.637C81.315 141.454 84 140.637 84 140.637"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M147 3.07454C147 3.07454 152.42 0.656828 154.809 3.07454C157.822 6.12295 151.271 13.7152 154.809 15.6365C156.315 16.4543 159 15.6365 159 15.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M124 35.0745C124 35.0745 129.42 32.6568 131.809 35.0745C134.822 38.123 128.271 45.7152 131.809 47.6365C133.315 48.4543 136 47.6365 136 47.6365"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M103 52.0745C103 52.0745 108.42 49.6568 110.809 52.0745C113.822 55.123 107.271 62.7152 110.809 64.6365C112.315 65.4543 115 64.6365 115 64.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M96 131.075C96 131.075 101.42 128.657 103.809 131.075C106.822 134.123 100.271 141.715 103.809 143.637C105.315 144.454 108 143.637 108 143.637"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M103 117.075C103 117.075 108.42 114.657 110.809 117.075C113.822 120.123 107.271 127.715 110.809 129.637C112.315 130.454 115 129.637 115 129.637"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M84 110.075C84 110.075 89.4197 107.657 91.809 110.075C94.8217 113.123 88.271 120.715 91.809 122.637C93.315 123.454 96 122.637 96 122.637"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M90 88.0745C90 88.0745 95.4197 85.6568 97.809 88.0745C100.822 91.123 94.271 98.7152 97.809 100.637C99.315 101.454 102 100.637 102 100.637"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M96 66.0745C96 66.0745 101.42 63.6568 103.809 66.0745C106.822 69.123 100.271 76.7152 103.809 78.6365C105.315 79.4543 108 78.6365 108 78.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M72 80.0745C72 80.0745 77.4197 77.6568 79.809 80.0745C82.8217 83.123 76.271 90.7152 79.809 92.6365C81.315 93.4543 84 92.6365 84 92.6365"
                stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M84 44.0745C84 44.0745 89.4197 41.6568 91.809 44.0745C94.8217 47.123 88.271 54.7152 91.809 56.6365C93.315 57.4543 96 56.6365 96 56.6365"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path
                d="M64 99.0745C64 99.0745 69.4197 96.6568 71.809 99.0745C74.8217 102.123 68.271 109.715 71.809 111.637C73.315 112.454 76 111.637 76 111.637"
                stroke="#B1BFEC" strokeWidth="3" strokeLinecap="round"/>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M122.391 83.4708V210.779C122.391 222.497 132.236 231.997 144.381 231.997H254.331C266.476 231.997 276.321 222.497 276.321 210.779V83.4708M122.391 83.4708V62.2528C122.391 50.5345 132.236 41.0349 144.381 41.0349H254.331C266.476 41.0349 276.321 50.5345 276.321 62.2528V83.4708M122.391 83.4709H276.321ZM221.346 62.253H254.331ZM243.336 157.734C243.336 181.17 223.646 200.17 199.356 200.17C175.067 200.17 155.376 181.17 155.376 157.734M243.336 157.734C243.336 134.297 223.646 115.298 199.356 115.298C175.067 115.298 155.376 134.297 155.376 157.734"
                    fill="#D4B8A3"/>
              <path
                d="M126.391 83.4708C126.391 81.2617 124.6 79.4708 122.391 79.4708C120.182 79.4708 118.391 81.2617 118.391 83.4708H126.391ZM280.321 83.4708C280.321 81.2617 278.53 79.4708 276.321 79.4708C274.112 79.4708 272.321 81.2617 272.321 83.4708H280.321ZM118.391 83.4708C118.391 85.6799 120.182 87.4708 122.391 87.4708C124.6 87.4708 126.391 85.6799 126.391 83.4708H118.391ZM272.321 83.4708C272.321 85.6799 274.112 87.4708 276.321 87.4708C278.53 87.4708 280.321 85.6799 280.321 83.4708H272.321ZM122.391 79.4709C120.182 79.4709 118.391 81.2617 118.391 83.4709C118.391 85.68 120.182 87.4709 122.391 87.4709V79.4709ZM276.321 87.4709C278.53 87.4709 280.321 85.68 280.321 83.4709C280.321 81.2617 278.53 79.4709 276.321 79.4709V87.4709ZM221.346 58.253C219.137 58.253 217.346 60.0438 217.346 62.253C217.346 64.4621 219.137 66.253 221.346 66.253V58.253ZM254.331 66.253C256.54 66.253 258.331 64.4621 258.331 62.253C258.331 60.0438 256.54 58.253 254.331 58.253V66.253ZM247.336 157.734C247.336 155.525 245.545 153.734 243.336 153.734C241.127 153.734 239.336 155.525 239.336 157.734H247.336ZM159.376 157.734C159.376 155.525 157.585 153.734 155.376 153.734C153.167 153.734 151.376 155.525 151.376 157.734H159.376ZM239.336 157.734C239.336 159.943 241.127 161.734 243.336 161.734C245.545 161.734 247.336 159.943 247.336 157.734H239.336ZM151.376 157.734C151.376 159.943 153.167 161.734 155.376 161.734C157.585 161.734 159.376 159.943 159.376 157.734H151.376ZM118.391 83.4708V210.779H126.391V83.4708H118.391ZM118.391 210.779C118.391 224.84 130.163 235.997 144.381 235.997V227.997C134.309 227.997 126.391 220.154 126.391 210.779H118.391ZM144.381 235.997H254.331V227.997H144.381V235.997ZM254.331 235.997C268.549 235.997 280.321 224.84 280.321 210.779H272.321C272.321 220.154 264.403 227.997 254.331 227.997V235.997ZM280.321 210.779V83.4708H272.321V210.779H280.321ZM126.391 83.4708V62.2528H118.391V83.4708H126.391ZM126.391 62.2528C126.391 52.8771 134.309 45.0349 144.381 45.0349V37.0349C130.163 37.0349 118.391 48.1918 118.391 62.2528H126.391ZM144.381 45.0349H254.331V37.0349H144.381V45.0349ZM254.331 45.0349C264.403 45.0349 272.321 52.8771 272.321 62.2528H280.321C280.321 48.1918 268.549 37.0349 254.331 37.0349V45.0349ZM272.321 62.2528V83.4708H280.321V62.2528H272.321ZM122.391 87.4709H276.321V79.4709H122.391V87.4709ZM221.346 66.253H254.331V58.253H221.346V66.253ZM239.336 157.734C239.336 178.828 221.572 196.17 199.356 196.17V204.17C225.719 204.17 247.336 183.513 247.336 157.734H239.336ZM199.356 196.17C177.14 196.17 159.376 178.828 159.376 157.734H151.376C151.376 183.513 172.993 204.17 199.356 204.17V196.17ZM247.336 157.734C247.336 131.954 225.719 111.298 199.356 111.298V119.298C221.572 119.298 239.336 136.64 239.336 157.734H247.336ZM199.356 111.298C172.993 111.298 151.376 131.954 151.376 157.734H159.376C159.376 136.64 177.14 119.298 199.356 119.298V111.298Z"
                fill="white"/>
              <path
                d="M292 80.656C292 74.9074 298.959 63.9999 298.959 63.9999C298.959 63.9999 308.974 75.2022 306.65 81.8351C305.428 85.3238 303.46 87.1162 298.959 86.9941C294.612 86.8762 292 84.1564 292 80.656Z"
                stroke="#E2F0DA" strokeWidth="2" strokeLinecap="round"/>
              <path
                d="M285 120.656C285 114.907 291.959 104 291.959 104C291.959 104 301.974 115.202 299.65 121.835C298.428 125.324 296.46 127.116 291.959 126.994C287.612 126.876 285 124.156 285 120.656Z"
                stroke="#E2F0DA" strokeWidth="2" strokeLinecap="round"/>
              <path
                d="M309 113.725C309 106.227 318.279 91.9999 318.279 91.9999C318.279 91.9999 331.632 106.612 328.534 115.263C326.904 119.814 324.279 122.152 318.279 121.992C312.483 121.838 309 118.291 309 113.725Z"
                stroke="#E2F0DA" strokeWidth="2" strokeLinecap="round"/>
              <path d="M292 123C292 123 293.668 122.284 294.5 121.625C295.208 121.065 296 120 296 120" stroke="#E2F0DA"
                    strokeWidth="2" strokeLinecap="round"/>
              <path d="M300 82.9999C300 82.9999 301.668 82.2842 302.5 81.6249C303.208 81.0645 304 79.9999 304 79.9999"
                    stroke="#E2F0DA" strokeWidth="2" strokeLinecap="round"/>
              <path d="M319 116C319 116 320.668 115.284 321.5 114.625C322.208 114.065 323 113 323 113" stroke="#E2F0DA"
                    strokeWidth="2" strokeLinecap="round"/>
              <g id="rotate" className="center">
                <path
                  d="M242.96 156.436C242.96 179.873 223.27 198.872 198.98 198.872C174.691 198.872 155 179.873 155 156.436"
                  stroke="white" strokeWidth="6"/>
                <path d="M242.96 156.436C242.96 132.999 223.27 114 198.98 114C174.691 114 155 132.999 155 156.436"
                      stroke="white" strokeWidth="6"/>
                <path
                  d="M242.624 158.702C232.956 161.718 210.728 165.949 199.124 158.702C187.52 151.456 165.292 155.687 155.624 158.702"
                  stroke="white" strokeWidth="7"/>
              </g>
              <path
                d="M3 160.036C3 160.036 35.7723 127.298 67.5 150.036C96.2079 170.609 67.5783 237.25 93 261.769C121.812 289.557 177.931 235.926 208.5 261.769C227.173 277.554 223.5 317.769 223.5 317.769"
                stroke="white" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </CompareLayout>
          <CompareLayout imageSrc="/lightbulb.svg" imageWidth={312} imageHeight={330} maxWidth="max-w-[220px]"
                         content="...you consume the same energy compared to a LED lightbulb constantly powered for a month."
                         imageFirst={imageFirst}/>
          <CompareLayout imageSrc="/car.svg" imageWidth={463} imageHeight={393} maxWidth="max-w-[260px]"
                         content="...you consume the same energy when driving a Tesla Model S more than 30km."/>
          <CompareLayout imageSrc="/kettle.svg" imageWidth={377} imageHeight={463} maxWidth="max-w-[220px]"
                         content="...you consume the same energy compared to a kettle boiled once a day for nearly three months."
                         imageFirst={imageFirst}/>
        </FlexLayout>
      </div>

      <div className="h-screen z-10 relative flex items-center justify-center flex-col mt-24 relative">
        <h1 className="w-3/5 text-center">What you can do now:</h1>
        <FlexLayout isCol>
          <div className="relative md:mt-8">
            <Link href="/developer">
              <a className="text-4xl font-medium absolute z-20 top-20"
                 target="_self"
                 rel="noopener noreferrer"
              >As a software developer</a></Link>
            <Image className="absolute z-10" src="/background2.svg" alt="Background Vector" width={354} height={197}/>
          </div>
          <div className="relative mt-8">
            <Link href="/user">
              <a className="text-4xl font-medium absolute z-20 top-20 left-8"
                 target="_self"
                 rel="noopener noreferrer"
              >As an internet user</a></Link>
            <Image className="absolute z-10" src="/background2.svg" alt="Background Vector" width={354} height={197}/>
          </div>
          <div id="wcb" className="carbonbadge"/>
          <footer className="flex items-center justify-center mt-8 z-20 relative">
            <span className="flex items-center">
              <Link href="/imprint">
            <a
              target="_self"
              rel="noopener noreferrer"
            >Imprint &nbsp; &nbsp;</a></Link> |
              <Link href="/security">
            <a
              target="_self"
              rel="noopener noreferrer"
            > &nbsp; &nbsp;Data Security</a></Link>
             </span>
          </footer>
        </FlexLayout>
        <div className="absolute z-0 left-0  bottom-[-40px] md:bottom-0">
          <Image src="/vector4.svg" alt="Background Vector" width={345} height={453}/>
        </div>
        <div className="absolute z-0 left-0 bottom-0 hidden md:block">
          <Image src="/flower4.svg" alt="Background Vector" width={436} height={564}/>
        </div>
        <div className="absolute z-0 right-0 top-0 hidden md:block">
          <Image src="/flower5.svg" alt="Background Vector" width={400} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Home
