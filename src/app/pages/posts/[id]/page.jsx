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
      <div className="px-5 py-5">
        <h3 className="text-xl font-bold">
          {post.id}
          {": "}
          {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
      <div>
        <Suspense fallback={<div>Cargando otras publicaciones...</div>}>
          <PostCard />
        </Suspense>
      </div>
    </Fragment>
  );
}

export default Page;
