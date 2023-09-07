import React from "react";
import Title from "@/app/components/Title";
import Link from "next/link";

const Table = (props) => {
  return (
    <div>
      <Title title="Mesa" />
      <Link href={"/pages/room"}>Regresar al salón</Link>
    </div>
  );
};

export default Table;
