import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar py-5 text-white">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">Restaurante</h1>
      </Link>
      <ul>
        <li>
          <Link href={"/pages/about"}>Nosotros</Link>
        </li>
        <li>
          <Link href={"/pages/room"}>Salón</Link>
        </li>
        <li>
          <Link href={"/pages/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
