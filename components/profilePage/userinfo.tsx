"use client";

import { Edit3 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { User } from "@prisma/client";

export default function UserInfo({ user }: { user: User | null }) {
  return (
    <Card className="mx-4 relative">
      <CardHeader>
        <CardTitle className="capitalize flex flex-col items-center text-center sm:text-start">
          <span className="text-2xl">{user?.name}</span>
          <span className="text-base text-slate-600">{user?.designation}</span>
          <span className="capitalize text-sm text-slate-600">
            Username : {user?.username}
          </span>
        </CardTitle>
      </CardHeader>
      <Edit3 className="absolute top-1 right-1 w-4 h-4 text-blue-500" />
    </Card>
  );
}
