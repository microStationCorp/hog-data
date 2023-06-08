import { columns } from "@/components/profilePage/columnDef";
import UserInfo from "@/components/profilePage/userinfo";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import { HOGData } from "@prisma/client";
import { Suspense } from "react";

async function getData(profileID: string): Promise<HOGData[]> {
  const data = await prisma.hOGData.findMany({
    where: {
      user: {
        id: profileID,
      },
    },
  });

  return data;
}

const getUserDetails = async (profileID: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: profileID,
    },
  });
  // console.log(user);
  return user;
};

export default async function Profile({
  params,
}: {
  params: { profileID: string };
}) {
  const user = await getUserDetails(params.profileID);
  const data = await getData(params.profileID);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Skeleton className="h-12 w-4/5 rounded-lg bg-slate-300">
              Loading...
            </Skeleton>
          </div>
        }
      >
        <UserInfo user={user} />
      </Suspense>

      {/* TABLE */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Skeleton className="h-12 w-4/5 rounded-lg bg-slate-300">
              Loading...
            </Skeleton>
          </div>
        }
      >
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </Suspense>
    </>
  );
}
