"use client";
import { useRouter, useParams } from "next/navigation";

export const BlackBack = (props) => {
  const router = useRouter();
  const route = props.href;
  return (
    <button
      className="flex w-full justify-end p-10 text-black"
      onClick={() => {
        //Aquí puede ir mas lógica
        router.push(`${route}`);
      }}
    >
      <h2 className="text-xl font-bold uppercase">Regresar</h2>
    </button>
  );
};

export const WhiteBack = (props) => {
  const router = useRouter();
  const route = props.href;
  return (
    <button
      className="flex w-full justify-end p-10 text-white"
      onClick={() => {
        //Aquí puede ir mas lógica
        router.push(`${route}`);
      }}
    >
      <h2 className="text-xl font-bold uppercase">Regresar</h2>
    </button>
  );
};
