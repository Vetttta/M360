import RegisterForm from "@/app/ui/register-form";

export default function Page() {
  return (
    <div className="">
      <div className="bg-[#151516]">
        <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
          <p className="font-semibold text-[21px] tracking-[-0.035em]">M360</p>
        </div>
      </div>
        <div className="bg-bg p-[20px]">
        <p className="text-[17px] w-bgL mx-auto text-light-gray-bg leading-[1.35]">Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience Discover the latest improvements and new APIs in Apple Pay. You'll discover enhancements to the Apple Pay eCommerce experience</p>
      </div>
      <RegisterForm />
    </div>
  )
};