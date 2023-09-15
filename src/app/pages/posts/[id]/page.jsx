import PostCard from "../page";
import { Fragment, Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <Fragment>
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-left w-full">
          {post.id}
          {": "}
          {post.title}
        </h3>
        <p className="pt-3">{post.body}</p>
        <Suspense fallback={<div>Cargando otras publicaciones...</div>}>
          <PostCard />
        </Suspense>
      </div>
    </Fragment>
  );
}

export default Page;
