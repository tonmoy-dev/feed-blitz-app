import useProfile from "./useProfile";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL; // base url

const useAvatar = (post) => {
  const { state } = useProfile(); // state from LoggedIn user's profile

  // checking that the post's is the loggedIn user or not!
  const isLoggedInUser = post?.author?.id === state?.user?.id;

  // taking avatar image from profile state or posts state
  const avatar = isLoggedInUser
    ? `${state?.user?.avatar}`
    : `${post?.author?.avatar}`;
  const avatarURL = `${baseUrl}/${avatar}`; // avatar image url

  return { avatarURL };
};

export default useAvatar;
