import Link from "next/link";
import { SucessToaster, ErrorToaster } from "./Toast";

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
      <ErrorToaster />
    </div>
  );
};

export default PostCard;
