"use client";
import { useRouter, useParams } from "next/navigation";
import { Fragment } from "react";

const Back = (props) => {
  const router = useRouter();
  const route = props.href;
  return (
    <Fragment>
      <button
        onClick={() => {
          //Aquí puede ir mas lógica
          router.push(`${route}`);
        }}
      >
        <h2 className="text-xl font-bold px-10 py-5 text-custom-wine uppercase">
          Regresar
        </h2>
      </button>
    </Fragment>
  );
};

export default Back;
