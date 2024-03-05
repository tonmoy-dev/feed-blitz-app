import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { api } = useApi();
  const { auth } = useAuth();
  let fullName = "";

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [api, auth?.user?.id]);

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
