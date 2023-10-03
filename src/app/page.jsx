import { Fragment } from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { ToastButton } from "@/components/Button";

export default function HomePage() {
  return (
    <Fragment>
      <Banner
        src="/assets/banner_1.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center rounded-lg">
        <div className="uppercase text-white p-2">Berlín, San Ramón</div>
        <h1 className="text-2xl font-bold px-10 py-5 text-white uppercase p-2">
          Sport & Vista Restaurant
        </h1>
        <ToastButton
          text="Reservar"
          toastMessage="Reserva realizada satisfactoriamente"
        />
      </div>
      <Footer position="absolute" />
    </Fragment>
  );
}
