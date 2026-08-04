import Link from "next/link";

export function Header() {
  return (
    <div className="bg-[#151516]">
      <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold text-[21px] tracking-[-0.035em]">M360</Link>
        <div className="[&_a]:text-[#fff] [&_a]:opacity-[0.92] [&_a]:text-[12px] [&_a]:leading-[23px] [&_a]:ml-[24px] [&_a]:no-underline">
          <Link href="/" className="hover:text-link">Products</Link>
          <Link href="/" className="hover:text-link">Cart</Link>
          <Link href="/" className="hover:text-link">About</Link>
        </div>
      </div>
    </div>
  )
}