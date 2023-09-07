import Link from "next/link";

export const metadata = {
    title: "Salón",
  }

export default function RoomLayout ({children}) {
    return <>
    <nav>
        <h3>Seccion de Mesas</h3>
        <ul>
            <li><Link href={"/pages/room/tables"}>Mesas</Link></li>
        </ul>
    </nav>
    {children}
    </>;
}