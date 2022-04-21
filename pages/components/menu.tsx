import React from "react";
import {useRouter} from "next/router";


export default function Menu() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-dark-green font-bold">Green Website</span>
      <div className="flex items-center gap-8 cursor-pointer">
        <a
          href="/"
          target="_self"
          rel="noopener noreferrer"
          className={router.pathname == "/" ? "active" : ""}
        >Home</a>
        <a href="/"
           target="_self"
           rel="noopener noreferrer"
           className={router.pathname == "/developers" ? "active" : ""}>Developers</a>
        <a href="/"
           target="_self"
           rel="noopener noreferrer" className={router.pathname == "/users" ? "active" : ""}>Users</a>
        <a href="/"
           target="_self"
           rel="noopener noreferrer" className={router.pathname == "/extension" ? "active" : ""}>Browser extension</a>
      </div>
    </div>
  )
}
