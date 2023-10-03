import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 text-white absolute w-full z-30 h-20 top-8 uppercase">
      <Link href={"/"}>
        <header className="w-14">
          <img src="/assets/logo_4.png" alt="Icono del restaurante." />
        </header>
      </Link>
      <ul className="flex gap-10">
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
            Personal
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
            Reseñas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
