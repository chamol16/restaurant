import React from "react";
import { MdTableRestaurant } from "react-icons/md";
import Link from "next/link";

const Table = ({ table }) => {
  return (
    <div className="h-48 w-64 flex flex-col items-center justify-between">
      <Link href={`/pages/room/${table.id}`}>
        <MdTableRestaurant className="text-black h-full w-full" />
        <h3>Mesa # {table.id}</h3>
      </Link>
    </div>
  );
};

export default Table;
