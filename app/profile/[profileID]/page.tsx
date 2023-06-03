import { prisma } from "@/lib/prisma";

export default async function Profile({
  params,
}: {
  params: { profileID: string };
}) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.profileID,
    },
    include: {
      HOGData: true,
    },
  });
  return (
    <>
      profile page-<pre>{JSON.stringify(user, null, 2)}</pre>{" "}
    </>
  );
}
