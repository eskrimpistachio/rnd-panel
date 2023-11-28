'use client';

import Image from 'next/image';
import { authenticate } from '../lib/actions';
import { useFormState } from 'react-dom';

export default function Home() {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="bg-base-40 h-[100vh] text-white">
      <div className="flex flex-col mx-16 md:flex-row py-16 justify-center">
        <Image
          src="/login-img.png"
          alt="missing img"
          width={300}
          height={300}
          className="rounded-xl hidden md:flex"
        />
        <div className="bg-primary-20 rounded-xl py-8 px-8 flex flex-col gap-8">
          <h1 className="font-bold text-xl">Login</h1>
          <form action={formAction} className="flex flex-col gap-4 md:w-[25vw]">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="border-2 border-white bg-primary-20 text-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                className="border-2 border-white bg-primary-20 text-white rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-white rounded-lg text-black font-bold text-lg py-2 w-36 mx-auto mt-8"
            >
              Login
            </button>
            {/* {state && state} */}
          </form>
        </div>
      </div>
    </div>
  );
}
