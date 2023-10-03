"use client";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-200 p-10 h-full flex flex-col justify-between items-center">
      <h3 className="text-xl font-bold mb-5">{post.title}</h3>
      <p>{post.description}</p>
      <Link
        href={`/pages/posts/${post.id}`}
        className="font-bold border-b border-black"
      >
        Editar Reseña
      </Link>
    </div>
  );
};

export default PostCard;
