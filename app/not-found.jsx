import Link from "next/link";

export default function NotFound() {
   return (<section>
    <h1>404 Not found</h1>
    <p>Página no encontrada</p>
    <Link href={"/"}>Regresar al Restaurante</Link>
    </section>);
}