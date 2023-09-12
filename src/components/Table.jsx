import React from "react";
import { MdTableRestaurant } from "react-icons/md";
import "./table.css";
import Link from "next/link";

const Table = ({ table }) => {
  return (
    <div className="table-container m-5">
      <Link href={`/pages/room/${table.id}`}>
        <MdTableRestaurant className="table" />
        <h3>Mesa # {table.id}</h3>
      </Link>
    </div>
  );
};

export default Table;
