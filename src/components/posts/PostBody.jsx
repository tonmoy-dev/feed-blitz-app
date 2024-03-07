const baseUrl = import.meta.env.VITE_SERVER_BASE_URL; // base url

export default function PostBody({ postThumbnail, postContent }) {
  const thumbnailURL = `${baseUrl}/${postThumbnail}`;

  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <p className="mb-4">{postContent ?? "No content available!"}</p>

      {postThumbnail && (
        <div className="flex items-center justify-center overflow-hidden">
          <img className="max-w-full" src={thumbnailURL} alt="poster" />
        </div>
      )}
    </div>
  );
}
