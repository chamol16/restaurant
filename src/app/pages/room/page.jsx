import Title from "@/components/Title";
import Table from "@/components/Table";
import { Fragment } from "react";
import tablesData from "../../../data/Tables.json";
import { WhiteBack, BlackBack } from "@/components/Back";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

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
      <Banner
        src="/assets/restaurant_1.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title="Mesas" />
        <div className="grid grid-cols-3 w-full gap-5">
          {tables1.map((table) => (
            <Table table={table} key={table.id} />
          ))}
        </div>
        <WhiteBack href="/" />
      </div>
      <Footer position="relative" />
    </Fragment>
  );
}

export default Room;
