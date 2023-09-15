import { NextResponse } from "next/server";

export async function GET() {
  //query DB, extract params, communicate other APIS
  console.log(process.env.TOKEN);
  console.log(process.env.SECRET_KEY);

  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return NextResponse.json({ data });
}

export async function POST(request) {
  const { name, lastName } = await request.json();
  console.log(name, lastName);
  return NextResponse.json({
    message: "Creando Usuario",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando Usuario",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando Usuario",
  });
}
