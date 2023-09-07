"use client";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-200 p-10 m-3">
      <Link href={`/pages/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-5">
          {post.id}
          {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("click on post");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PostCard;
