"use client";
import { Fragment } from "react";
import Title from "@/components/Title";
import { Toaster, toast } from "sonner";

export default function HomePage() {
  return (
    <Fragment>
      <Title title="Restaurante" />
      <Toaster richColors/>
      <button
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
    </Fragment>
  );
}
