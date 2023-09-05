import Link from "next/link";

export default function RoomLayout ({children}) {
    return <>
    <nav>
        <h3>Seccion de Mesas</h3>
        <ul>
            <li><Link href={"/room/tables"}>Mesas</Link></li>
        </ul>
    </nav>
    {children}
    </>;
}