import React from "react";
import Image from "next/image";

type CompareLayoutProps = {
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  content: string;
  imageFirst?: boolean;
  maxWidth?: string;
  maxHeight?: string;
}
export default function CompareLayout({
                                        imageSrc,
                                        imageWidth = 100,
                                        imageHeight = 100,
                                        content,
                                        imageFirst = true,
                                        maxWidth,
                                        maxHeight,
                                        children
                                      }: React.PropsWithChildren<{}> & CompareLayoutProps) {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-center flex-wrap w-4/5 md:w-3/5 mt-24">
        {imageFirst ?
          <>
            <div className={`md:w-1/2 flex items-center justify-center relative ${maxWidth} ${maxHeight} md:max-w-[100%] md:max-h-[100%] mb-8 md:mb-0`}>
              {imageSrc && <Image src={imageSrc} alt="Compare Image" width={imageWidth} height={imageHeight}/>}
              {children}
            </div>
            <h2 className="md:w-1/2 font-medium flex items-center justify-center">{content}</h2>
          </> :
          <>
            <h2 className="md:w-1/2 font-medium flex items-center justify-center">{content}</h2>
            <div className="md:w-1/2 flex items-center justify-center">
              {imageSrc && <Image src={imageSrc} alt="Compare Image" width={imageWidth} height={imageHeight}/>}
              {children}
            </div>
          </>
        }
      </div>
    </>
  )
}
