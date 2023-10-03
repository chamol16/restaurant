"use client";
import { Fragment, Suspense, useEffect } from "react";
import Banner from "@/components/Banner";
import { BlackBack, WhiteBack } from "@/components/Back";
import Link from "next/link";
import { useState } from "react";
import { ToastButton } from "@/components/Button";

async function loadPost({ id }) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();
  return data;
}
async function updatePost({ id, title, description, userId }) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description, userId }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

function Page({ params }) {
  const id = params.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = 115640040;

  useEffect(() => {
    async function fetchData() {
      await loadPost({ id });
    }
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = await updatePost({
      id,
      title,
      description,
      userId,
    });
    console.log(updatedPost);
  };

  return (
    <Fragment>
      <Banner src="/assets/restaurant_2.jpg" />
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <div className="bg-gray-200 p-10 flex flex-col justify-start items-center rounded-lg">
          <form onSubmit={onSubmit}>
            <label htmlFor="title" className="font-bold text-sm text-black">
              Título del post:
            </label>
            <input
              id="title"
              type="text"
              className="border border-gray-400 p-2 mb-4 w-full"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label
              htmlFor="description"
              className="font-bold text-sm text-black"
            >
              Descripción del post:
            </label>
            <textarea
              id="description"
              rows={3}
              className="border border-gray-400 p-2 mb-4 w-full"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>
            <div className="flex justify-evenly">
              <ToastButton
                text="Guardar cambios"
                toastMessage="Cambios registrados satisfactoriamente"
                route="/pages/posts?refresh=true"
              />
              <Link
                href={"/pages/posts"}
                className="border border-white text-white hover:text-black hover:bg-white hover:border-black font-bold py-2 px-4 rounded"
              >
                Cancelar
              </Link>
            </div>
          </form>
          <div className="flex justify-evenly w-full p-16"></div>
        </div>
        <BlackBack href="/pages/posts" title="Regresar" />
      </div>
    </Fragment>
  );
}

export default Page;
