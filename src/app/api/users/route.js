import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  //console.log(process.env.TOKEN);
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const { id, name, lastName, rol, email, bio, avatar } = await request.json();
  const newUser = await prisma.user.create({
    data: {
      id,
      name,
      lastName,
      rol,
      email,
      bio,
      avatar,
    },
  });
  return NextResponse.json(newUser);
}
