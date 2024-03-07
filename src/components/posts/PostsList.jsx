import PostCard from "./PostCard";

export default function PostsList({ posts }) {
  return (
    <>
      <div>PostsList</div>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}
