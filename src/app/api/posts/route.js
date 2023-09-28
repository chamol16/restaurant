import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request) {
  const { id, title, description, userId } = await request.json();
  const newPost = await prisma.post.create({
    data: {
      id,
      title,
      description,
      userId,
    },
  });
  return NextResponse.json(newPost);
}
