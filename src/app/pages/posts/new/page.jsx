"use client";
import { useRouter } from "next/navigation";
import { ToastButton } from "@/components/Button";

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
          Título del post:
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Título"
        />
        <label htmlFor="description" className="font-bold text-sm text-white">
          Descripción del post:
        </label>
        <textarea
          id="description"
          rows={3}
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Descripción"
        ></textarea>

        <ToastButton
          text="Crear post"
          toastMessage="Post realizado satisfactoriamente"
        />
      </form>
    </div>
  );
};

export default NewPost;
