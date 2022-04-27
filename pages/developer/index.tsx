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
          <span className="w-3/5 text-justify mt-4">Designing and developing minimalist websites is not easy because of the many ways to make a website interactive and as attractive as possible. This makes it even more important for web developers and user experience designers to think about how good UX can improve sustainability at the beginning of a project. This page looks at the options available to UX designers and the guidelines programmers can use to ensure that the digital product they develop is as energy efficient as possible.</span>
          <h1 className="w-3/5 mt-8">1. User Journeys</h1>
          <span className="w-3/5 text-justify mt-4">

          The design of the website architecture preferably avoids unnecessary intermediate pages. The website experience is intuitive and leads users quickly to their goal without the need for intermediate pages. In addition, reduced pages reduce the energy-consuming loading of new content. <br/><br/> A search box can help users find their way around the site. Another option for good orientation is a mega dropdown menu. This menu allows all pages and subpages to be visible and clickable at first glance. It also offers the possibility of using large typos, expanding the menu items and using icons and images. It is important that this type of menu is well and clearly designed and the menu also works responsive.

          </span>
          <h1 className="w-3/5 mt-8">2. SEO</h1>
          <span className="w-3/5 text-justify mt-4">
            Search engine optimization has no direct influence on the power consumption of a website, but can have an influence on the power consumption caused by the
            users. Optimizing a website for search engine rankings helps users find the information they need quickly and easily. Successful search engine optimization means that people spend less time searching for information on the Internet and visit fewer sites that do not meet their needs. This means that less energy is consumed. The energy that is consumed, however, is used to provide real added value to users.
          </span>
          <h1 className="w-3/5 mt-8">3. Efficient content</h1>
          <div className="w-3/5  mt-4 text-justify">
            <span className="w-1/2 text-justify mr-20">


            The content of the website should attract only those users who are really interested in the content. Therefore, clear and efficient text can help prevent wasted time on the Internet and help reduce the associated waste of energy. Also, in the general maintenance of page content, care should be taken to delete content that is no longer used, so as not to keep the page load unnecessarily large. A suitable parameter for measuring the relevance of a page is the bounce rate. When people come to a website from an external source and leave without further interaction, this is called a bounce. A high bounce rate can have several reasons:
<br/><br/>1. The content of a website is structured in such a way that it mistakenly attracts users who were looking for something else.
<br/><br/>2. The website attracts the right target group of users, but the users search in vain for the content they are interested in and leave the website dissatisfied.
<br/><br/>3. The content loads so slowly that site visitors leave the site early.
The bounce rate is not necessarily a parameter that can be classified as good or bad. However, it can indicate that content improvements on the website are appropriate. Regular checking and maintenance of content should be as natural as the technical maintenance of a website.

            </span>
          </div>
          <h1 className="w-3/5 mt-8">4. User Experience</h1>
          <span className="w-3/5 text-justify mt-4 z-10">

          A well implemented user experience simplifies the use of a website and shortens the time users spend on it. After all, the longer users stay on a website, the more power is consumed by the devices used for this purpose. User tests, for example in the form of A/B tests, can help to identify weaknesses and analyze user behavior as early as the website design stage.
          </span>

          <h1 className="w-3/5 mt-8">5. Images</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
The average size of image files on websites is almost 1MB and thus accounts for about 5% of the average website size. Even though images often serve to clarify content or are of great importance in terms of design, a targeted use of images makes sense. There are a few aspects that can be taken into account when selecting images:
<br/><br/>1. Image size
WEBP is the most efficient image format for photographs and is 30% smaller than JPEG files. PNG format can also be used for logos, and the files can be reduced to a minimum using image compression tools.
<br/><br/>2. Image effects
Effects such as blurring or dithering can be used to reduce the image size and provide an interesting image effect. Blurring softens parts of the image, bringing an area of the image to the foreground, and dithering creates the illusion of color depth in images with a limited color palette.
The following examples shows how the dithering effect looks like:
          </span>
          <div className="w-3/5 my-4 flex gap-16">
            <Image src="/car.png" alt="Background Vector" width={371} height={371}/>
            <Image src="/dither_car.png" alt="Background Vector" width={371} height={371}/>
          </div>

          <span className="w-3/5 text-justify mt-4 z-10">3. Vector graphics
