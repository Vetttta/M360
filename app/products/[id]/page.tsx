import ProductsList from "@/app/ui/products-list";
import ProductDescription from "@/app/ui/product-description";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { fetchProductsPages } from "@/app/lib/data";
import { getProductById } from "@/app/lib/actions";

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
  const params = await props.params;
  const query = searchParams?.query || '';
  const option = searchParams?.option || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query, option);
  const id = params?.id || '';
  const product = await getProductById(id);

  if (!product) {
    return <div>Товар не найден</div>;
  };
  
  return (
    <div>
      <div>
        <ProductDescription product={product} />
        <div className="flex">
          <div className="flex flex-col mt-[98px] mx-auto mb-[56px] w-bgL max-md:max-w-[428px] max-md:w-[87.5%] max-lg:mt-[64px] max-lg:my-auto max-lg:mb-[44px] max-md:my-[54px]">
            <p className="text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Other Items</p>
            <Search placeholder="Search products..." />
            <ProductsList query={query} currentPage={currentPage} option={option} />
            <Pagination totalPages={totalPages}/>
          </div>
        </div>
      </div>
    </div>
  )
};