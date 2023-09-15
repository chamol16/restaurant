import { NextResponse } from "next/server";

export async function GET() {
  //query DB, extract params, communicate other APIS
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return NextResponse.json({ data });
}

export function POST() {
  return NextResponse.json({
    message: "creando datos",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando datos",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando datos",
  });
}
