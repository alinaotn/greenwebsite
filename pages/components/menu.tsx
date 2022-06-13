import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from 'next/link'

export default function Menu() {
  const router = useRouter();
  const [showMenuItems, setShowMenuItems] = React.useState(false);

  return (
    <div className="flex md:items-center justify-between w-full h-[170px] md:h-fit z-30">
      <span className="text-dark-green font-bold">
        <Link href="/">
        <a
          target="_self"
          rel="noopener noreferrer">Green Website</a>
        </Link>
       </span>
      <div className="md:flex items-center gap-8 cursor-pointer hidden">
        <Link href="/">
          <a
            target="_self"
            rel="noopener noreferrer"
            className={router.pathname == "/" ? "active" : ""}
          >Home</a>
        </Link>
        <Link href="/developer">
          <a
            target="_self"
            rel="noopener noreferrer"
            className={router.pathname == "/developer" ? "active" : ""}>Developer</a></Link>
        <Link href="/user">
          <a
            target="_self"
            rel="noopener noreferrer" className={router.pathname == "/user" ? "active" : ""}>User</a></Link>
        <Link href="/extension">
          <a
            target="_self"
            rel="noopener noreferrer" className={router.pathname == "/extension" ? "active" : ""}>Browser extension</a></Link>
      </div>
      <div className="flex flex-col items-end md:hidden">
        <button className="cursor-pointer" onClick={() => setShowMenuItems(!showMenuItems)}>
          {showMenuItems ? <Image src="/close.svg" alt="Background Flower Vector" width={20} height={20}/> :
            <Image src="/menu.svg" alt="Background Flower Vector" width={20} height={20}/>}
        </button>

        {showMenuItems &&
        <div className="flex flex-col items-end gap-2 cursor-pointer">
            <Link href="/">
                <a
                    target="_self"
                    rel="noopener noreferrer"
                    className={router.pathname == "/" ? "active" : ""}
                >Home</a></Link>
            <Link href="/developer">
                <a
                    target="_self"
                    rel="noopener noreferrer"
                    className={router.pathname == "/developer" ? "active" : ""}>Developer</a></Link>
            <Link href="/user">
                <a
                    target="_self"
                    rel="noopener noreferrer" className={router.pathname == "/user" ? "active" : ""}>User</a></Link>
            <Link href="/extension">
                <a
                    target="_self"
                    rel="noopener noreferrer" className={router.pathname == "/extension" ? "active" : ""}>Browser
                    extension</a></Link>
        </div>}
      </div>
    </div>
  )
}
