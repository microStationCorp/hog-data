import { HogDataType, columns } from "@/components/profilePage/columnDef";
import UserInfo from "@/components/profilePage/userinfo";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

async function getData(profileID: string): Promise<HogDataType[]> {
  const data = await prisma.hOGData.findMany({
    where: {
      user: {
        id: profileID,
      },
    },
  });

  return data;
  // Fetch data from your API here.
  // return [
  //   {
  //     id: "string",
  //     zone: "string",
  //     date_of_departure: "string",
  //     date_of_destination: "string",
  //     train_no: "string",
  //     loco_no: "string",
  //     loco_base: "string",
  //     division: "string",
  //     days_per_week: "string",
  //     days_per_month: "string",
  //     wp_power_car: "string",
  //     nwp_power_car: "string",
  //   },
  // ];
}

const getUserDetails = async (profileID: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: profileID,
    },
  });
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
