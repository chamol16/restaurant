"use client";
import { useRouter, useParams } from "next/navigation";

const Back = (props) => {
  const router = useRouter();
  const route = props.href;
  return (
    <div className="flex w-full justify-end p-10">
      <button
        onClick={() => {
          //Aquí puede ir mas lógica
          router.push(`${route}`);
        }}
      >
        <h2 className="text-xl font-bold uppercase">Regresar</h2>
      </button>
    </div>
  );
};

export default Back;
