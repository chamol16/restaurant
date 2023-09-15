import Title from "@/components/Title";
import Table from "@/components/Table";
import { Fragment } from "react";
import tablesData from "../../../data/Tables.json";
import Back from "@/components/Back";

export const metadata = {
  title: "Salón",
};

async function LoadTables() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function Room() {
  const tables1 = tablesData;
  const tables2 = await LoadTables();

  return (
    <Fragment>
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title="Mesas" />
        <div className="grid grid-cols-3 justify-items-center">
          {tables1.map((table) => (
            <Table table={table} key={table.id} />
          ))}
        </div>
        <Back href="/" />
      </div>
    </Fragment>
  );
}

export default Room;
