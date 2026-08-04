'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Items } from "@/app/ui/items";
import { IoIosArrowForward } from "react-icons/io";

export default function PaymentPage() {
  const { id } = useParams();
  const product = Items.find((item) => {
    return item.id === Number(id);
  });
  const [isOpen, setIsOpen] = useState(false);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div>
      <div className="h-[1356px]">
        <div className="bg-bg border-b-[1px] border-b-[#242424]">
          <div className="flex items-center max-w-bgL mx-auto pt-[28px] pb-[18px] max-md:w-[87.5%]">
            <div className="h-[85px] w-[85px] rounded-[16px] overflow-hidden mr-[24px] shrink-0">
              <div className="w-[85px] h-[85px] bg-[#151516]"/>
            </div>
            <p className="text-[28px] font-bold tracking-[-0.035em] max-md:text-[21px] leading-[1.19]">{product.name}</p>
          </div>
          <div className="flex pt-[4px] pb-[20px] max-w-bgL mx-auto [&_p]:mr-[20px] [&_p]:text-[15px] [&_p]:font-medium [&_p]:cursor-pointer [&_p]:tracking-[-0.035em] max-md:w-[87.5%] whitespace-nowrap flex-wrap">
            <p className="hover:text-link">Payment method</p>
            <p className="hover:text-link">News</p>
            <p className="hover:text-link">Listen on Apple Podcasts +</p>
          </div>
        </div>
        <div className="bg-[#000]">
          <div className="max-w-bgL mx-auto pt-[98px] pb-[56px] max-md:w-[87.5%] max-md:pt-[54px] max-md:pb-[24px] max-lg:pt-[64px] max-lg:pb-[44px]">
            <p className="text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Payment method</p>
            <div className="max-w-[450px]">
              <div className="bg-bg rounded-[21px] flex items-center p-[20px] mt-[20px] cursor-pointer justify-between leading-[1.4211] w-full">
                  <p className="text-[17px] text-light-gray-bg leading-[1.47059]">Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience</p>
              </div>
              {!isOpen ? (
                <div>
                  <p className="text-light-gray-bg text-[12px] font-semibold mt-[20px] pl-[20px] leading-[1.33337]">PAYMENT METHOD</p>
                  <div className="bg-bg rounded-[21px] flex items-center p-[20px] mt-[10px] cursor-pointer justify-between leading-[1.4211]" onClick={() => setIsOpen(true)}>
                    <div className="flex items-center">
                      <div>
                        <p className="text-[17px] text-gray font-normal">Debit Card</p>
                        <p className="text-[17px] text-light-gray-bg mt-[2px]">**** 1234</p>
                      </div>
                    </div>
                    <div className="text-light-gray-bg flex">
                      <IoIosArrowForward size={24} />
                    </div>
                  </div>
                  <Link href="/" className="bg-bg rounded-[21px] flex items-center p-[20px] mt-[10px] cursor-pointer justify-between leading-[1.4211]">
                    <p className="text-link text-[17px]">Buy for $4,99</p>
                  </Link>
                  <p className="text-light-gray-bg text-[12px] max-w-[450px] mt-[10px] px-[20px] leading-[1.33337]">Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience</p>
                </div>
              ) : (
                <div>
                  <p className="text-light-gray-bg text-[12px] font-semibold mt-[20px] pl-[20px] leading-[1.33337]">CHOOSE YOUR CARD</p>
                  <div>
                    <input className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Your name"></input>
                    <input className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Your card number"></input>
                    <p className="text-light-gray-bg text-[12px] px-[20px] mt-[10px]">Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience</p>
                    <div className="flex gap-[10px] mt-[10px]">
                      <input className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="CVV"></input>
                      <input className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Date"></input>
                    </div>
                    <div className="flex justify-end">
                      <button onClick={() => setIsOpen(false)} className="text-link bg-bg border-0 px-[20px] py-[21px] rounded-[21px] text-[17px] mt-[10px] cursor-pointer">Save card</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}