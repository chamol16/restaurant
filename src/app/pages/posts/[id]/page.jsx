import { Fragment, Suspense } from "react";
import Banner from "@/components/Banner";
import Back from "@/components/Back";
import Button from "@/components/Button";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <Fragment>
      <Banner src="/assets/restaurant_2.jpg" />
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <div className="bg-gray-200 p-10 flex flex-col justify-start items-center rounded-lg">
          <h3 className="text-xl font-bold text-left w-full">
            {post.id}
            {": "}
            {post.title}
          </h3>
          <p className="pt-3">{post.body}</p>
        </div>
        <Button
          text="
            Añadir un comentario 
            "
        />
        <Back href="/pages/posts" title="Regresar" />
      </div>
    </Fragment>
  );
}

export default Page;
