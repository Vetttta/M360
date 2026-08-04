'use client'

import Link from "next/link";
import { BsBoxSeam } from "react-icons/bs";

interface Item {
  id: number,
  name: string,
  description: string,
  price: number
}

interface ItemsList {
  filteredItems: Item[]
}

export function ItemsList({ filteredItems }: ItemsList) {
  return (
    filteredItems.map((Item) => {
      return (
        <Link href={`/products/${Item.id}`} key={Item.id}>
          <div className="grid grid-cols-[5fr_6fr_2fr] gap-x-[20px] text-[17px] py-[16px] border-t border-[#242424] leading-[1.47059] h-[83px] max-lg:text-[15px] max-md:flex max-md:h-[152px] flex-col max-md:justify-center">
            <div className="text-link flex items-center">
              <div className="flex items-center">
                <div className="ml-[8px] mr-[16px]">
                  <BsBoxSeam size="24px" />
                </div>
                <p className="line-clamp-2 overflow-hidden">
                  {Item.name}
                </p>
              </div>
            </div>
            <div className="flex items-center max-md:ml-[48px] max-md:mt-[4px]">
              <p className="line-clamp-2 overflow-hidden">
                {Item.description}
              </p>
            </div>
            <div className="flex items-center max-md:ml-[48px] max-md:mt-[4px]">
              <div className="line-clamp-2 overflow-hidden">
                {`$${Item.price}`}
              </div>
            </div>
          </div>
        </Link>
      )
    })
  )
}