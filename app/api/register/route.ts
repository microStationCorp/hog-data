import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { name, username, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (user !== null) {
    return NextResponse.json({ user: null, message: "user Already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: name,
      username: username,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    user: newUser,
    message: "user created successfully",
  });
}
