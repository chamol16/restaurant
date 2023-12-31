import React from "react";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className={`w-full ${props.position} bottom-0`}>
      <footer className=" text-white mt-20 w-full bg-gray-800 bg-opacity-70 uppercase">
        <div className="container mx-auto text-center p-5">
          <p>&copy; 2023 Sport & Vista Restaurant</p>
          <div className="mt-2">
            <Link href="/pages/about" className="text-white mx-2">
              Acerca de nosotros
            </Link>
            <Link href="/pages/contact" className="text-white mx-2">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
