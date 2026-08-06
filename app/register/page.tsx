import RegisterForm from "@/app/ui/register-form";

export default function Page() {
  return (
    <div className="">
      <div className="bg-[#151516]">
        <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
          <p className="font-semibold text-[21px] tracking-[-0.035em]">M360</p>
        </div>
      </div>
      <RegisterForm />
    </div>
  )
};