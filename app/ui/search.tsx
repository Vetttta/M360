"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, useRef } from "react";
import { HiSearch } from "react-icons/hi";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>(searchParams.get('query')?.toString() || '');
  const [option, setOption] = useState<string>(searchParams.get('option')?.toString() || '');

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

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const handleOption = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('option', term);
    } else {
      params.delete('option');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const handleReset = () => {
    replace(pathname, { scroll: false });
    setOption('');
    setSearch('');
  };

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
  ];

  return (
    <div className="pt-[20px] flex items-center [&_a]:text-gray [$_a]:no-underline max-md:flex-wrap">
      <div className="relative max-md:w-full">
        <input
          type="text"
          className="bg-bg text-gray rounded-[12px] h-[50px] max-md:max-w-[400px] max-md:w-full w-[400px] border-none text-[17px] pl-[50px] placeholder-light-gray-bg focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 max-lg:text-[15px]" 
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearch(e.target.value);
          }}
          value={search}
        />
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
                  handleOption(year === "All Years" ? "" : year);
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
        handleReset();
        }}>Reset</p>
    </div>
  )
};