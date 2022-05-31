import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";


export default function Menu() {
  const router = useRouter();
  const [showMenuItems, setShowMenuItems] = React.useState(false);

  return (
    <div className="flex md:items-center justify-between w-full h-[170px] h-fit z-20">
      <span className="text-dark-green font-bold">        <a href="/"
                                                             target="_self"
                                                             rel="noopener noreferrer">Green Website</a></span>
      <div className="md:flex items-center gap-8 cursor-pointer hidden">
        <a
          href="/"
          target="_self"
          rel="noopener noreferrer"
          className={router.pathname == "/" ? "active" : ""}
        >Home</a>
        <a href="/developer"
           target="_self"
           rel="noopener noreferrer"
           className={router.pathname == "/developer" ? "active" : ""}>Developer</a>
        <a href="/user"
           target="_self"
           rel="noopener noreferrer" className={router.pathname == "/user" ? "active" : ""}>User</a>
        <a href="/extension"
           target="_self"
           rel="noopener noreferrer" className={router.pathname == "/extension" ? "active" : ""}>Browser extension</a>
      </div>
      <div className="flex flex-col items-end md:hidden">
        <button className="cursor-pointer" onClick={() => setShowMenuItems(!showMenuItems)}>
          {showMenuItems ? <Image src="/close.svg" alt="Background Flower Vector" width={20} height={20}/> :  <Image src="/menu.svg" alt="Background Flower Vector" width={20} height={20}/> }
        </button>

        {showMenuItems &&
        <div className="flex flex-col items-end gap-2 cursor-pointer">
            <a
                href="/"
                target="_self"
                rel="noopener noreferrer"
                className={router.pathname == "/" ? "active" : ""}
            >Home</a>
            <a href="/developer"
               target="_self"
               rel="noopener noreferrer"
               className={router.pathname == "/developer" ? "active" : ""}>Developer</a>
            <a href="/user"
               target="_self"
               rel="noopener noreferrer" className={router.pathname == "/user" ? "active" : ""}>User</a>
            <a href="/extension"
               target="_self"
               rel="noopener noreferrer" className={router.pathname == "/extension" ? "active" : ""}>Browser
                extension</a>
        </div>}
      </div>
    </div>
  )
}
