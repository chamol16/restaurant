import Title from "@/components/Title";
import tablesData from "../../../../data/Tables.json";
import Back from "@/components/Back";

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
    <div>
      <Title title="Orden" />
      <div className="flex flex-col items-center border-4 rounded-lg border-custom-wine py-5 mx-auto w-2/4">
        <p className="text-xl text-custom-wine">Mesa # {id}</p>
        <div className="flex flex-col justify-between p-5 w-96">
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
          <hr className="bg-custom-wine h-1 my-1" />
          <div className="flex justify-between">
            <span>Precio sin IVA:</span>
            <span>₡{totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>IVA:</span>
            <span>₡{iva}</span>
          </div>
          <hr className="bg-custom-wine h-1 my-1" />
          <div className="flex justify-between">
            <span>Precio Total:</span>
            <span>₡{totalPrice + iva}</span>
          </div>
        </div>
      </div>
      <Back href="/pages/room" />
    </div>
  );
}

export default Table;
