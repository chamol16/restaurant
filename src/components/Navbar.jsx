import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar p-12 text-white absolute w-full h-20 z-10 top-0 left-0 bg-gray-800 bg-opacity-60`}
    >
      <Link href={"/"}>
        <header className="w-14">
          <img src="/assets/5nbg.png" alt="Icono del restaurante." />
        </header>
      </Link>
      <ul>
        <li>
          <Link href={"/pages/about"} className="nav-links">
            Nosotros
          </Link>
        </li>
        <li>
          <Link href={"/pages/users"} className="nav-links">
            Usuarios
          </Link>
        </li>
        <li>
          <Link href={"/pages/room"} className="nav-links">
            Restaurante
          </Link>
        </li>
        <li>
          <Link href={"/pages/posts"} className="nav-links">
            Publicaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
