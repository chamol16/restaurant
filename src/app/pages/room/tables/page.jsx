import Title from "@/components/Title";
import Link from "next/link";

const Table = () => {
  return (
    <div>
      <Title title="Mesa" />
      <Link href={"/pages/room"}>Regresar al salón</Link>
    </div>
  );
};

export default Table;
