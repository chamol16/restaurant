import { Fragment } from "react";
import PostCard from "@/components/PostCard";
import "./posts.css";
import Title from "@/components/Title";
import Back from "@/components/Back";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Posts",
};

async function loadPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data;
}

async function Posts(props) {
  const posts = await loadPosts();
  return (
    <Fragment>
      <Banner src="/assets/restaurant_1.jpg" />
      <div className="h-full w-full bg-black">
        <div className="relative p-32 top-0 flex flex-col items-center justify-center">
          <Title title="Reseñas" />
          <div className="grid px-5">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
          <Back href="/" />
        </div>
      </div>
    </Fragment>
  );
}

export default Posts;