Especially vector graphics (SVGs) are often used as colorful illustrations. By manually editing the graphics, deleting unnecessary paths and elements, and using compression software, the size of the vector graphic can be reduced. The low-impact website of the company
Organic Basics illustrates that the use of SVGs is energy-saving. Depending on the server load of the website, SVGs of the products are displayed instead of images.


          </span>

          <h1 className="w-3/5 mt-8">6. Videos</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
            Videos are becoming increasingly popular as content formats. When videos are used, care should be taken not to autoplay the videos and reduce the length.
          </span>
          <h1 className="w-3/5 mt-8">7. Fonts</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          System fonts are not as diverse, but since they are already installed on users' devices, there is no need to load an additional file. Many variations of fonts should also be avoided. If font variations are used, however, variable fonts can help.  Variable fonts are designed to allow precise scaling of thickness and slant, so that infinite variations of a single font can be rendered from a single font file. The Variable Fonts website invites you to try them out .
          </span>
          <h1 className="w-3/5 mt-8">8. Colors</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          The use of light or dark colors makes a significant difference in terms of power consumption. Most laptop and smartphone screens use OLED technology. Black consumes less power on OLED screens because the LEDs that make up the individual pixels are turned off, whereas when white is displayed, the LEDs must be lit and consume power. Darker websites not only have a positive effect on sustainability, but also allow for better battery performance of the end device.</span>

          <h1 className="w-3/5 mt-8">9. Clean Code</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
            Understandable and simple programmed code with efficient queries is indispensable in the creation of efficient software. Not only the choice of programming language or framework is important, but also how this language is used. The code should be reusable, code duplications and dead code must be avoided. Tools like SonarQube can be used to test code quality. It also makes more sense for programmers to always maintain code quality and have a common understanding of good, clean code.
Many projects use libraries or frameworks in their code, which should also adhere to certain code standards. Unnecessary functions or even entire libraries that are not absolutely necessary should be avoided in order to prevent a bloated code base.
          </span>

          <h1 className="w-3/5 mt-8">10. Less JavaScript</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
            JavaScript not only contributes to reducing energy efficiency through the added file size, but also through the processing overhead of the language.
JavaScript is a client-side programming language, which means that the language is interpreted on the user's device, where it increases CPU usage, which in turn increases energy consumption. A group of Portuguese researchers compared programming languages and evaluated them in terms of energy efficiency. JavaScript is in the lower midfield in terms of energy efficiency. The language TypeScript , a typed form of JavaScript, scores even worse with 21.50 . Yet TypeScript is becoming increasingly popular in the use of frontend frameworks such as React or Vue. Especially when it comes to solving algorithmic problems, JavaScript does not fare badly. Especially the use of JS for animations or DOM manipulations affects the energy efficiency of a website negatively.

          </span>

          <h1 className="w-3/5 mt-8">11. Accelerated Mobile Pages (AMP)</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
            AMP is designed to make content load faster on mobile devices by removing unnecessary code and file weight and providing a minimalist version of the original web page. AMP can help especially with inefficiently programmed web pages.
          </span>


          <h1 className="w-3/5 mt-8">12. Static Websites</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          The CMS WordPress runs 34% of all websites on the Internet and is only one of many CMS that can be found on the Internet. CMS have the property that with each interaction a request is made to the database and the web pages are rendered accordingly dynamically. To minimize the energy consumption, the web pages can be written as static files in HTML, CSS and JavaScript. Or a static website generator or a specialized static web hoster can be used to convert the CMS-powered websites into static files.
          </span>

          <h1 className="w-3/5 mt-8">13. Progressive Web-App Technology</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          Progressive Web App technology allows websites to take advantage of features normally found only in native apps. For example, content is cached, which reduces the number of browser requests. This not only benefits the environment, but also improves loading speed and makes websites appear more stable when, for example, the Internet connection fluctuates or is unstable.
          </span>

          <h1 className="w-3/5 mt-8">14. Server caching</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          Server-side energy consumption can also be reduced, for example with caching technologies such as Varnish. Static versions of each page are pre-generated so that the server overhead can be significantly reduced for most visitors. This not only significantly reduces the server's energy consumption, but also significantly shortens page loading times.
          </span>

          <h1 className="w-3/5 mt-8">15. PUE Rating</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          The energy efficiency of data centers is usually evaluated using the so-called Power Usage Efficiency (PUE). The PUE value is determined by dividing the amount of energy fed into the data center by the amount of energy used to operate the computers in the data center. This reveals the amount of energy wasted on non-computing activities such as cooling. The typical PUE for a data center is about 1.67, meaning that for every 1.67 watts flowing into the data center, only 1 watt is used to run the computer systems. High-efficiency data centers, such as those operated by Google, can have a PUE value as high as 1.11. The PUE value can be decisive when choosing a hoster.
          </span>

          <h1 className="w-3/5 mt-8">16. Server location</h1>
          <span className="w-3/5 text-justify mt-4 z-10">
          A large proportion of the energy consumed on the Internet is used to transmit data via telecommunications networks. The closer the server center is to the user group, the shorter the transmission paths and the less energy is consumed. Particularly if you have a specific user group and are only of interest to German users, for example, a German server center can save an enormous amount of energy. energy can be saved by having a German server center.</span>

          <h4 className="w-3/5 mt-16 font-medium">Sources</h4>
          <span className="w-3/5 text-justify mt-4 z-10">TODO: add sources</span>

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
