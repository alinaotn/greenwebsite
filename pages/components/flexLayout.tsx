import React from "react";

export default function FlexLayout({children}: React.PropsWithChildren<{}>) {
  return (
    <>
      <main className="flex items-center justify-center h-screen gap-6 flex-wrap">{children}</main>
    </>
  )
}
