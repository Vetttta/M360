import Link from "next/link";
import { signOut } from '@/auth';

export default function Header() {
  return (
    <div className="bg-[#151516]">
      <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold text-[21px] tracking-[-0.035em]">M360</Link>
        <div className="flex [&_a]:text-[#fff] [&_a]:opacity-[0.92] [&_a]:text-[12px] [&_a]:leading-[23px] [&_a]:ml-[24px] [&_a]:no-underline">
          <Link href="/" className="hover:text-link">Products</Link>
          <Link href="/" className="hover:text-link">Cart</Link>
          <form className="flex" action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="text-[#fff] opacity-[0.92] text-[12px] leading-[23px] ml-[24px] hover:text-link cursor-pointer bg-transparent border-0"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};