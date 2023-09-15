import { NextResponse } from "next/server";

export async function GET() {
  //query DB, extract params, communicate other APIS
  return NextResponse.json("Mesas");
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
