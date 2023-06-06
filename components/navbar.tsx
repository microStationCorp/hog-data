"use client";

import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <>
      <Sheet>
        <div className="border-b-2 flex items-center justify-between px-8 mb-5">
          <div className="text-2xl py-4">HOG Data</div>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <AlignJustify size={24} />
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent
          position={"right"}
          className="w-5/6 sm:w-1/2 md:w-1/3 xl:w-1/4"
        >
          <SheetHeader>
            <SheetTitle className="capitalize text-center text-2xl">
              HOG Data
            </SheetTitle>
            <SheetDescription className="text-center space-y-2 flex flex-col">
              <span className="capitalize">
                created for Chitpur depot HOG data record Keeping.
              </span>
              <span>version : 1.0.0 - (beta)</span>
              <span className="text-xs text-slate-400">
                Created by : Sujan Mondal(JEE/TL & AC/CP)
              </span>
            </SheetDescription>
          </SheetHeader>
          <Separator className="my-4" />
          <div className="rounded-md p-2 text-center space-y-2">
            <div>
              <SheetClose asChild>
                <Link href="/">Home</Link>
              </SheetClose>
            </div>

            {session ? (
              <>
                <div>
                  <SheetClose asChild>
                    <Link href="/hog_form">Hog Form</Link>
                  </SheetClose>
                </div>
                {session.user.isAdmin && (
                  <div>
                    <SheetClose asChild>
                      <Link href="/data_table">Data Table</Link>
                    </SheetClose>
                  </div>
                )}
                <div className="capitalize border rounded-md py-2 bg-teal-100">
                  <SheetClose asChild>
                    <Link href={`/profile/${session.user.id}`}>
                      {session.user.name}
                    </Link>
                  </SheetClose>
                </div>
                <div>
                  <SheetClose asChild>
                    <Link href={"/logout"}>Log out</Link>
                  </SheetClose>
                </div>
              </>
            ) : (
              <>
                <div>
                  <SheetClose asChild>
                    <Link href={"/register"}>Register</Link>
                  </SheetClose>
                </div>
                <div>
                  <SheetClose asChild>
                    <Link href={"/login"}>Log in</Link>
                  </SheetClose>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
