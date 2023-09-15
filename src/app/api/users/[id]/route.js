import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return NextResponse.json(data);
}
