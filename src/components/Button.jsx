"use client";
import React from "react";
import { Toaster, toast } from "sonner";

const Button = (props) => {
  return (
    <div className="flex justify-end w-full">
      <button className="border border-white text-white hover:text-black hover:bg-white hover:border-black font-bold py-2 px-4 rounded my-10">
        {props.text}
      </button>
    </div>
  );
};

export const ToastButton = (props) => {
  return (
    <button
      className="border border-white text-white hover:border-blue-500 hover:text-blue-500 hover:bg-white font-bold py-2 px-4 rounded my-10"
      onClick={() => {
        toast.success(`${props.toastMessage}`, {
          style: {
            boxShadow: "none",
          },
        });
      }}
    >
      {props.text}
      <Toaster richColors />
    </button>
  );
};

export default Button;
