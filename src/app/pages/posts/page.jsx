import { Fragment } from "react";
import PostCard from "@/components/PostCard";
import Title from "@/components/Title";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { prisma } from "@/libs/prisma";
import Link from "next/link";

export const metadata = {
  title: "Posts",
};

async function loadPosts() {
  /*const res = await fetch("http://localhost:3000/api/posts", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  const data = await res.json();
  return data;*/
  const res = await prisma.post.findMany();
  return res;
}

async function Posts(props) {
  const posts = await loadPosts();
  return (
    <Fragment>
      <div className="w-full h-full absolute top-0">
        <Banner src="/assets/restaurant_1.jpg" />
      </div>
      <div className="flex flex-col items-center justify-center relative m-24 top-0">
        <Title title="Reseñas" />
        <div className="grid grid-cols-3 w-full gap-2.5">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
        <div className="flex justify-between w-3/4 pt-10">
          <Link
            className="text-xl font-bold uppercase"
            href={"/pages/posts/new"}
          >
            Crear nueva reseña
          </Link>
          <Link className="text-xl font-bold uppercase" href={"/"}>
            Regresar
          </Link>
        </div>
      </div>
      <Footer position="relative" />
    </Fragment>
  );
}

export default Posts;
