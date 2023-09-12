"use client";
import { Fragment } from "react";
import { Toaster, toast } from "sonner";

export const SucessToaster = () => {
  return (
    <Fragment>
      <Toaster richColors />

      <button
        onClick={() => {
          toast.success("Success", {
            style: {
              boxShadow: "none",
            },
          });
        }}
      >
        Click
      </button>
    </Fragment>
  );
};

export const ErrorToaster = () => {
  return (
    <Fragment>
      <Toaster richColors />

      <button
        onClick={() => {
          toast.error("Error", {
            style: {
              boxShadow: "none",
            },
          });
        }}
      >
        Click
      </button>
    </Fragment>
  );
};
