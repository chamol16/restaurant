import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-5 text-white bg-custom-wine">
      <Link href={"/"}>
        <header className="text-3xl font-bold uppercase">
          Sports & Vista Restaurant
        </header>
      </Link>
      <ul>
        <li>
          <Link href={"/pages/about"}>Nosotros</Link>
        </li>
        <li>
          <Link href={"/pages/users"}>Usuarios</Link>
        </li>
        <li>
          <Link href={"/pages/room"}>Salón</Link>
        </li>
        <li>
          <Link href={"/pages/posts"}>Publicaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
