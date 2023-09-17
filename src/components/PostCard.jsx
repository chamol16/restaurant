"use client";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-200 p-10 w-64 h-full flex flex-col justify-between items-center">
      <Link href={`/pages/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-5">
          {post.id}
          {": "}
          {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <Link
        href={`/pages/posts/${post.id}`}
        className="font-bold border-b border-black"
      >
        Ver Reseña
      </Link>
    </div>
  );
};

export default PostCard;
