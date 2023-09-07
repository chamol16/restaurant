import PostCard from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando otras publicaciones...</div>}>
        <PostCard />
      </Suspense>
    </div>
  );
}

export default Page;
