import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-12 text-white absolute w-full z-10 h-20 top-0 bg-gray-800 bg-opacity-60">
      <Link href={"/"}>
        <header className="w-14">
          <img src="/assets/5nbg.png" alt="Icono del restaurante." />
        </header>
      </Link>
      <ul className="flex gap-5">
        <li>
          <Link
            href={"/pages/about"}
            className="border-b border-transparent hover:border-white"
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            href={"/pages/users"}
            className="border-b border-transparent hover:border-white"
          >
            Usuarios
          </Link>
        </li>
        <li>
          <Link
            href={"/pages/room"}
            className="border-b border-transparent hover:border-white"
          >
            Restaurante
          </Link>
        </li>
        <li>
          <Link
            href={"/pages/posts"}
            className="border-b border-transparent hover:border-white"
          >
            Publicaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
