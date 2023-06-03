import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const hogdata = await req.json();
  const data = await prisma.hOGData.create({
    data: {
      date_of_departure: hogdata.date_of_departure,
      date_of_destination: hogdata.date_of_destination,
      train_no: hogdata.train_no,
      loco_no: hogdata.loco_no,
      loco_base: hogdata.loco_base,
      division: hogdata.division,
      days_per_week: hogdata.days_per_week,
      days_per_month: hogdata.days_per_month,
      wp_power_car: hogdata.wp_power_car,
      nwp_power_car: hogdata.nwp_power_car,
      user: {
        connect: {
          id: hogdata.userID,
        },
      },
    },
  });

  return NextResponse.json({ data });
}
