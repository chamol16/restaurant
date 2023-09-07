import PostCard from "../../components/PostCard";
import "./posts.css";

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
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
