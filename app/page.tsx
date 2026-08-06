import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import ProductsList from "@/app/ui/products-list";
import { fetchProductsPages } from "@/app/lib/data";
import Header from "@/app/ui/header";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
  searchParams?: Promise<{
    query?: string;
    page?: string;
    option?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const option = searchParams?.option || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query, option);

  return (
    <div>
      <Header />
      <div className="bg-bg py-[56px] border-b-[#242424] border-b-[1px]">
        <div className="max-w-bgL mx-auto max-md:w-[87.5%]">
          <p className="text-[32px] tracking-[-0.035em] font-medium mb-[10px] max-lg:text-[28px] max-md:text-[24px]">Filtered items</p>
          <p className="text-[21px] tracking-[-0.035em] leading-[1.47059] max-lg:text-[15px] max-md:text-[17px]">An anthology series about the immigrant experience hosted by Kumail Nanjiani. Each episode brings you a different story, from the weird and humorous to the gut-wrenching and poignant An anthology series about the immigrant experience hosted by Kumail Nanjiani. Each episode brings you a different story, from the weird and humorous to the gut-wrenching and poignant.</p>
        </div>
      </div>
      <div className="bg-[#000]">
        <div className="max-w-bgL mx-auto pt-[98px] pb-[56px] max-md:w-[87.5%] max-md:py-[54px] max-lg:py-[64px]">
          <p className="text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Other items</p>
          <Search placeholder="Search products..." />
          <ProductsList query={query} currentPage={currentPage} option={option} />
          <Pagination totalPages={totalPages}/>
        </div>
      </div>
    </div>
  )
};