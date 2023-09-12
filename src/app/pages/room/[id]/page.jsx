import Title from "@/components/Title";
import Link from "next/link";
import tablesData from "../../../../data/Tables.json";

async function loadOrder(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Table({ params }) {
  const tables1 = tablesData;
  const id = params.id;
  let totalPrice = 0;

  const mesa = tables1.find((table) => table.id === id);

  mesa.orders.forEach((o) => {
    totalPrice += o.price * o.quantity;
  });

  const orders2 = await loadOrder(params.id);

  return (
    <div>
      <Title title="Orden" />
      <p>Mesa # {id}</p>
      <p>
        Orden:
        {mesa.orders.map((o) => (
          <div key={o.product}>
            {o.product} {": "}
            {o.quantity}
          </div>
        ))}
      </p>
      <p>Precio: ₡{totalPrice}</p>

      <Link href={"/pages/room"}>Regresar al salón</Link>
    </div>
  );
}

export default Table;
