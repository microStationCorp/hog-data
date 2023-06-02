"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function LogoutPage() {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400 text-center">
        <Button
          variant={"outline"}
          onClick={() => {
            setClicked(true);
            signOut({
              callbackUrl: "/",
            });
          }}
          disabled={isClicked}
        >
          {isClicked ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              wait
            </>
          ) : (
            "Log out"
          )}
        </Button>
      </div>
    </>
  );
}
