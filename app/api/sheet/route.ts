import { NextResponse } from "next/server";
import { sheet } from "@/lib/googleSpreadsheet";

type SheetFormI = {
  name: string;
  roll: string;
  message: string;
};

export async function POST(req: Request) {
  const values = (await req.json()) as SheetFormI;

  try {
    const response = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[values.name, values.roll, values.message]],
      },
    });

    return NextResponse.json({ data: response.data });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "something wrong" });
  }

  //   return NextResponse.json({ values });
}
