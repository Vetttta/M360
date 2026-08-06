"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function CardForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    !isOpen ? (
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
              )
  )
}