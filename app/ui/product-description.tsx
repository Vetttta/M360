"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProductTable } from "@/app/lib/data";

export default function ProductDescription({ product }: { product: ProductTable }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-bg border-b-[#242424] border-b-[1px]">
      <div className="flex max-w-bgL mx-auto py-[40px] max-md:block max-md:max-w-[692px] max-lg:py-[36px] max-md:pt-[24px] max-md:pb-[26px]">
        <div className="max-md:max-w-[428px] max-md:w-[87.5%] max-md:mx-auto">
          <div className="max-w-[95%] min-w-min w-max rounded-[20px] overflow-hidden">
            <div className="w-[285px] h-[285px] block max-lg:max-w-[215px] max-md:max-w-[200px] max-lg:max-h-[215px] max-md:max-h-[200px] max-md:rounded-[20px] bg-[#151516]"/>
          </div>
        </div>
        <div className="ml-[56px] flex flex-wrap mr-auto max-w-bgL h-fit max-md:mx-auto max-md:pt-[22px] max-md:w-[87.5%] max-md:max-w-[428px] max-lg:ml-[34px]">
          <div className="text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] text-light-gray uppercase max-lg:pb-[8px]">PODCAST</div>
          <div className="block w-full">
            <p className="text-[32px] leading-[1.125] font-bold tracking-[-0.035em] mb-[8px] max-lg:text-[28px] max-md:text-[24px]">{product.name}</p>
            <p className="text-[gray] text-[19px] leading-[1.21053] font-semibold tracking-[-0.035em] max-lg:text-[17px]">Release date: {product.release_date}</p>
            <p className="mt-[6px] mb-[28px] flex flex-wrap">
              <Link href="/" className="text-[15px] leading-[27px] self-center text-gray tracking-[-0.024em] max-w-[280px] mt-[18px] no-underline font-normal max-lg:mt-[16px]">Listen on Apple Podcasts</Link>
            </p>
          </div>
          <div className="block w-full flex-initial">
            <p className={`text-[18px] leading-[1.4211] font-normal tracking-[-0.035em] max-h-[80px] overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#0D0D0E] after:to-transparent after:to-[50%] max-lg:text-[15px] max-md:text-[17px] max-lg:max-h-[130px] ${isOpen ? "after:hidden max-h-none max-lg:max-h-none" : ""}`}>
              {product.description}
            </p>
            {isOpen && 
              <div className="w-[242px]">
                <p className="text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] text-light-gray uppercase mt-[36px] max-lg:mt-[32px]">Release Date</p>
                <p className="text-[19px] leading-[1.4211] font-normal tracking-[-0.035em] mt-[8px] max-lg:text-[15px]">{product.release_date}</p>
              </div>
            }
            <button className={`bg-transparent text-link text-[19px] leading-[1.4211] font-normal tracking-[-0.02em] inline-flex relative z-[5] border-0 cursor-pointer flex items-center hover:underline max-lg:text-[15px] max-md:text-[17px] ${isOpen ? "mt-[36px]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Hide...' : 'View more...'} 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};