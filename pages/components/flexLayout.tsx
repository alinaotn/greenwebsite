import React from "react";

type FlexLayoutProps = {
  isCol?: boolean;
  isFlexWrap?: boolean;
}
export default function FlexLayout({children, isCol = false, isFlexWrap = false}: React.PropsWithChildren<{}> & FlexLayoutProps) {
  return (
    <>
      <main className={`flex items-center justify-center gap-6 ${isCol && 'flex-col'} ${isFlexWrap && 'flex-wrap'}`}>{children}</main>
    </>
  )
}
