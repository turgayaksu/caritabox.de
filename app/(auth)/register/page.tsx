"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components";
import RegisterForm from "./form";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-full min-h-[800px] w-screen items-center justify-center">
      <div className="w-4/5 rounded-lg border border-slate-200/70 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:w-4/6 lg:w-3/6 xl:w-2/5">
        <div className="text-center text-xl font-semibold">
          Caritabox Kundenkonto anlegen
        </div>
        <div className="mt-2 text-center text-sm text-slate-600">
          Super, dass Sie sich dazu entschieden haben ein Kundenkonto anzulegen.
          Somit können Sie jederzeit die Produktauswahl, die Lieferadresse sowie
          Ihren Lieferrythmus anpassen.
        </div>
        <div className="mt-8 flex flex-col space-y-10">
          <div className="flex flex-col">
            <div className="animation flex w-full flex-col">
              <RegisterForm />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className='relative mb-3 flex justify-center text-center before:mr-3 before:mt-3 before:h-px before:w-full before:bg-slate-300 before:content-[""] after:ml-3 after:mt-3 after:h-px after:w-full after:bg-slate-300 after:content-[""] dark:before:border-b-slate-800 dark:before:bg-slate-700 dark:after:border-b-slate-800 dark:after:bg-slate-700'>
              OR
            </div>
            <div className="flex flex-row gap-3">
              <Button
                type="submit"
                outline
                label="Weiter Breite Google"
                icon={FcGoogle}
                onClick={() => signIn("google", { callbackUrl: "/account" })}
              />
            </div>
            <div
              className="animation mt-3 flex w-full cursor-pointer items-center justify-center font-light text-slate-500 hover:text-slate-900 hover:underline"
              onClick={() => {
                router.push("/");
              }}
            >
              Zurück zur Homepage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
