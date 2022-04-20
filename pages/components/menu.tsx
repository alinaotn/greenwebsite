import React from "react";

export default function Menu() {
  return (
    <div>
      <div className="flex items-center justify-between w-full font-bold">
        <span className="text-dark-green">Green Website</span>
        <div className="flex items-center gap-8 cursor-pointer">
          <span>Home</span>
          <span>Developers</span>
          <span>Users</span>
          <span>Browser Extension</span>
        </div>
      </div>
    </div>
  )
}
