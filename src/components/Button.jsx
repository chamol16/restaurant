"use client";
import React from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const Button = (props) => {
  return (
    <button className="border border-white text-white hover:text-black hover:bg-white hover:border-black font-bold py-2 px-4 rounded">
      {props.text}
    </button>
  );
};

export const ToastButton = (props) => {
  const router = useRouter();

  return (
    <button
      className="border border-white text-white hover:border-blue-500 hover:text-blue-500 hover:bg-white font-bold py-2 px-4 rounded"
      onClick={() => {
        toast.success(`${props.toastMessage}`, {
          style: {
            boxShadow: "none",
          },
        });
        setTimeout(() => {
          router.push(`${props.route}`);
        }, 2000);
      }}
    >
      {props.text}
      <Toaster richColors />
    </button>
  );
};

export default Button;
