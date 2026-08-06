import LoginForm from "@/app/ui/login-form";

export default function Page() {
  return (
    <div>
      <div className="bg-[#151516]">
        <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
          <p className="font-semibold text-[21px] tracking-[-0.035em]">M360</p>
        </div>
      </div>
      <div className="bg-bg py-[22px]">
        <p className="mx-auto text-[17px] text-light-gray-bg leading-[1.35] max-w-[1024px] px-[22px]">Discover the latest improvements and new APIs in Apple Pay. You&apos;ll discover enhancements to the Apple Pay eCommerce experience Discover the latest improvements and new APIs in Apple Pay. You&apos;ll discover enhancements to the Apple Pay eCommerce experience</p>
      </div>
      <LoginForm />
    </div>
  )
};