"use client";
import Link from "next/link";
import { Toaster, toast } from "sonner";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-200 p-10">
      <Link href={`/pages/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-5">
          {post.id}
          {": "}
          {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <Toaster richColors />
      <button
        onClick={() => {
          toast.error("No hay enlaces en este post", {
            style: {
              boxShadow: "none",
            },
          });
        }}
      >
        Ver Post
      </button>
    </div>
  );
};

export default PostCard;
