'use client'

import { useState, useEffect, useRef } from "react";
import { Items } from "@/app/ui/items";
import { ItemsList } from "@/app/ui/itemsList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { HiSearch } from "react-icons/hi";

export function List() {
  const [search, setSearch] = useState<string>('');
  const [option, setOption] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterButton = () => {
    setIsOpen(!isOpen);
  }

  const list: string[] = [
    '2026',
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2020'
  ]

  const filteredItems = Items.filter((item) => {
  const query = search.trim().toLowerCase();

  const matchesSearch =
    !query ||
    [
      String(item.id),
      item.name,
      item.description,
      String(item.price),
    ].some((value) => value.toLowerCase().includes(query));

    const matchesYear =
      !option || option === 'All Years' || item.year === option;

    return matchesSearch && matchesYear;
  });

  const itemsPerPage = 5;

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  const safeCurrentPage = Math.min(Number(currentPage) || 1, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  return (
    <div>
      <div className="pt-[20px] flex items-center [&_a]:text-gray [$_a]:no-underline max-md:flex-wrap">
        <div className="relative max-md:w-full">
          <input type="text" className="bg-bg text-gray rounded-[12px] h-[50px] max-md:max-w-[400px] max-md:w-full w-[400px] border-none text-[17px] pl-[50px] placeholder-light-gray-bg focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 max-lg:text-[15px]" placeholder="Search items..." value={search} onChange={(e) => {setSearch(e.target.value)}}/>
          <span className="absolute left-[16px] -translate-y-[40%] top-[47%] text-light-gray-bg"><HiSearch size={20}/></span>
        </div>
        <div className="ml-[10px] relative max-md:ml-[0px] max-md:mt-[10px]" ref={filterRef}>
          <button className={`bg-bg h-[50px] w-[200px] text-[17px] border-none text-left text-light-gray-bg pl-[16px] rounded-[12px] cursor-pointer relative max-lg:text-[15px] ${isOpen ? 'rounded-t-[12px] rounded-b-[0px]' : ''} ${option ? '!text-gray' : ''}`} onClick={filterButton}>{option || "Filter"} <span className="arrow-icon absolute right-[16px] -translate-y-[50%] top-[50%] text-light-gray-bg">{isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}</span></button>
          <ul className={`invisible shadow-[0_10px_30px_0_rgba(0,0,0,0.15)] absolute w-full h-auto max-h-[228px] left-[0px] top-full bg-bg p-[8px] border-t border-solid border-[#242424] rounded-b-[12px] overflow-auto z-[9990] ${isOpen ? 'open visible' : ''}`}>
            {['All Years', ...list].map((year) => {
              return (
                <li className="list-none mb-[4px]" key={year}>
                  <button className="cursor-pointer p-[8px] w-full text-left bg-none border-0 text-gray text-[17px]" onClick={() => {
                    setOption(year);
                    setIsOpen(false);
                    }}>
                    <span>{year}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="ml-[26px] text-link cursor-pointer text-[17px] max-lg:text-[15px] max-md:ml-[0px] max-md:my-[auto] max-md:pt-[10px] max-md:ml-[26px]" onClick={() => {
          setSearch('');
          setOption('');
          }}>Reset</p>
      </div>
      <div className="h-[483px] max-md:h-[760px]">
        <div className="grid grid-cols-[5fr_6fr_2fr] text-light-gray-bg mt-[40px] gap-x-[20px] mb-[10px] text-[17px] py-[16px] max-lg:text-[15px]">
          <p>Name</p>
          <p className="max-md:hidden">Description</p>
          <p className="max-md:hidden">Cost</p>
        </div>
        <div className="h-full">
          {paginatedItems.length === 0 
            ? <div className="flex justify-center items-center h-full w-full">
                <p className="text-light-gray-bg text-[17px] max-lg:text-[15px]">No items found</p>
              </div> 
            : <ItemsList filteredItems={paginatedItems} />
          }
        </div>
      </div>
      <div className="mt-[56px]">
        <div className="flex justify-between items-center max-w-[280px] mx-auto">
          <div className="text-light-gray-bg cursor-pointer" onClick={() => setCurrentPage(String(Math.max(1, safeCurrentPage - 1)))}><LuArrowLeft size={24} /></div>
          <div className="flex items-center text-[17px]">
            <input className="h-[31px] text-center w-[27px] rounded-[4px] bg-transparent border border-[rgba(134,134,139,0.4)] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 text-gray mr-[12px] text-[17px]" type="text" value={currentPage} onChange={(e) => setCurrentPage(e.target.value.replace(/[^\d]/g, '').replace(/^0+/, ''))}/>
            <p>
              <span>of</span>
              <span className="ml-[12px]">{totalPages}</span>
            </p>
          </div>
          <div className="text-light-gray-bg cursor-pointer" onClick={() => setCurrentPage(String(Math.min(totalPages, safeCurrentPage + 1)))}><LuArrowRight size={24} /></div>
        </div>
      </div>
    </div>
  )
}