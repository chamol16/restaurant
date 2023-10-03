import Title from "@/components/Title";
import tablesData from "../../../../data/Tables.json";
import {WhiteBack, BlackBack} from "@/components/Back";
import { Fragment } from "react";
import Banner from "@/components/Banner";

async function loadOrder(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Table({ params }) {
  const tables1 = await tablesData;
  const id = params.id;
  let totalPrice = 0;

  const mesa = tables1.find((table) => table.id === id);

  mesa.orders.forEach((o) => {
    totalPrice += o.price * o.quantity;
  });

  const orders2 = await loadOrder(params.id);
  const iva = totalPrice * 0.13;

  return (
    <Fragment>
      <div className="h-full w-full bg-black">
        <Banner src="/assets/bill_2.jpg" />
        <div className="relative p-32 top-0 flex flex-col items-center justify-center">
          <Title title="Orden" />
          <div className="flex flex-col items-center border-4 rounded-lg border-white py-5 mx-auto lg:w-96 sm:w-96">
            <p className="text-xl text-white">Mesa # {id}</p>
            <div className="flex flex-col justify-between p-5 sm:w-96 lg:w-96 text-white">
              {mesa.orders.map((o) => (
                <div
                  key={o.product}
                  className="flex flex-row justify-between items-center"
                >
                  <div>
                    {o.product} {": "}
                    {o.quantity}
                  </div>
                  <div>
                    {"₡"}
                    {o.price}
                  </div>
                </div>
              ))}
              <hr className="bg-white h-1 my-1" />
              <div className="flex justify-between">
                <span>Precio sin IVA:</span>
                <span>₡{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>IVA:</span>
                <span>₡{iva}</span>
              </div>
              <hr className="bg-white h-1 my-1" />
              <div className="flex justify-between">
                <span>Precio Total:</span>
                <b>₡{totalPrice + iva}</b>
              </div>
            </div>
          </div>
          <WhiteBack href="/pages/room" />
        </div>
      </div>
    </Fragment>
  );
}

export default Table;
