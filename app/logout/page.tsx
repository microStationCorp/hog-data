"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  return (
    <>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400 text-center">
        <Button
          variant={"outline"}
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Log Out
        </Button>
      </div>
    </>
  );
}
