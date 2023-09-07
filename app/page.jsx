"use client";
import { Fragment } from "react";
import Title from "./components/Title";

export default function HomePage() {
  return (
    <Fragment>
      <Title title="Restaurante" />
      <button
        onClick={() => {
          alert("Reserva realizada satisfactoriamente");
        }}
      >
        Reservar
      </button>
    </Fragment>
  );
}
