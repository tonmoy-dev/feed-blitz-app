import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

export default function PostCard({ post }) {
  return (
    <>
      <article className="card mt-6 lg:mt-8">
        {/* <!-- post header --> */}
        <PostHeader post={post} />

        {/* <!-- post body --> */}
        <PostBody />

        {/* <!-- post actions --> */}
        <PostActions />

        {/* <!-- comment section --> */}
        <PostComments />
      </article>
    </>
  );
}
