"use client";

import { useActionState } from 'react';
import { createUser } from '@/app/lib/actions';
import type { RegisterState } from '@/app/lib/actions';

export default function RegisterForm() {
  const initialState: RegisterState = { errors: {}, message: null };
  const [errorMessage, formAction] = useActionState(
      createUser,
      initialState,
  );

  return (
    <div className="w-bgL mx-auto">
      <div className="w-[400px] mt-[100px]">
        <p className="leading-[1] text-[32px] leading-[1.125] font-bold tracking-[-0.035em] max-lg:text-[28px] max-md:text-[24px]">Register page</p>
        <p className="mt-[20px] bg-bg p-[20px] rounded-[21px] text-[17px] text-light-gray-bg leading-[1.47059]">Discover the latest improvements and new APIs in Apple Pay. You&apos;ll discover enhancements to the Apple Pay eCommerce experience Discover the latest improvements and new APIs in Apple Pay. You&apos;ll discover enhancements to the Apple Pay eCommerce experience</p>
        <form action={formAction}>
          <input type="text" name="name" className="mt-[10px] bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Name"></input>
          <div className="">
            {errorMessage.errors?.name && errorMessage.errors.name.map((error: string) => 
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            )}
          </div>
          <input type="text" name="email" className="mt-[10px] bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Email"></input>
          <div className="">
            {errorMessage.errors?.email && errorMessage.errors.email.map((error: string) => 
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            )}
          </div>
          <input type="text" name="password" className="bg-bg border-0 text-gray text-[17px] font-normal p-[20px] rounded-[21px] w-full mt-[10px] leading-[1.4211] focus:outline-2 focus:outline-solid focus:outline-link focus:border-0 placeholder-light-gray-bg" placeholder="Password"></input>
          <div className="">
            {errorMessage.errors?.password && errorMessage.errors.password.map((error: string) => 
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            )}
          </div>
          <button className="cursor-pointer bg-bg rounded-[21px] w-full text-link p-[20px] mt-[10px]">Register</button>
          <div className="">
            {errorMessage.message && (
              <p className="text-sm text-red-500">{errorMessage.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
};