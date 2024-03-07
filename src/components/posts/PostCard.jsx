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
        <PostBody postThumbnail={post?.image} postContent={post?.content} />

        {/* <!-- post actions --> */}
        <PostActions postId={post?.id} commentCount={post?.comments?.length} />

        {/* <!-- comment section --> */}
        <PostComments post={post} />
      </article>
    </>
  );
}
