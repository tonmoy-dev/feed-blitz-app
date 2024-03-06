import { useEffect } from "react";
import { actions } from "../actions";
import Posts from "../components/profile/Posts";
import ProfileInfo from "../components/profile/ProfileInfo";
import useApi from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";

export default function Profile() {
  // profile states will be managed by reducer
  const { state, dispatch } = useProfile();

  const { api } = useApi();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
      // loading state sets to true before data fetching
    });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        // after a successful response from server
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED, // after data fetching from server
            payload: response?.data, // user and posts data
          });
        }
      } catch (err) {
        console.log(err);
        dispatch({
          type: actions.profile.DATA_FETCHING_ERROR, // if there is an unsuccessful data fetching
          payload: {
            error: err.message, // error message from server
          },
        });
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div>Fetching profile data...</div>;
  }
  return (
    <>
      <ProfileInfo />
      <Posts />
    </>
  );
}
