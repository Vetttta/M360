import RegisterForm from "@/app/ui/register-form";

export default function Page() {
  return (
    <div>
      <div className="bg-[#151516]">
        <div className="h-[52px] w-full max-w-[1024px] px-[22px] mx-auto flex items-center justify-between">
          <p className="font-semibold text-[21px] tracking-[-0.035em]">M360</p>
        </div>
      </div>
      <div className="bg-bg py-[22px]">
        <p className="text-[17px] mx-auto text-light-gray-bg leading-[1.35] max-w-[1024px] px-[22px]">An interactive product catalog application featuring user authentication, search filtering, and dynamic routing. Built as a portfolio project to demonstrate core skills in developing modern web applications with Next.js and the React ecosystem.</p>
      </div>
      <RegisterForm />
    </div>
  )
};