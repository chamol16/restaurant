import React from "react";
import { MdTableRestaurant } from "react-icons/md";
import Link from "next/link";

const Table = ({ table }) => {
  return (
    <div className="w-full flex flex-col items-center justify-between text-white bg-black p-10 bg-opacity-70">
      <Link href={`/pages/room/${table.id}`}>
        <MdTableRestaurant className="text-white h-full w-full" />
        <h3>Mesa # {table.id}</h3>
      </Link>
    </div>
  );
};

export default Table;
