import Link from "next/link";
import { BsBoxSeam } from "react-icons/bs";
import { fetchFilteredProducts } from "@/app/lib/data";

export default async function ProductsList({
  query,
  currentPage,
  option,
}: {
  query: string;
  currentPage: number;
  option: string;
}) {
  const products = await fetchFilteredProducts(query, currentPage, option);

  return (
    <div className="h-[523px] max-md:h-[865px]">
      <div className="grid grid-cols-[5fr_6fr_2fr] text-light-gray-bg mt-[40px] gap-x-[20px] mb-[10px] text-[17px] py-[16px] max-lg:text-[15px]">
        <p>Name</p>
        <p className="max-md:hidden">Description</p>
        <p className="max-md:hidden">Cost</p>
      </div>
      <div>
        {products.length === 0 ? (
          <div className="flex justify-center items-center h-full w-full py-[32px]">
            <p className="text-light-gray-bg text-[17px] max-lg:text-[15px]">
              No items found
            </p>
          </div>
        ) : (
          products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="grid grid-cols-[5fr_6fr_2fr] gap-x-[20px] text-[17px] py-[16px] border-t border-[#242424] leading-[1.47059] h-[83px] max-lg:text-[15px] max-md:flex max-md:h-[152px] flex-col max-md:justify-center">
                <div className="text-link flex items-center">
                  <div className="flex items-center">
                    <div className="ml-[8px] mr-[16px]">
                      <BsBoxSeam size="24px" />
                    </div>
                    <p className="line-clamp-2 overflow-hidden">
                      {product.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center max-md:ml-[48px] max-md:mt-[4px]">
                  <p className="line-clamp-2 overflow-hidden">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center max-md:ml-[48px] max-md:mt-[4px]">
                  <div className="line-clamp-2 overflow-hidden">
                    {`$${product.price}`}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}