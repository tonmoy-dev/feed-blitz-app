import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";

export default function PostActions({ commentCount }) {
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* <!-- Like Button --> */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={LikeIcon} alt="Like" />
        <span>Like</span>
      </button>

      {/* <!-- Comment Button --> */}
      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>
      {/* <!-- Share Button --> */}

      {/* <!-- Like Button --> */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
