"use client";
import { Fragment } from "react";
import { Toaster, toast } from "sonner";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <Fragment>
      <Banner
        src="/assets/berlin.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center rounded-lg">
        <div className="uppercase relative text-white p-2">
          Berlín, San Ramón
        </div>
        <h1 className="text-2xl font-bold px-10 py-5 text-white uppercase relative p-2">
          Sport & Vista Restaurant
        </h1>
        <button
          className="uppercase border border-solid border-white relative text-white p-2 w-32 hover:bg-white hover:text-black"
          onClick={() => {
            toast.success("Reserva realizada satisfactoriamente", {
              style: {
                boxShadow: "none",
              },
            });
          }}
        >
          Reservar
        </button>
      </div>
      <Toaster richColors />
      <Footer />
    </Fragment>
  );
}
