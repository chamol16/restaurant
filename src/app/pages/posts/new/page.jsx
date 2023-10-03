"use client";
import { useRouter } from "next/navigation";
import { ToastButton } from "@/components/Button";
import { WhiteBack } from "@/components/Back";
import Link from "next/link";

const NewPost = (props) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const userId = 115640040;

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, description, userId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/pages/posts");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-2/4" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm text-white">
          Título de la reseña:
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Título"
        />
        <label htmlFor="description" className="font-bold text-sm text-white">
          Descripción de la reseña:
        </label>
        <textarea
          id="description"
          rows={3}
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Descripción"
        ></textarea>
        <div className="flex justify-between">
          <ToastButton
            text="Crear Reseña"
            toastMessage="Reseña realizada satisfactoriamente"
            route="/pages/posts?refresh=true"
          />
          <Link
            href={"/pages/posts"}
            className="border border-white text-white hover:border-blue-500 hover:text-blue-500 hover:bg-white font-bold py-2 px-4 rounded"
          >
            Regresar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
