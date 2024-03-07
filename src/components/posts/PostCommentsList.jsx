import getBaseURL from "../../utils/getBaseURL";

export default function PostCommentsList({ postComments }) {
  //   console.log(postComments);
  const { baseURL } = getBaseURL();

  return (
    <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
      {postComments?.map((comment) => (
        //  single comment
        <div key={comment?.id} className="flex items-center gap-3 pt-4">
          <img
            className="max-w-6 max-h-6 rounded-full"
            src={`${baseURL}/${comment?.author?.avatar}`}
            alt="avatar"
          />
          <div>
            <div className="flex gap-1 text-xs lg:text-sm">
              <span>{comment?.author?.name}</span>
              <span>{comment?.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
