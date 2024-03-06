import { useEffect } from "react";
import { actions } from "../actions";
import useApi from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";

export default function Profile() {
  // profile states will be managed by reducer
  const { state, dispatch } = useProfile();
  const { user, posts, loading, error } = state;

  const { api } = useApi();
  const { auth } = useAuth();
  let fullName = "";

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
  }, [api, auth?.user?.id, dispatch]);

  if (user) {
    fullName = `${user?.firstName} ${user?.lastName}`;
  }
  if (loading) {
    return <div>Fetching profile data...</div>;
  }
  return (
    <>
      <div>
        <p>Welcome {fullName}</p>
        <p>You have {posts?.length} posts</p>
        {error && <p>There is an error: {error}</p>}
      </div>
    </>
  );
}
