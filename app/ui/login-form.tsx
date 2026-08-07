"use client";

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="max-w-bgL mx-auto max-md:w-[87.5%] max-md:max-w-[428px]">
      <div className="max-w-[400px] mt-[98px] mb-[56px] max-lg:mt-[64px] max-lg:mb-[44px] max-md:my-[54px]">
        <p className="leading-[1] text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Login page</p>
        <p className="mt-[20px] bg-bg p-[20px] rounded-[21px] text-[17px] text-light-gray-bg leading-[1.35]">An interactive product catalog application featuring user authentication, search filtering, and dynamic routing. Built as a portfolio project to demonstrate core skills in developing modern web applications with Next.js and the React ecosystem.</p>
        <form action={formAction}>
          <input type="text" name="email" className="mt-[10px] bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Email"></input>
          <input type="text" name="password" className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Password"></input>
          <button className="cursor-pointer bg-bg rounded-[21px] w-full text-link p-[20px] mt-[10px]">Login</button>
          {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  )
}