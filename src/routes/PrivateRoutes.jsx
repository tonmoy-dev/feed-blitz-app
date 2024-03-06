import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/utility/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

// creating private or protected routes
export default function PrivateRoutes() {
  const { auth } = useAuth(); // current auth info
  return (
    <>
      {/* if there is a user and a valid authToken for that user  */}
      {auth?.authToken ? (
        <>
          {/* We have used ProfileProvider here, it provides Profile Context API to its inner elements. This profile information only can be used after a successful login. Thats why we can't use this Context to wrap the whole <App/> or <Route/> or another places. */}
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet /> {/* pages and routes */}
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
