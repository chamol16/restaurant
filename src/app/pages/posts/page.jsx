import { Fragment } from "react";
import PostCard from "@/components/PostCard";
import "./posts.css";
import Title from "@/components/Title";
import Back from "@/components/Back";

export const metadata = {
  title: "Posts",
};

async function LoadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
}

async function PostPages(props) {
  const posts = await LoadPosts();
  return (
    <Fragment>
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title="Publicaciones" />
        <div className="grid px-5">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
        <Back href="/" />
      </div>
    </Fragment>
  );
}

export default PostPages;
