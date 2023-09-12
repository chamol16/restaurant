import { Fragment } from "react";
import PostCard from "@/components/PostCard";
import "./posts.css";
import Title from "@/components/Title";

export const metadata = {
  title: "Posts",
};

async function LoadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
}

async function PostPages() {
  const posts = await LoadPosts();
  return (
    <Fragment>
      <Title title="Publicaciones" />
      <div className="grid px-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </Fragment>
  );
}

export default PostPages;
