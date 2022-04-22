import React from "react";
import Image from "next/image";

type CompareLayoutProps = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  content: string;
  imageFirst?: boolean;
}
export default function CompareLayout({imageSrc, imageWidth, imageHeight, content, imageFirst = true}: CompareLayoutProps) {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap w-3/5 mt-24">
        {imageFirst ?
          <>
            <div className="w-1/2 flex items-center justify-center">
              <Image src={imageSrc} alt="Mouse Scroll Vector" width={imageWidth} height={imageHeight}/>
            </div>
            <h2 className="w-1/2 font-medium flex items-center justify-center">{content}</h2>
          </> :
          <>
            <h2 className="w-1/2 font-medium flex items-center justify-center">{content}</h2>
            <div className="w-1/2 flex items-center justify-center">
              <Image src={imageSrc} alt="Mouse Scroll Vector" width={imageWidth} height={imageHeight}/>
            </div>
          </>
        }
      </div>
    </>
  )
}
