"use client";

export default function HomePage() {
  return (
    <section>
      <h1>Restaurante</h1>
      <button
        onClick={() => {
          alert("Reserva realizada satisfactoriamente");
        }}
      >
        Reservar
      </button>
    </section>
  );
}
