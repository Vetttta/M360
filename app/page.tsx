'use client'

import { List } from "@/app/ui/list";

export default function HomePage() {
  return (
    <div>
      <div className="bg-bg py-[56px] border-b-[#242424] border-b-[1px]">
        <div className="max-w-bgL mx-auto max-md:w-[87.5%]">
          <p className="text-[32px] tracking-[-0.035em] font-medium mb-[10px] max-lg:text-[28px] max-md:text-[24px]">Filtered items</p>
          <p className="text-[21px] tracking-[-0.035em] leading-[1.47059] max-lg:text-[15px] max-md:text-[17px]">An anthology series about the immigrant experience hosted by Kumail Nanjiani. Each episode brings you a different story, from the weird and humorous to the gut-wrenching and poignant An anthology series about the immigrant experience hosted by Kumail Nanjiani. Each episode brings you a different story, from the weird and humorous to the gut-wrenching and poignant.</p>
        </div>
      </div>
      <div className="bg-[#000]">
        <div className="max-w-bgL mx-auto pt-[98px] pb-[56px] max-md:w-[87.5%] max-md:py-[54px] max-lg:py-[64px]">
          <p className="text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Other items</p>
          <List />
        </div>
      </div>
    </div>
  )
}