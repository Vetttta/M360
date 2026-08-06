"use client";

import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"; 

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    if (Number(pageNumber) < 1 || Number(pageNumber) > totalPages) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };

  return (
    <div className="mt-[56px]">
      <div className="flex justify-between items-center max-w-[280px] mx-auto">
        <div className="text-light-gray-bg cursor-pointer" onClick={() => createPageURL(currentPage - 1)}><LuArrowLeft size={24} /></div>
        <div className="flex items-center text-[17px]">
          <input className="h-[31px] text-center w-[27px] rounded-[4px] bg-transparent border border-[rgba(134,134,139,0.4)] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 text-gray mr-[12px] text-[17px]" type="text" value={currentPage} onChange={(e) => createPageURL(e.target.value.replace(/[^\d]/g, '').replace(/^0+/, ''))}/>
          <p>
            <span>of</span>
            <span className="ml-[12px]">{totalPages}</span>
          </p>
        </div>
        <div className="text-light-gray-bg cursor-pointer" onClick={() => createPageURL(currentPage + 1)}><LuArrowRight size={24} /></div>
      </div>
    </div>
  )
}