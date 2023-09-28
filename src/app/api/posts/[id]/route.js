import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const postUpdated = await prisma.post.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(postUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deletedPost);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
