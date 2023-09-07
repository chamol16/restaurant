import Link from "next/link";
import Title from "@/app/components/Title";

export const metadata = {
  title: "Salón",
};

function Room({ children }) {
  return (
    <>
      <nav>
        <Title title="Mesas" />
        <ul>
          <li>
            <Link href={"/pages/room/tables"}>Mesa 1</Link>
          </li>
          <li>
            <Link href={"/pages/room/tables"}>Mesa 2</Link>
          </li>
          <li>
            <Link href={"/pages/room/tables"}>Mesa 3</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default Room;
