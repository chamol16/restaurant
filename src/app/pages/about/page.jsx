import Banner from "@/components/Banner";
import { Fragment } from "react";
import Footer from "@/components/Footer";
import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const About = () => {
  return (
    <Fragment>
      <Banner
        src="/assets/restaurant_3.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="flex flex-col items-center justify-center m-24 top-0 relative">
        <Title title="Nosotros" />
        <div className="py-5 bg-gray-200 border border-gray-200 mx-auto w-3/4">
          <div className="p-6 self-start">
            <h1 className="text-2xl font-bold uppercase text-black"></h1>
          </div>
          <div className="px-10">
            <p className="m-2">
              En <b>[Nombre del Restaurante]</b>, no somos solo un restaurante;
              somos una familia que comparte la pasión por la comida y la
              hospitalidad. Nos identifica nuestra dedicación a la calidad y la
              autenticidad que nunca ha cambiado.
            </p>
            <p className="m-2">
              Somos una familia que ha servido a nuestra comunidad durante
              generaciones. Desde los abuelos que comenzaron todo en la cocina
              hasta los nietos que ahora lideran el camino, hemos transmitido la
              tradición de la buena comida y el servicio excepcional de una
              generación a otra.
            </p>
            <p className="m-2">
              Nuestra filosofía es simple: cocinar con amor y servir con una
              sonrisa. Cada plato que sale de nuestra cocina es una obra maestra
              cuidadosamente preparada, con ingredientes frescos y locales
              siempre en el corazón de nuestras recetas.
            </p>
            <p className="m-2">
              Cuando nos visitas, no solo disfrutas de una deliciosa comida,
              sino que te unes a nuestra familia. Nos enorgullece ver caras
              familiares regresar una y otra vez y recibir a nuevos amigos con
              los brazos abiertos.
            </p>
            <p className="m-2">
              En <b>[Nombre del Restaurante]</b>, no solo somos una empresa de
              alimentos, sino una experiencia culinaria, un lugar donde los
              recuerdos se crean y se comparten en torno a la mesa. Esperamos
              tenerte con nosotros y hacerte sentir como parte de nuestra
              familia.
            </p>
            <p className="m-2">
              Bienvenido a <b>[Nombre del Restaurante]</b>, donde cada comida es
              una celebración y cada cliente es parte de nuestra historia.
            </p>
            {/* 
            <div className="flex flex-col items-center justify-center border-4 p-5 m-5 border-red-100">
              <img src="/assets/abuelos.png" />
              <p className="p-2">
                José Ángel Jiménez Mora - Elida Chavarría Vargas
              </p>
            </div>
              */}
          </div>
        </div>
      </div>
      <Footer position="relative" />
    </Fragment>
  );
};

export default About;
